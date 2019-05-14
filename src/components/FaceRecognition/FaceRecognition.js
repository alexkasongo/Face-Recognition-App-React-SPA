import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({imageURL, box}) => {
  return (
  // Div to display image
  <div className='center ma'>
    <div className='absolute mt3'>
      <img className='shadow-3' id='inputImage' alt='' src={imageURL} width='500px' height='auto'/>
      <div className='bounding-box' style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol
        }}></div>
    </div>
  </div>);
}

export default FaceRecognition;
