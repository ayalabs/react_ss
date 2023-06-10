import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import "../style.css"
const Layout = () => {
    return (
        <>
            <Header />
                <main style={{marginBottom:"100px"}}>
                    <Outlet />
                </main>
            <Footer />

        </>      
    );
}

export default Layout;
