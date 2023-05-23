import React from 'react';
import "./FeaturedProducts.scss";
import Card from '../Card/Card';


const FeaturedProducts = ({type}) => {
	const data = [
		{
			id: 1,
			img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&tinysrgb&w=1600",
			title: "Long Sleeve Graphic T-Shirt",
			isNew: true,
			oldPrice: 199,
			price: 122
		},
		{
			id: 2,
			img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&tinysrgb&w=1600",
			title: "Coat",
			isNew: true,
			oldPrice: 19,
			price: 12
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&tinysrgb&w=1600",
			title: "Skirt",
			oldPrice: 19,                      
			price: 12
		},
		{
			id: 4,
			img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&tinysrgb&w=1600",
			title: "Long Sleeve Graphic T-Shirt",
			oldPrice: 19,
			price: 12
		},
	];  

	return (
		<div className='featuredProducts'>
			<div className="top">
				<h1>{type} Products</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
					suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
					lacus vel facilisis labore et dolore magna aliqua.
				</p>
			</div>
			<div className="bottom">
				{data.map((item) => (
					<Card item={item} key={data.id}/>
				))}

			</div>
		</div>
	)
}

export default FeaturedProducts;