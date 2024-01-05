import { useState } from 'react'
import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}
      <LoadMoreData />
    </>
  );
}

export default App
