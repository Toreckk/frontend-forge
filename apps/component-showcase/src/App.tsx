import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { ChallengeView } from "./pages/ChallengeView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="/challenges/:id" element={<ChallengeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
