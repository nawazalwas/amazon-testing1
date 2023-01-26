import React, { useEffect } from 'react'
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { AmazonUseContext } from './StateProvider';
import { auth } from './firebase.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { onAuthStateChanged } from 'firebase/auth';
import Payment from './Payment';
import Orders from './Orders';
import ProductDetail from './ProductDetail';
import Footer from './Footer/Footer';

const promise = loadStripe('pk_test_51MRlRVSJI7NO355FLOOxmh9SVOL3Tgt9mhvMhqzcSuQh4v72AeSQ2TRhU1TwlFh014W96LVYFPj42WTqOQQdD6pq00yxUANTje');
const App = () => {
  const [{ user }, dispatch] = AmazonUseContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userIn) => {
      if (userIn) {
        dispatch({
          type: 'SET_USER',
          user: userIn
        });

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });

      }

    });



    return () => {
      unsubscribe();
    }


  }, []);

  useEffect(() => {
    const state = localStorage.getItem("state");
    state && dispatch({ type: 'LOCAL_STORAGE', state: { ...JSON.parse(state), user: user } });
    console.log(state);
  }, [])


  console.log(user);



  return (
    < Router >
      <div className="app">


        <Routes>
          <Route exact path='/' element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route exact path='/login' element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          } />
          <Route exact path='/checkout' element={
            <>
              <Header />
              <Checkout />
              <Footer />
            </>
          } />
          <Route exact path='/payment' element={
            <>
              <Header />
              <Elements stripe={promise} >
                <Payment />
              </Elements>
              <Footer />
            </>
          } />
          <Route exact path='/orders' element={
            <>
              <Header />
              <Orders />
              <Footer />
            </>
          } />
          <Route exact path='/product' element={
            <>
              <Header />
              <ProductDetail />
              <Footer />
            </>
          } />
          <Route exact path='/product/:id' element={
            <>
              <Header />
              <ProductDetail />
              <Footer />
            </>
          } />


        </Routes>


      </div>

    </Router >
  )
}


export default App;
