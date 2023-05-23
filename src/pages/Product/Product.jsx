import React, { useState } from 'react';
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";


const Product = () => {

	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const images = [
		"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&tinysrgb&w=1600",
		"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&tinysrgb&w=1600"
	];


	return (
		<div className="product">
			<div className="left">
				<div className="images">
					<img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />			
					<img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
				</div>
				<div className="mainImg">
					<img src={images[selectedImg]} alt="" srcset="" />
				</div>
			</div>
			<div className="right"> 
				<h1>LIFT YOUR MIND DESIGNED FOR TRAINING GRAPHIC TEE</h1>
				<span className='price'>$ 250</span>
				<p>Feel ready to reset and mindfully move in the Lift Your Mind collection. Designed for comfort and strength inside and out, the capsule line delivers thoughtful fit and fabric choices in stylish colors. From outdoor gyms to studio circuits, feel comfortable finding your rhythm in the Lift Your Mind Designed for Training Graphic Tee. Hyper-soft single jersey is cut for a close fit — meaning no-fuss action, while the positive message on the back reminds you it's okay to move at your own pace as you get in the zone.</p>
				<div className="quantity">
					<button onClick={()=> setQuantity((prev) => prev == 1 ? 1 : prev - 1)}>-</button>
					{quantity}
					<button onClick={()=> setQuantity((prev) => prev + 1)}>+</button>
				</div>
				<button className='add'	>
					<AddShoppingCartIcon/> ADD TO CART
				</button>
				<div className="links">
					<div className="item">
						<FavoriteBorderIcon /> ADD TO WISH LIST
					</div>
					<div className="item">
						<BalanceIcon /> ADD TO COMPARE
					</div>
				</div>
				<hr />
				<div className="info">
					<span>Vendor: Polo</span>
					<span>Product Type: T-Shirt</span>
					<span>Tag: T-Shirt, Women, Top</span>
				</div>
			</div>
		</div>
	)
}

export default Product;