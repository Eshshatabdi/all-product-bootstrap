import React, { useState } from 'react';

import './Header.css';

const Header = (props) => {



    return (


        <div className='bg-info'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-2 p-2 ">Logo</div>


                    <div className="col-lg-10 menu-container d-flex justify-content-end">
                        <li className='items me-4 p-2'>Home</li>
                        <li className='items me-4 p-2'>Contact</li>
                        <li className='items me-4 p-2'>Cart<sup>{props.carts}</sup> </li>
                        <li className='items me-4 p-2'>Login</li>

                    </div>
                </div>

            </div>


        </div >

    );
};

export default Header;