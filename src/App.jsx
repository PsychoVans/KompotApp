import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header";
import Snippets from "./components/Snippets";

import Dashboard from "./views/Dasboard";
import SignUp from "./views/Signup";
import Signin from "./views/Signin";


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
         <Route path="/" element={<Dashboard />}>
          </Route>
          <Route path="/snippets" element={<Snippets />}/> 
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </Router>
    </>
  ); 
}

export default App
