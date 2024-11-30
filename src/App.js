import { Route, Routes } from "react-router-dom";
import Login from "./Dashboard/Auth/Login";
import './css/main.css'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import SignUp from "./Dashboard/Auth/SignUp";
import Home from "./Dashboard/pages/Home";
import AiMarkter from "./Dashboard/pages/AiMarkter";
import Analysis from "./Dashboard/pages/Analysis";
import Automation from "./Dashboard/pages/Automation";
import AiImageGenration from "./Dashboard/pages/AiImageGenration";
import AiTextGenration from "./Dashboard/pages/AiITextGenration";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="/" element={<Analysis />} />
          <Route path="Ai-Markter" element={<AiMarkter />} />
          <Route path="Automation" element={<Automation />} />
          <Route path="GenrateAiImage" element={<AiImageGenration />} />
          <Route path="GenrateAitext" element={<AiTextGenration />} />
        </Route>
        <Route path="Login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
