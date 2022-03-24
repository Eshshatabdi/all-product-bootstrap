import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Meal = (props) => {

    const { setCartCounts } = props;


    const [maps, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div>
            <h1>All Meal</h1>
            <div className="row container">
                {
                    maps.map(meal => <Product
                        key={meal.id}
                        meal={meal}
                        setCartCounts={setCartCounts}



                    >




                    </Product>)

                }
            </div>


        </div>
    );
};

export default Meal;