import Emazon from "./components/emazon";
import Review from "./components/review";
import ScrollIndicator from "./components/scroll-indicator";

function App() {
  return (
    <div className="gap-2">
      <div className="mr-10">
        <ScrollIndicator />
      </div>
      <Review leng={5} />
      <Emazon />      
    </div>
  );
}

export default App;
