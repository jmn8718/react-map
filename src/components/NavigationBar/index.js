import React from 'react';

import '@material/toolbar/dist/mdc.toolbar.css';
import '@material/elevation/dist/mdc.elevation.css';

const NavigationBar = ({ title }) => (
  <header className="mdc-toolbar mdc-toolbar--fixed mdc-elevation--z1">
    <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
      <span className="mdc-toolbar__title">{title}</span>
    </section>
  </header>
);

export default NavigationBar;
