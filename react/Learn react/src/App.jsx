import StarRating from "./components/Star Rating";
import Accordian from "./components/accordian";
import RandomColor from "./components/randomColor";
import ImageSlider from "./components/Image Slider";
import LoadMoreButton from "./components/Load More Button";
import TreeView from "./components/Tree View";
function App() {
  return (
    <>
      <h1>1: Accordian</h1>
      <Accordian />
      <h1>2: Random Color</h1>
      <RandomColor />
      <h1>3: Star Rating</h1>
      <StarRating />
      <h1>4: Image Slider</h1>
      <ImageSlider />
      <h1>5: Load More Button</h1>
      <LoadMoreButton />
      <h1>6: TreeView</h1>
      <TreeView />
    </>
  );
}

export default App;
