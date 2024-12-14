import {React ,useState} from 'react'

const Calc = () => {
  const [result,setResult]=useState(0);
  const add=()=>{
    const number1=parseFloat(document.getElementById('num1').value);
    const number2=parseFloat(document.getElementById('num2').value);
    const sum=number1+number2;
    setResult(sum)
  }
  const sub=()=>{
    const number1=parseFloat(document.getElementById('num1').value);
    const number2=parseFloat(document.getElementById('num2').value);
    const sum=number1-number2;
    setResult(sum)
  }
  const mul=()=>{
    const number1=parseFloat(document.getElementById('num1').value);
    const number2=parseFloat(document.getElementById('num2').value);
    const sum=number1*number2;
    setResult(sum)
  }
  return (
    <div className='MainDiv'>
        <h1 style={{}}>Calculator</h1>
        Enter Value1 : <input type='number' id="num1"/> <br></br><br></br>
        Enter Value1 : <input type='number' id="num2"/> <br></br><br></br>
        <button onClick={add}>+</button>
        <button  onClick={sub}>-</button>
        <button  onClick={mul}>*</button>
        <p>Result is:{result}</p>
    </div>
  )
}

export default Calc