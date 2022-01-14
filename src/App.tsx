import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Report from "./pages/Report";
import Passenger from "./pages/Passenger";
import Main from "./pages/Main";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/report" element={<Report />} />
        <Route path="/passenger" element={<Passenger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
