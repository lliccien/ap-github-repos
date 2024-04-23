import { useEffect, useState } from "react";
import { gitHubApi } from "../../api/gitHubApi";

const getUserData = gitHubApi.get("/user");

const getUserRepoData = (login: string) => {
  return gitHubApi.get(`/users/${login}/repos`);
};

export const HomePage = () => {
  const [userData, setUserData] = useState([]);
  const [userRepoData, setUserRepoData] = useState([]);

  useEffect(() => {
    getUserData.then((res) => {
      console.log(res.data);
      setUserData(res.data);
      getUserRepoData(res.data.login).then((res) => {
        console.log(res.data);
        setUserRepoData(res.data);
      });
    });
  }, []);
  return (
    <>
      <h1>HomePage</h1>
      <div>
        <pre>{userData && JSON.stringify(userData, null, 2)}</pre>
      </div>
      <div>
        <pre>{userRepoData && JSON.stringify(userRepoData, null, 2)}</pre>
      </div>
    </>
  );
};
