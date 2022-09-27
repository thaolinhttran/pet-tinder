import Home from'./pages/Home';
import Dashboard from './pages/Dashboard';
import OnBoarding from './pages/OnBoarding';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path={"/onboarding"} element={<OnBoarding/>}/>
        <Route path={"/dashboard"} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
