import { Box, Typography } from "@mui/material";
import React from "react";
import FilterData from "../FilterData/FilterData";
import PracticeQuestion from "../PracticeQuestions/PracticeQuestion";
function InterviewQuestion() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "5px",
        width: { xs: "100%", sm: "auto" },
      }}
    >
      <Box sx={{ marginLeft: "12px", marginBottom: "10px" }}>
        <Typography variant="h6">SQL & Data Interview Questions</Typography>
        <Typography variant="body1">
          Practice the most common SQL, Statistics, ML, and Python questions
          asked in FAANG Data Science & Data Analyst interviews!
        </Typography>
      </Box>
      <FilterData />
      <PracticeQuestion />
    </Box>
  );
}

export default InterviewQuestion;
