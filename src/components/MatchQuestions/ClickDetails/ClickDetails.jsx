import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMatchId } from "../../../utils/authSlice";
import Summary from "../Summary/Summary";
function ClickDetails() {
  const question = useSelector((state) => state.auth.question);
  const matchId = useSelector((state) => state.auth.matchId);
  const listItems = ["Question", "Solution", "Discussion", "Submission"];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (question === null) {
    navigate("/");
  }

  const handleButtons = (id) => {
    console.log(listItems[id]);
    dispatch(setMatchId(id));
  };
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "16px" }}
      >
        Data Science Skills
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px", color: "gray" }}>
        {question.company} SQL Interview Question
      </Typography>
      <Box>
        <List sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                borderRadius: "8px",
              }}
              onClick={() => {
                handleButtons(index);
              }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Summary question={question} matchId={matchId} />
      {/* <Typography variant="body5">{question.submission}</Typography> */}
    </Box>
  );
}

export default ClickDetails;
