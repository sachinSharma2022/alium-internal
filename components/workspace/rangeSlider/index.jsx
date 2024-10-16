"use client";
import React, { useState } from "react";

const RangeSlider = ({onChange}) => {

    const [slider, setSlider] = useState({
        max: 100, 
        min: 100, 
        value: 5, 
        label: ''
    });

    const onSlide = () => {
        onChange(slider.value);
    } 

    return (
        <div className="range-slider">
            <p>{slider.label}</p>
            <input type="range" min={slider.min} max={slider.max} value={slider.value} 
             onChange={() => onSlide()} className="slider" id="myRange"></input>
        </div>
    );
}
export default RangeSlider;