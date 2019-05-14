import React from 'react';
import Tilt from 'react-tilt';
import applogo from './applogo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0 mb0'>
			<Tilt className="Tilt br2 shadow-3" options={{ max : 45 }} style={{ height: 250, width: 250 }} >
				<div className="Tilt-inner pa3">
					<img style={{paddingTop: '55px'}} alt="App Logo" src={applogo} />
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;