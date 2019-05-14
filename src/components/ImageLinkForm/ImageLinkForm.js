import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
  // Form for image link
  <div className='instructions'>
    <p className='f5 mid-gray'>
      {'This App will detect faces in your pictures. Paste link below.'}
    </p>
    <div className='center form'>
      <div className='form center pa4 shadow-5'>
        <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange}/>
        <button className='w-30 grow f4 link ph3 pv2 dib white buttoncolor' onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  </div>);
}

export default ImageLinkForm;
