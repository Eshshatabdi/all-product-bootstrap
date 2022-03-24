import React from 'react';
import Reactmodal from '../Reactmodal/Reactmodal';

const Product = ({ meal, setCartCounts }) => {
    console.log(meal)
    const { image, title, price } = meal


    return (
        <div className='col-md-4 gy-5 '>
            <div className="card h-100 p-3 border">
                <img className='w-50 m-auto' src={image} alt="" />
                <h3>Name:{title.slice(0, 10)}</h3>

                <p>price:{price}</p>
                <div className='d-flex justify-content-center'>
                    <button onClick={() => setCartCounts()} className='mx-4'>Add to Cart</button>
                    {/* <button>Details</button> */}
                    <Reactmodal meal={meal}></Reactmodal>
                </div>

            </div>


        </div>
    );
};

export default Product;