import {
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuestion } from "../../../utils/authSlice";
import { sqlProblems } from "../../../utils/sampleData";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function Questions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleQuestion = (id) => {
    const filterQuestion = sqlProblems.find((sql) => sql.id === id);
    // console.log("FilterdQuestion is: ", filterQuestion);
    dispatch(setQuestion(filterQuestion));
    navigate("questions/matching-skills");
  };

  const difficultColors = {
    Easy: "green",
    Medium: "#eb800e",
    Hard: "red",
  };

  return (
    <>
      <TableContainer sx={{ marginTop: "25px", borderRadius: "15px" }}>
        <Table sx={{ width: "75%", margin: "0 auto" }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>COMPANY</StyledTableCell>
              <StyledTableCell>TITLE</StyledTableCell>
              <StyledTableCell>DIFFICULTY</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sqlProblems.map((sql) => (
              <StyledTableRow
                key={sql.id}
                onClick={() => {
                  handleQuestion(sql.id);
                }}
              >
                <StyledTableCell>{sql.company}</StyledTableCell>
                <StyledTableCell>{sql.title}</StyledTableCell>
                <StyledTableCell>
                  <Typography
                    sx={{
                      color: "white",
                      backgroundColor:
                        difficultColors[sql.difficulty] || "transparent",
                      padding: "5px",
                      width: "100px",
                      textAlign: "center",
                      borderRadius: "15px",
                    }}
                  >
                    {sql.difficulty}
                  </Typography>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Questions;
