import React from 'react';
import PurpleAppBar from './PurpleAppBar.js';      // AppBar with simple overrides
// import SuccessButton from './SuccessButton.js';    // A button with complex overrides
// import { Button } from 'react-toolbox/lib/button'; // Bundled component import

// const children = () => (<Button label='Primary Button' primary />);

const App = () => (
  <div>
    <PurpleAppBar children/>
    <section style={{ padding: 20 }}>
      {/* Aucune idée de comment faire ici*/}
      {/*  J'ai testé avec require('%URL%') et avec import src from '%URL%' en direct etc)*/}

      {/* <img src= {url('./couverture_2.png')} /> */}

    </section>
  </div>
);

export default App;
