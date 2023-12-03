import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Recharts from './components/Recharts';
import Muicharts from './components/Muicharts';
import Dashboard from './components/Dashboard';
import JobOpportunities from './components/JobOpportunities';
import JobRequests from './components/JobRequests';
import User from './components/User';
import Sidebar from './components/Sidebar';

function App() {

  return (
    <div className='app'>
      {/* <Recharts/> */}
      {/* <Muicharts/> */}
      {/* <Dashboard/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/jobopportunities" element={<JobOpportunities/>}/>
        <Route path="/jobrequests" element={<JobRequests/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
