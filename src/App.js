import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import { Layout } from './components/styles';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={<Dashboard />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
