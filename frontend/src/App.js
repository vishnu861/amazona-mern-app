import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegistersScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import Signin from './screens/Signin';


function App() {
  const cart = useSelector(state => state.cart);
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo} = userSignin;
  const {cartItems} = cart;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
      <div>
        <Link className="brand" to="/">amazon</Link>
      </div>
      <div>
        <Link to="/cart">Cart
        {
          cartItems.length>0 && (<span className='badge'>{cartItems.length}</span>)
        }
        </Link>
        {
          userInfo ? (
            <div className='dropdown'>
            <Link to="#">{userInfo.name} <i className='fa fa-caret-down'></i></Link>
            <ul className='dropdown-content'>
              <Link to='#singout' onClick={signoutHandler}>Sign Out</Link>
            </ul>
            </div>
          ):  <Link to="/signin">Sign In</Link>
        }
       
      </div>
    </header>   
    <main>
      <Route path='/register' component={RegisterScreen}></Route>
      <Route path='/signin' component={Signin}></Route>
      <Route path="/cart/:id?" component={CartScreen}></Route>
      <Route path='/product/:id' component={ProductScreen}></Route>
      <Route path='/shipping' component={ShippingAddressScreen}></Route>
      <Route path='/payment' component={PaymentMethodScreen}></Route>
      <Route path='/placeorder' component={PlaceOrderScreen}></Route>
      <Route path='/order/:id' component = {OrderScreen}></Route>
      <Route path='/' component={HomeScreen} exact></Route>
    </main>
    <footer className="row center">All right reserved</footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
