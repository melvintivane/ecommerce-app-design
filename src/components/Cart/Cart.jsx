import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"; 

const Cart = () => {

    const data = [
        {
			id: 1,
			img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&tinysrgb&w=1600",
			img2: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&tinysrgb&w=1600",
			title: "Long Sleeve Graphic T-Shirt",
			isNew: true,
			oldPrice: 19,
			price: 12,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem ut hic?"
		},
        {
			id: 2,
			img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&tinysrgb&w=1600",
			title: "Coat",
			isNew: true,
			oldPrice: 19,
			price: 12,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem ut hic?"
		},
		{
			id: 3,
			img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&tinysrgb&w=1600",
			title: "Skirt",
			oldPrice: 19,                      
			price: 12,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem ut hic?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem ut hic?"
		},
		// {
		// 	id: 4,
		// 	img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&tinysrgb&w=1600",
		// 	title: "Skirt",
		// 	oldPrice: 19,                      
		// 	price: 12,
        //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem ut hic?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quidem ut hic?"
		// },
    ]


    return ( 
        <div className="parent">
            <h1>Products in your cart</h1>
            <div className="cart">              
                    {data?.map(item=>(
                        <div className="item" key={item.id}>
                            <img src={item.img} alt="" />
                            <div className="details">
                                <h1>{item.title}</h1>
                                <p>{item.desc.substring(0, 100)}</p>
                                <div className="price">1 x ${item.price}</div>
                            </div>
                            <DeleteOutlinedIcon className="delete"/>
                        </div>
                    ))}   
            </div>
            <div className="total">
                <span>SUBTOTAL</span>
                <span className='price'>$ 2345</span>
                <button>PROCEED TO CHECKOUT</button>
                <span className="reset">
                    Reset cart
                </span>
            </div>  
        </div>       
    )
}

export default Cart