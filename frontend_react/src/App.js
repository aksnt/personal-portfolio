import React from "react";
import { Footer, Header, Skills, Work } from "./container";
import { Navbar , MouseTracker} from "./components";
import "./App.scss";

const App = () => {
    return (
        <>
            <div className='app'>
                <div className='gradient__bg'>
                    <Navbar />
                    <Header />
                    <Skills />
                    <Work />
                    <Footer />
                </div>
            </div>
        </>
    );
};
export default App;
