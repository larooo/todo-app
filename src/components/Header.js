import React from 'react';

export const Header = props => {
  return (
    <header className="header">
      <h1>what to do?</h1>
      <span className="tagline">{props.tagline}</span>
    </header>
  );
};
