
import React from 'react';

import Navigation from './Navigation';

const Footer = () => {
    return (
        <>
           <footer style={{position:'fixed',left: "0",bottom:" 0",width: "100%",}} >
                <Navigation  />
           </footer>
        </>

    );
}

export default Footer;
