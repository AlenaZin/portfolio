import './App.css';
import { Header } from './layout/header/Header';
import { Home } from './layout/sections/home/Home';
import { About } from './layout/sections/about/About';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Testimonials } from './layout/sections/testimonials/Testimonials';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { GoTopBtn } from './components/goTopBtn/GoTopBtn';


function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Skills />
            <Works/>
            <Testimonials />
            <Contacts />
            <Footer/>
            <GoTopBtn />
        </div>
    );
}

export default App;

