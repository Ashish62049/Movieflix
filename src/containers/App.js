import { useState} from "react";
import "./App.css";
import Navbar from "../components/Navbar/Navbar";
import News from "../components/News/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
function App() {
  const pageSize = 9;
  const [progress, setProgress] = useState(0);
  const [q, setq] = useState('');
  // const [searched,setSearched]=useState(false);
  //getting apiKey from .env.local file
  const apiKey = "dae96dee6218419d8a116a1cf000e276";
  return (
    <div className="App">
      <Navbar apiKey={apiKey} setQ = {setq}/>
      <LoadingBar color="#f11946" progress={progress} waitingTime={500} />
      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              key="general"
              category="general"
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              key="business"
              category="business"
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              key="entertainment"
              category="entertainment"
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              key="health"
              category="health"
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              key="science"
              category="science"
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              key="sports"
              category="sports"
              apiKey={apiKey}
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              key="technology"
              category="technology"
              apiKey={apiKey}
            />
          }
        />
        <Route
          path={`/search/${q}`}
          element={
            <News
              setProgress = {setProgress}
              pageSize = {pageSize}
              apiKey = {apiKey}
              searched = {true}
              q={q}
              language="en"
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
