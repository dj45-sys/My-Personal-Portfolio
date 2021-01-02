import React from 'react';
import "./Cover.css";
import coverVideo from "../../media/CoverVideo.mp4";

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted/>
            <h1>Dj45-Sys</h1>
            <p>Web Developer | App Developer</p>
        </div>
    )
}

export default Cover
