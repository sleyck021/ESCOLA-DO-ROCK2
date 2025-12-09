import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsList from "../pages/Students/StudentsList";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentsList />} />
      </Routes>
    </BrowserRouter>
  );
}
