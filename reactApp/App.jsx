import React from 'react';

class App extends React.Component {
   render() {
   var objStyle={
   color:'red',
   fontSize:60
   }
      return (
         <div style={objStyle}>
            Hello World!!!
         </div>
      );
   }
}

export default App;