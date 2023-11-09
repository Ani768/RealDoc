import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import {v4 as uuid} from 'uuid'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to={`/RealDoc/${uuid()}`} />} />
        <Route path="/RealDoc/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
