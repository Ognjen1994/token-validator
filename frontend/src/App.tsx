import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TokenValidator from "./pages/TokenValidator";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TokenValidator />} />
      </Routes>
    </Router>
  );
}
