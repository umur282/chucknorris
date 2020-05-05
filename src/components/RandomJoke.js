import React from 'react';

const RandomJoke = ({ randomJoke }) => {
	
	return (
		<div>
			<img src={randomJoke.iconUrl} alt=""/>
			<div>
				<p>{randomJoke.value}</p>
			</div>
		</div>
	);
}

export default RandomJoke;