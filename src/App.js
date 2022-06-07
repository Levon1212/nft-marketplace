import React from 'react';
import Collections from "./pages/collections";
import Header from "./components/header";
import Footer from "./components/footer";
import Test from "./pages/test/test";

const App = () => {
    return (
        <div>
            {/*<Test/>*/}
            <Header/>
            <Collections/>
            <Footer/>
        </div>
    );
};

export default App;