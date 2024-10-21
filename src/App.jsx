import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import InterviewQuestion from "./components/InteviewQuestion/InterviewQuestion";
import MatchQuestion from "./components/MatchQuestions/MatchQuestion";
import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./pages/Error/ErrorPage";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "questions",
        element: <InterviewQuestion />,
      },
      {
        path: "sql-tutorial",
      },
      {
        path: "questions/matching-skills",
        element: <MatchQuestion />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
