import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './login';
import Cadastro from './cadastro';
import Home from './home';
import Gastos from './gastos';
import Ganhos from './ganhos';
import TesteApi from './testeApi';

function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cadastro" element={<Cadastro/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Gastos" element={<Gastos/>}/>
            <Route path="/Ganhos" element={<Ganhos/>}/>
            <Route path="/testeApi" element={<TesteApi/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;