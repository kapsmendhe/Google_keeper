import React from "react";

function Footer() {
    const dateYear = new Date().getFullYear();
    return (
        <footer>
            <p>copyright ©{dateYear}</p>
        </footer>
    );
}

export default Footer;