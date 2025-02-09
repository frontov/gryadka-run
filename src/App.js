import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Team from './pages/Team';
import Coaches from './pages/Coaches';
import Contacts from './pages/Contacts';
import PhotoGallery from './pages/PhotoGallery';
import { GlobalStyles } from './theme/globalStyles';


function App() {
    return (
        <Router>
            <GlobalStyles></GlobalStyles>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/training" element={<Training/>}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/coaches" element={<Coaches/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/gallery" element={<PhotoGallery/>}/>

            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;