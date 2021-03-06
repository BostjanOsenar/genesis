import React, { PropTypes } from 'react';

import renderButtons from './renderButtons';

import './greeting.css';

const Greeting = ({ name }) => {
  return (
    <div className="greeting">
      <span className="greetingText">Hello, {name}!</span>
      <br />
      <span>Here are some buttons</span>
      <br />
      {renderButtons()}
      <br />
      <span>And some icons</span>
      <br />
      <i className="fa fa-linkedin" />
      <i className="fa fa-github" />
      <i className="fa fa-twitter" />

    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string
};

export default Greeting;
