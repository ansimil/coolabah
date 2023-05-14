import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import QuoteComp from '../../components/QuoteComp/QuoteComp';
import './Quote.css'

const Quote = () => {
  return (
    <div className='quote-container'>
        <Navbar />
        <QuoteComp />
    </div>
  )
}

export default Quote