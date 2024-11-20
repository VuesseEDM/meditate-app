import Main from "./pages/main";
import Navbar from "./components/Navbar";
import Activity from "./pages/activity";
import Dettagli from "./pages/dettagli";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router basename="/meditate-app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/activity" element={<Activity />}></Route>
          <Route path="/dettagli/:title" element={<Dettagli />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
