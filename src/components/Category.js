import React from 'react';

const Category = ({ categories, selectedCategory, categoryJoke }) => {

	return (
		<div style={{marginTop: '3rem'}}>
			<h1 className="f3">Category Joke</h1>
			<div className='ph3 mb4'
					 style={{marginBottom: '0.5rem'}}>
				{
					categories.map((category, i) => {
						return (
							<button 
							  type="button"
							  className="f6 br3 ph3 pv2 mb2 dib white bg-dark-blue"
							  style={{margin: '0.25rem'}}
							  key={i}
							  value={category}
							  onClick={selectedCategory}>
							    {category}
							</button>
						);
					})
				}
			</div>
			<div>
				<img src={categoryJoke.iconUrl} alt=""/>
				<div>
					<p>{categoryJoke.value}</p>
				</div>
			</div>
		</div>
	);
}

export default Category;