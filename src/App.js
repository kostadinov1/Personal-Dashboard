import {Route, Routes} from 'react-router-dom'
import Login from './components/Authentication/Login/Login';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (  

      <section id="container">
        <Header />
        <SideBar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/calendar" element={<Calendar />}/>
            <Route path='/gallery' element={<Gallery />} />

          </Routes>
        <Footer />
       
      </section>

  );
}

export default App;
