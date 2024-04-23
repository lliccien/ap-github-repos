import { useEffect, useState } from "react";
import { gitHubApi } from "../../api/gitHubApi";
import { UserDetail } from "../components/UserDetail";
import { type GithubUserData } from "../../interfaces/GithubUser";
import { DataTableRepos } from "../components/DataTableRepos";
import { GithubRepo } from "../../interfaces/GithubRepo";
import { Button } from "primereact/button";

const getUserData = gitHubApi.get("/user");

const getUserRepoData = (login: string) => {
  return gitHubApi.get(`/users/${login}/repos`);
};

export const HomePage = () => {
  const [userData, setUserData] = useState({} as GithubUserData);
  const [userRepoData, setUserRepoData] = useState([] as GithubRepo[]);

  useEffect(() => {
    getUserData.then((res) => {
      setUserData(res.data);
      getUserRepoData(res.data.login).then((res) => {
        setUserRepoData(res.data);
      });
    });
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div>
        <UserDetail data={userData} />
      </div>
      <div className="grid">
        <div className="col-6">
          <h2>Repositories</h2>
          <p>Click on the row to go to the repository on GitHub.</p>
        </div>

        <div className="col-6" style={{ textAlign: "right" }}>
          <Button label="Logout" onClick={handleLogout} />
        </div>
        <DataTableRepos data={userRepoData} />
      </div>
    </>
  );
};
