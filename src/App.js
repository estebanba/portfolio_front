import "./App.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import { WorkContextProvider } from "./context/WorkContext";

function App() {
  return (
    <div className="App">
      <WorkContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
          </Routes>
        </Layout>
      </WorkContextProvider>
    </div>
  );
}

export default App;
