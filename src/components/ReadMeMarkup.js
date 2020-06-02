import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Header from "./Header";
import { MyContext } from "../context/MyContext";

const ReadMeMarkup = () => {
  const { repositoryName, userName } = useParams();
  const [readMe, changeReadMe] = useState("");
  const context = useContext(MyContext);

  const url = `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`;
  useEffect(() => {
    axios.get(url).then((res) => changeReadMe(res.data));
  }, [url]);
  return (
    <div style={{ background: context.background, minHeight: "100vh" }}>
      <Header
        repositoryName={repositoryName}
        userName={userName}
        showRepoName
      />
      <div
        id="description"
        style={{
          paddingLeft: 10,
          overflowX: "overlay",
          color: context.foreground,
        }}
      >
        <ReactMarkdown style={{ width: "100vw" }} source={readMe} />
      </div>
    </div>
  );
};

export default ReadMeMarkup;
