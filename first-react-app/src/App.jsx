import React, { useCallback, useMemo, useRef, useState } from 'react'
import Hello from './components/Hello';
import './App.css'
import StudentData from './components/FormComponent';
import Child from './components/Child';
import Child2 from './components/Child2';
import GrandParent from './components/GrandParent';

function App() {
  // const [name, setName] = useState('Tom');
  // const [count, setCount] = useState(0);
  // const [image, setImage] = useState(null);
  // const imageRef = useRef();

  // let count = 0;

  // const handleClick = useCallback(() => {
  //   console.log('Clicked!!')
  // }, [])

  // function expensiveCalculation(num) {
  //   console.log('Calculating....')
  //   let result = 0
  //   for (let i=0; i<10000000; i++) {
  //     result += num;
  //   }
  //   return result;
  // }

  // const result = useMemo(() => expensiveCalculation(5), []);
  // const result = useMemo(() => expensiveCalculation(5), [count]);



  // function inscreaseCount() {
  //   setCount(count+1);
  //   // count += 1;
  //   // console.log('count: ',count);
  // }

  // function handleChange(e) {
  //   let file = e.target.files[0];

  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setImage(imageUrl);
  //   }
  // }

  // function removeImage() {
  //   setImage(null);

    // console.log('Image Input Value:',imageRef.current.value);
    // imageRef.current.value = '';
    // console.log('Image Input Value:',imageRef.current.value);
  // }


  return (
    <>   
    <p>This is app.jsx</p>
    <GrandParent name={name} /> 
    {/* <input type="file" accept='image/jpeg, image/png' ref={imageRef}
      onChange={handleChange}
    />   */}

    {/* <button onClick={removeImage}>Remove Image</button> */}

    {/* {image && (
      <div><img src={image} alt="Preview Image" style={{width: '200px'}} /></div>
    )}       */}


        {/* <p>Hello World</p>   */}

        {/* <Child name='John' /> */}
        {/* <Child name={count} /> */}


        {/* <h2>Counter</h2> */}
        {/* <button onClick={() => setCount(count-1)}>-</button> */}

        {/* <p>Count: {count}</p> */}
        {/* <Counter /> */}

        {/* <button onClick={() => setCount(count+1)}>+</button> */}
        {/* <button onClick={inscreaseCount}>Inscrease</button> */}

        {/* <Child2 handleClick={handleClick} /> */}


        {/* <p>Result: {result}</p> */}
        
{/* 
        <Hello></Hello>
        <Hello></Hello>
        <Hello /> */}
        {/* <StudentData /> */}
    </>
  )
}

export default App


// class Counter extends React.Component {

//   state = {
//     count: 0
//   }

//   increase = () => {
//     this.setState({count: this.state.count+1})
//   }

//   render() {
//     return (
//       <div>
//         <div>Count: {this.state.count}</div>
//         <button onClick={this.increase}>Inscrease</button>
//       </div>
//     )
//   }
// }

