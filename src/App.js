import {Route, Routes} from 'react-router-dom'
import Login from './components/Authentication/Login/Login';
import Footer from './components/Footer/Footer';
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
                
          </Routes>
        <Footer />
       
      </section>

  );
}

export default App;
