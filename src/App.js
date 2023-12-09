import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Recharts from './components/Recharts';
import Muicharts from './components/Muicharts';
import Dashboard from './components/Dashboard';
import JobOpportunities from './components/JobOpportunities';
import JobRequests from './components/JobRequests';
import User from './components/User';
import MasterData from './components/MasterData';
import Sidebar from './components/Sidebar';
import JoNew from './components/JoNew';

function App() {

  return (
    <div className='app'>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/jobopportunities" element={<JobOpportunities/>}>
            
        </Route>
        <Route path="/jobopportunities/new" element={<JoNew/>}/>
        <Route path="/jobrequests" element={<JobRequests/>}/>
        <Route path="/user" element={<User/>}>
          
        </Route>
        <Route path="/masterdata" element={<MasterData/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

// Nested Routes
{/* <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses" element={<Courses />}>
        <Route path="search" element={<Search />}/>
        <Route path="list" element={<List />}/>
    </Route>
</Routes> */}