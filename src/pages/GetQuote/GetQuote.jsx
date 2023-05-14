import Navbar from "../../components/Navbar/Navbar"
import QuoteForm from "../../components/QuoteForm/QuoteForm"
import './GetQuote.css'

const GetQuote = () => {
  return (
    <div className='get-quote-container'>
        <Navbar />
        <QuoteForm />
    </div>
  )
}

export default GetQuote