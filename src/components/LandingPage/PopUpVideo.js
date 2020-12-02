import React, { Component } from "react";
import './PopUpVideo.css';
import ReactPlayer from "react-player"

export default class PopUpVideo extends Component {
  handleClick = () => {
   this.props.toggle();
  };
render() {
  return (
   <div className="modal">
     <div className="modal_content">
     <span className="close" onClick={this.handleClick}>&times;    </span>
     <ReactPlayer
             url="https://www.youtube.com/watch?v=ug50zmP9I7s"
           />
    </div>
   </div>
  );
 }
}