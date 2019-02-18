import React from 'react';

const Card = ({id,source,title,description}) => {
	return (
		<div className='bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='opportunity' src={source} width='400' height='200'/>
			<div>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default Card;