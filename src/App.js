import "./App.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import { WorkContextProvider } from "./context/WorkContext";
import HireMePage from "./pages/HireMePage";

function App() {
  return (
    <div className="App">
      <WorkContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/hireme" element={<HireMePage />} />
          </Routes>
        </Layout>
      </WorkContextProvider>
    </div>
  );
}

export default App;
