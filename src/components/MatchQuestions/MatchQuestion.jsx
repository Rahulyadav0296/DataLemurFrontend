import { Box } from "@mui/material";
import React from "react";
import ClickDetails from "./ClickDetails/ClickDetails";
import CodeEditor from "./CodeEditor/CodeEditor";
import QueryResult from "./QueryResult/QueryResult";

function MatchQuestion() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ width: "40%" }}>
        <ClickDetails />
      </Box>
      <Box sx={{ width: "55%", borderRadius: "25px" }}>
        <CodeEditor />
        <QueryResult />
      </Box>
    </Box>
  );
}

export default MatchQuestion;
