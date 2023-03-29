import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header";
import Editor from "./components/Editor";
import Snippets from "./components/Snippets";

import Dashboard from "./views/Dasboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/snippets" element={<Snippets />} />
          <Route path="/editor">  
            <Route path="/editor" element={<Editor />} />
            <Route path="/editor/:id" element={<Editor />} />
          </Route>
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
  
}

export default App
