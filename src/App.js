import React,{useState} from 'react';
import Collections from "./pages/collections";
import Header from "./components/header";
import Footer from "./components/footer";
import Popup from "./components/popup";

const App = () => {
    return (
        <div>

            <Header/>
            <Collections/>
            <Footer/>
        </div>
    );
};

export default App;