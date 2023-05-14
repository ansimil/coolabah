import { useForm } from "react-hook-form"
import './QuoteForm.css'
import { useNavigate } from "react-router-dom"

const QuoteForm = () => {
    const navigate = useNavigate()
    const { register } = useForm()
  return (
    <div className='quote-form-container'>
        <div className="get-quote__header">
            <h3>Thank you for selecting our<br /><span style={{"color": "#4285f4", fontSize: "2rem"}}>BASIC</span><br />coverage <br /><br /> In order for us to give you the best <span style={{"color": "#4285f4"}}>value</span> possible, simply answer a couple of questions</h3>
        </div>
        <div className="form-container">
            <form 
            className="quote-form"
            action="submit"
            >
                <input 
                placeholder="   Car Model"
                type="text" 
                {...register('carModel')}
                />
                <input
                placeholder="   Miles Travelled" 
                type="text" 
                {...register("mileage")}
                />
                <input 
                type="date" 
                {...register('dateOfBirth')}
                />

                <button 
                onClick={() => {
                    navigate('/quote')
                }}
                className="get-quote-btn btn white">
                    Get Quote
                </button>
            </form>
        </div>
        
    </div>
  )
}

export default QuoteForm