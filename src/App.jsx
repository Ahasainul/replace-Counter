import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../src/slices/counterSlice'
function App() {
  const count = useSelector((state) => state.asif.value)
  const dispatch = useDispatch()
  let text = 'I Hate Bangladesh'
  let aso = text.replace('Hate','love')
 
  return (
    
    <>
    <button  onClick={() => dispatch(increment())}>+</button>
    <h1>{count}</h1>
    <button  onClick={() => dispatch(decrement())}>-</button>
    <br />
    <h1 className='font-bold'>{aso}</h1>

    



    </>
  )
}

export default App
