import React from 'react'
import "./PageNotFound.css";
import msg404 from "./assets/pagenotfound.gif";

function PageNotFound() {
  return (
    <div className='' id='page-not-found'>
        <div className='' id='page-gif'>
            <img src={msg404}></img>
        </div>
    
    </div>
  )
}

export default PageNotFound