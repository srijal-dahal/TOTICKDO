import Wrapper from "./Wrapper";
import { Routes, Route } from "react-router-dom";
import { General, Dev, Completed, Auth } from "_pages";
import { ThemeToggle } from "_components/";
import { hot } from "react-hot-loader/root";
import Template from "src/pages/Template";
import "_presentation/font";
function App() {
  return (
    <Wrapper>
      <ThemeToggle />
      <Routes>
        <Route path="/auth" element={<Auth/>} />
        <Route path="/" element={<General />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </Wrapper>
  );
}

export default hot(App);
