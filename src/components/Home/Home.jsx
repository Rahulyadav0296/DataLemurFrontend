import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Questions from "./Questions/Questions";

function Home() {
  return (
    <Box sx={{ fontFamily: '"Poppins", sans-serif' }}>
      <Box sx={{ marginBottom: "5px" }}>
        <Typography variant="h5" sx={{ marginLeft: "15px" }}>
          Ace the SQL & Data Science Interview{" "}
        </Typography>
        <Typography sx={{ marginLeft: "15px" }}>
          Practice SQL Interview and Data Science Interview questions on
          DataLemur. Made by Nick Singh, Best-Selling Author of{" "}
          <Link
            to="https://www.amazon.com/dp/0578973839?language=en_US&linkCode=sl1&linkId=be42c7443fa05a3c9d783fee4e6f4762&ref_=as_li_ss_tl&tag=datalemur-20"
            target="_blank"
          >
            Ace the Data Science Interview
          </Link>
        </Typography>
      </Box>
      <Questions />
    </Box>
  );
}

export default Home;
