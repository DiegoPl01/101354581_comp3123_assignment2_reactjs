import Header from './components/header';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home';
import addEmployee from './addEmployee';
import employeeDetail from './employeeDetail';
import updateEmployee from "./updateEmployee";
function App() {
    return (
        <React.Fragment>
            <Header />
            <Routes>
                <Route path='/' element={<home/>} />
                <Route path='/add-employee' element={<addEmployee/>} />
                <Route path='/employee-detail/:id' element={<employeeDetail/>} />
                <Route path='/update-employee/:id' element={<updateEmployee/>} />
            </Routes>
        </React.Fragment>
    );
}

export default App;
