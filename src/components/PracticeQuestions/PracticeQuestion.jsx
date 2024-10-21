import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { sqlProblems } from "../../utils/sampleData";

function PracticeQuestion() {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>COMPANY</TableCell>
              <TableCell>TITLE</TableCell>
              <TableCell>CATEGORY</TableCell>
              <TableCell>DIFFICULTY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sqlProblems.map((sql) => (
              <TableRow
                key={sql.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{sql.company}</TableCell>
                <TableCell>{sql.title}</TableCell>
                <TableCell>{sql.category}</TableCell>
                <TableCell>{sql.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PracticeQuestion;
