import { useState } from 'react'
import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      <StarRating noOfStars={10} />
    </>
  );
}

export default App
