// Code Keypad Component Here

// function Keypad (){
//     return (
//         <div></div>
//     )
// }

// export default Keypad;

import React from 'react';

class Keypad extends React.Component {
  handleChange = () => {
    console.log('Entering password...');
  };

  render() {
    return (
      <div>
        <input type="password" onChange={this.handleChange} />
      </div>
    );
  }
}

export default Keypad;
