// Header.js

import React from 'react';
import '../styles/Header.css'
import PropTypes from 'prop-types'

const Header = ({imagePath,text}) => {
  return (
    <header className="Container">
     <div className="RoundImageContainer">
      <img className="RoundImage" src={imagePath} alt="Round Avatar of me" />
      </div>
      <h1 className="Text">{text}</h1>
    </header>
  );
};

Header.propTypes = {
  imagePath: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Header;
