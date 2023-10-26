import Basic from "./10_Basic";
import Timeline from "./20_Timeline";
import Stagger from "./30_Stagger";
import DrawSVGPlugin1 from "./40_DrawSVGPlugin/40_DrawSVGPlugin1";
import Offset from "./50_Offset/50_Offset";
import Morphing from "./60_Morphing/Morphing"
import Blink from "./70_Blink/Blink";
import Pattern from "./80_Pattern/Pattern";



function App() {
  return (
    <div className="App " >
      <Basic />
      <Timeline />
      <Stagger />
      <DrawSVGPlugin1 />
      <Offset />
      <Morphing />
      <Blink />
      <Pattern />
    </div>
  );
}

export default App;
