import ImageSlider from './components/image-slider'

function App() {

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
      {/* <LoadMoreData /> */}
    </>
  );
}

export default App
