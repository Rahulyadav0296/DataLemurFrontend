import Editor from "@monaco-editor/react";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../../../utils/authSlice";

function CodeEditor() {
  const question = useSelector((state) => state.auth.question);
  const results = useSelector((state) => state.auth.results);
  const [sqlQuery, setSqlQuery] = useState("");
  const [error, setError] = useState(null);
  const [checkOutput, setCheckOutput] = useState("");
  const [showAccept, setShowAccept] = useState(false);
  const dispatch = useDispatch();

  const compareOutput = (expected, actual) => {
    console.log("expected is: ", expected);
    console.log("actual is: ", actual);
    if (typeof expected !== typeof actual) return false;

    // compare arrays
    if (Array.isArray(expected) && Array.isArray(actual)) {
      if (expected.length !== actual.length) return false;
      return expected.every((item, index) =>
        compareOutput(item, actual[index])
      );
    }

    // Compare Objects
    if (typeof expected === "object" && typeof actual === "object") {
      const expectedKey = Object.keys(expected);
      const actualKey = Object.keys(actual);

      if (expectedKey.length !== actualKey.length) {
        return false;
      }

      return expectedKey.every((key) =>
        compareOutput(expectedKey[key], actualKey[key])
      );
    }

    return expected === actual;
  };

  const handleQueryChange = (value) => setSqlQuery(value);

  const runSql = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/run-query", {
        query: sqlQuery, // Change `userQuery` to `query`
      });
      // console.log("responses are: ", response.data.result);
      dispatch(setResults(response.data));
      const isMatch = compareOutput(
        question.expected_output,
        response.data.result
      );
      isMatch
        ? setCheckOutput("Test Passed for Query!")
        : setCheckOutput("Test Failed for Query!");
      setError(null); // Reset error state if successful
      setShowAccept(true);
    } catch (error) {
      console.log(error);
      // Optionally, display error message to the user
      setError(error.response?.data?.error || "An error occurred");
      setResults([]);
      setShowAccept(true);
    }
  };

  // console.log("Question are coming from ouput: ", question.expected_output);

  return (
    <Box>
      <Typography variant="h6">Language: </Typography>
      <Button
        sx={{
          color: "white",
          padding: "5px",
          border: "none",
          margin: "5px 0",
          backgroundColor: "gray",
        }}
      >
        MySQL
      </Button>
      <Editor
        height="300px"
        language="sql"
        theme="vs-dark"
        value={sqlQuery}
        onChange={handleQueryChange}
        defaultValue="SELECT * FROM users;"
      />
      <Button onClick={runSql} sx={{}}>
        Run Query{" "}
      </Button>

      <Box sx={{ marginBottom: "10px" }}>
        <TerminalIcon style={{ color: "green" }} />
        <Typography variant="h7" sx={{ marginLeft: "5px" }}>
          TestCase
        </Typography>
      </Box>
      {showAccept && (
        <Box>
          <Typography sx={{ color: "green" }}>{checkOutput}</Typography>
          <Typography sx={{ color: "gray" }}>
            Runtime:{" "}
            {results.runtime ? `${results.runtime.toFixed(2)} ms` : "N/A"}
          </Typography>
        </Box>
      )}
      {error && (
        <Typography variant="body1" className="text-red-600">
          {error}
        </Typography>
      )}
    </Box>
  );
}

export default CodeEditor;
