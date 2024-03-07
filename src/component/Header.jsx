import React from 'react';
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.container}>
           <h1>Contact App</h1> 
           <p>
              <a href='Vafront.ir'>VaFront.ir</a> | React.js
           </p>
        </div>
    );
};

export default Header;