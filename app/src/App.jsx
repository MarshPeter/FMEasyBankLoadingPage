import Header from "./components/Header";
import Hero from "./components/Hero";
import Informational from "./components/Informational";
import LatestDisplay from "./components/LatestDisplay";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Hero />
                <Informational />
                <LatestDisplay />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}

export default App;
