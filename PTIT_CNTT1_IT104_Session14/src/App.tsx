import Exersice01 from "./component/Exersice01";
import Notification from "./component/Notification";
import Exersice03 from "./component/Exersice03";
import Exersice04 from "./component/Exersice04";
import Exersice05 from "./component/Exersice05";   
import Exersice06 from "./component/Exersice06";    
import Exersice07 from "./component/Exersice07"; 
import Exersice08 from "./component/Exersice08";
function App() {
  return (
    <div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exersice01 />
      </div>
      <Notification />
       <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exersice03 />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exersice04 />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exersice05 />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exersice06 />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exersice07 />
      </div>
      <div style={{ border: "2px solid red", padding: "10px", marginBottom: "10px" }}>
        <Exersice08 />
      </div>
    </div>
  );
}

export default App;
