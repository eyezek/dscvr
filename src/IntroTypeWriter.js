import React from "react";
import TypeWriter from "typewriter-effect";

// class IntroTypeWrite extends React.Component{
//     render(){
//         return (
//             <h2 id="description">
//                 <TypeWriter
//             </h2>
//         )
//     }
// }

<TypeWriter
  onInit={(typewriter) => {
    typewriter
      .typeString("Discover the underground gems you never knew existed.")
      .pauseFor(5000).start;
  }}
/>;
