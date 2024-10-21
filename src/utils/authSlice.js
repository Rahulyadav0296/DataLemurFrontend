import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  question: null,
  matchId: 0,
  results: [],
  // const [results, setResults] = useState([]);
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setQuestion(state, action) {
      state.question = action.payload;
    },
    setMatchId(state, action) {
      state.matchId = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
  },
});

export const { setSearch, setQuestion, setMatchId, setResults } =
  authSlice.actions;

export default authSlice.reducer;
