import Wrapper from "./Wrapper";
import { Routes, Route } from "react-router-dom";
import { General, Dev, Completed, Auth } from "_pages";
import { BrowserRouter } from "react-router-dom";
import { ThemeToggle } from "_components/";
import { hot } from "react-hot-loader/root";
// import ProtectedRoutes from "_presentation/authRoutes";
import "_presentation/font";
function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <ThemeToggle />
        <Routes>
          <Route
            path="/"
            element={
                <General />
            }
          />
          <Route
            path="/dev"
            element={
                <Dev />
            }
          />
          <Route
            path="/completed"
            element={
                <Completed />
            }
          />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default hot(App);
