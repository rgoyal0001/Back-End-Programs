import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";

export default function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Routes>
              hello
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}