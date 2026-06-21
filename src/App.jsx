import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import ApplicationStatus from "./pages/ApplicationStatus";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/application-status" element={<ApplicationStatus />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
