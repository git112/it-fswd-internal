// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import Navbar from './components/Navbar';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';
// import GenerateQR from './pages/GenerateQR';
// import ScanQR from './pages/ScanQR';
// import History from './pages/History';
// import ProtectedRoute from './components/ProtectedRoute';
// import './App.css';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//     setLoading(false);
//   }, []);

//   if (loading) {
//     return (
//       <div className="loading-container">
//         <div className="loading-spinner"></div>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Toaster position="top-right" />
//       <div className="app-container">
//         <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
//         <main className="main-content">
//           <Routes>
//             <Route 
//               path="/" 
//               element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
//             />
//             <Route 
//               path="/login" 
//               element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
//             />
//             <Route 
//               path="/signup" 
//               element={isAuthenticated ? <Navigate to="/dashboard" /> : <Signup setIsAuthenticated={setIsAuthenticated} />} 
//             />
//             <Route 
//               path="/dashboard" 
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <Dashboard />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/generate" 
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <GenerateQR />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/scan" 
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <ScanQR />
//                 </ProtectedRoute>
//               } 
//             />
//             <Route 
//               path="/history" 
//               element={
//                 <ProtectedRoute isAuthenticated={isAuthenticated}>
//                   <History />
//                 </ProtectedRoute>
//               } 
//             />
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import GenerateQR from './pages/GenerateQR';
import ScanQR from './pages/ScanQR';
import History from './pages/History';
import './App.css';

function App() {
  // No longer need authentication state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Just handle loading state, no authentication check
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <Router>
      <Toaster position="top-right" />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Default route goes directly to generate */}
            <Route path="/" element={<Navigate to="/generate" />} />
            
            {/* All routes are accessible without authentication */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/generate" element={<GenerateQR />} />
            <Route path="/scan" element={<ScanQR />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;