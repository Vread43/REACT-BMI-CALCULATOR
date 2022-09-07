/* eslint-disable */
import React, {useState} from 'react'

function App() {
  
//state
const [weight, setWeight] = useState(0)
const [height, setHeight] = useState(0)
const [bmi, setBmi] = useState('')
const [message, setMessage] = useState('')

    let calcBMI = (event)=>
    {
      event.preventDefault()

      if(weight === 0 || height === 0)
      {
        alert('Please enter a valid weight and height')
      }
      else
      {
        let bmi = (weight/(height * height)*703)
        setBmi(bmi.toFixed(1))
      }
    }
    
    let reload = ()=>
    {
      window.location.reload()
    }

  return (
    <div className="app">
    <div className='title'>
       <h1 className='center'>REACT BASED BMI CALCULATOR</h1>
    </div>
      <div className='container'>
          <h2 className='center'>Calculate your Body mass index now!</h2>
          <form onSubmit={calcBMI}>
          <div>
              <label>Weight (lbs)</label>
              <input value={weight} onChange={(event) => setWeight(event.target.value)} className='textBox'/>
            </div>
            <div>
              <label>Height (cm)</label>
              <input value={height}onChange={(event) => setHeight(event.target.value)} className='textBox'/>
            </div>
            <div>
              <button className='btn' type= 'submit'>Submit</button>
              <button className='btn btn-outline' onClick={reload} type= 'submit'>Clear</button>
            </div>
          </form>

          <div className='center'>
            <h3>Your current BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>


      </div>
      <footer>
  <div class="main">
    <div class="col1">
      <h1 class="heading">
        Created with ♥️ by Vread43
      </h1>
       
    </div>
  </div>

</footer>

  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
    
  );
  
}

export default App;
