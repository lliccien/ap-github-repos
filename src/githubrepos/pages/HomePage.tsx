import { useEffect, useState } from "react";
import { gitHubApi } from "../../api/gitHubApi";
import { UserDetail } from "../components/UserDetail";
import { GithubUser } from "../../interfaces/githubUser";
import { DataTableRepos } from "../components/DataTableRepos";
import { GithubRepo } from "../../interfaces/GithubRepo";

const getUserData = gitHubApi.get("/user");

const getUserRepoData = (login: string) => {
  return gitHubApi.get(`/users/${login}/repos`);
};

export const HomePage = () => {
  const [userData, setUserData] = useState({} as GithubUser);
  const [userRepoData, setUserRepoData] = useState([] as GithubRepo[]);

  useEffect(() => {
    getUserData.then((res) => {
      setUserData(res.data);
      getUserRepoData(res.data.login).then((res) => {
        setUserRepoData(res.data);
      });
    });
  }, []);

  return (
    <>
      <div>
        <UserDetail data={userData} />
      </div>
      <div>
        <h2>Repositories</h2>
        <p>Click on the row to go to the repository on GitHub.</p>
        <DataTableRepos data={userRepoData} />
      </div>
    </>
  );
};
