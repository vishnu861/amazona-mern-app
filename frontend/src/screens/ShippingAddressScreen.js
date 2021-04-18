import React, { useState } from 'react'
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'
import {useDispatch, useSelector} from 'react-redux';

export default function ShippingAddressScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    if(!userInfo){
        props.history.push('/signin');
    }
    const [fullName,setFullName] = useState(shippingAddress.fullName);
    const [address,setAddress] = useState(shippingAddress.address);
    const [city,setCity] = useState(shippingAddress.city);
    const [postalCode,setPostalCode] = useState(shippingAddress.postalCode);
    const [country,setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch an action
        dispatch(saveShippingAddress({fullName,address,city,postalCode,country}));
        props.history.push('/payment');
    }
    return (
        <div>
            <CheckoutSteps step1='step1' step2='step2'></CheckoutSteps>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor='fullName'>Full Name</label>
                    <input id='fullName' placeholder='Enter Full Name' type='text' value={fullName} onChange={e => setFullName(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='address'>Address</label>
                    <input id='address' placeholder='Enter your Address' type='text' value={address} onChange={e => setAddress(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='city'>City</label>
                    <input id='city' placeholder='Enter your city' type='text' value={city} onChange={e => setCity(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='postalCode'>postal Code</label>
                    <input id='postalCode' placeholder='Enter postalCode' type='text' value={postalCode} onChange={e => setPostalCode(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor='country'>Country</label>
                    <input id='country' placeholder='Enter country' type='text' value={country} onChange={e => setCountry(e.target.value)} required></input>
                </div>
                <div>
                    <label/>
                    <button className='primary' type='submit'>Continue</button>
                </div>
            </form>
        </div>
    )
}
