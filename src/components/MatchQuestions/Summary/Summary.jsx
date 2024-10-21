import { Box, Typography } from "@mui/material";
import React from "react";

export default function Summary({ question, matchId }) {
  return (
    <Box>
      {matchId === 0 && (
        <Typography variant="body2">{question.description}</Typography>
      )}
      {matchId === 1 && (
        <Typography variant="h6">Solutions will come soon</Typography>
      )}
      {matchId === 2 && (
        <Typography variant="body4">No Discussion is Added here!</Typography>
      )}
      {matchId === 3 && (
        <Typography variant="body4">You don't have any submissions</Typography>
      )}
    </Box>
  );
}
