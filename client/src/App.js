import logo from "./logo.svg";
import karasu from "./images/karasu-logo.png"
import "./App.css";
import dashboard from "./pages/dashboard";
import something from "./images/somethingsWrong.png"
function App() {
  return (
     <Router>
      <Routes>
      <Route
        path="/"
        element={<dashboard />}
      />
      </Routes>
     </Router>
  );
}

export default App;
