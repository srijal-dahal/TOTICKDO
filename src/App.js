import Wrapper from "./Wrapper";
import { Routes, Route } from "react-router-dom";
import { Home } from "_pages";
import {ThemeToggle} from "_components/"
import { hot } from "react-hot-loader/root";
import "_presentation/font";
function App() {
  return (
    <Wrapper>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Wrapper>
  );
}

export default hot(App);
