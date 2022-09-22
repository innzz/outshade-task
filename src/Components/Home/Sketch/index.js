import React from 'react';
import './index.css';
import SketchMap from '../../../assets/images/sketch.png';

const Sketch = () => {
  return (
    <div className='sketch-container'>
        <div className="sketch-headings">
            <h1>SKETCH(80 ACRES)</h1>
        </div>
        <div className="sketch-content">
            <div className="sketch-image-container">
                <img src={SketchMap} alt="sketch map" />
            </div>
        </div>
    </div>
  )
}

export default Sketch