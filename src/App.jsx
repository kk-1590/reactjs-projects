import ImageSlider from './components/image-slider'
import LightDarkMode from './components/light-dark-mode';
import QRCodeGenerator from './components/qr-code';
import ScrollIndicator from './components/scroll-indicator';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {

  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator /> */}
      {/* <LightDarkMode /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App
