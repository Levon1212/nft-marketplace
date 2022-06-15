import React from 'react';
import Collections from "./pages/collections";
import Header from "./components/header";
import Footer from "./components/footer";
import Popup from "./components/popup";
import Test from "./pages/test/test";

const App = () => {
    return (
        <div>
            {/*<Popup/>*/}
            <Header/>
            <Collections/>
            <Footer/>
            {/*<Test/>*/}
        </div>
    );
};

export default App;