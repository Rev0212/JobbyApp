import { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Jobs from './components/Jobs';
import JobItemDetails from './components/JobItemDetails';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/jobs" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
        <Route path="/jobs/:id" element={<ProtectedRoute><JobItemDetails /></ProtectedRoute>} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    );
  }
}

export default App;
