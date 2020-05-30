import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Header from "./Header";

const ReadMeMarkup = () => {
  const { repositoryName, userName } = useParams();
  const [readMe, changeReadMe] = useState("");
  const url = `https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`;
  useEffect(() => {
    axios.get(url).then((res) => changeReadMe(res.data));
  }, [url]);
  return (
    <div>
      <Header
        repositoryName={repositoryName}
        userName={userName}
        showRepoName
      />
      <div id="description" style={{ paddingLeft: 10, overflowX: "overlay" }}>
        <ReactMarkdown style={{ width: "100vw" }} source={readMe} />
      </div>
    </div>
  );
};

export default ReadMeMarkup;
