import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Button, styled, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../utils/authSlice";

const CustomButton = styled(Button)(({ theme }) => ({
  color: "black",
  border: "none",
  backgroundColor: "#d3d3d3",
  height: "40px",
  padding: "0 16px",
  "&:hover": {
    backgroundColor: "#a9a9a9", // Darker shade on hover
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "300px",
  "& .MuiOutlinedInput-root": {
    height: "40px",
  },
}));

function FilterData() {
  const search = useSelector((state) => state.auth.search);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "left",
        margin: "10px 0px",
      }}
    >
      {["Category", "Difficulty", "Status"].map((item, index) => (
        <Box key={index} sx={{ margin: "0 10px" }}>
          <CustomButton>
            <strong>{item} </strong>
            <KeyboardArrowDownIcon />
          </CustomButton>
        </Box>
      ))}
      <CustomButton sx={{ margin: "0 10px" }}>
        <FilterAltOffIcon />
      </CustomButton>
      <CustomTextField
        label="Search questions/companies"
        variant="outlined"
        value={search}
        onChange={handleChange}
      />
    </Box>
  );
}

export default FilterData;
