import { GithubUserData } from "../../interfaces/GithubUser";
import { FC } from "react";

interface Props {
  data: GithubUserData;
}

export const UserDetail: FC<Props> = ({ data }) => {
  const { name, email, login, avatar_url, url } = data;
  return (
    <div className="grid align-center" style={{ marginTop: "50px" }}>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <img className="avatar" src={avatar_url} alt={name} />
        <h1 style={{ textAlign: "center" }}>{name}</h1>
        <p>{email}</p>
        <p>{login}</p>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          style={{ display: "block" }}
        >
          go to GitHub
        </a>
      </div>
    </div>
  );
};
