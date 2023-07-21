import React from "react";
import "./File.css";

// PropTypes
import PropTypes from 'prop-types'






function File(props) {
  return (
    <div>
      {/* props call */}
      {/* <h1>{props.h}</h1> */}
      <h1>{props.obj.no}</h1>

{/* <div {text.split(" ").filter((element)=>{return element.length!==0}></div> */}


      <div className="box">
        <div style={{color: props.h==='red'?'white':'black'}}>aaaaa</div>

        <div></div>
      </div>
      
    </div>
  );
}

export default File;



// propType setting
File.propTypes = {
  h: PropTypes.string.isRequired, 
};
File.defaultProps = {
  h: 'Set title here'
};