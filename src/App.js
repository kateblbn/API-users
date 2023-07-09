// import Api from "./api/Api";
import { UseStateComp } from "./UseStateComp/UseStateComp";
import Array from "./array/Array";
import Header from "./header/Header";
import InputValue from "./inputValue/InputValue";
import { Plan } from "./main/Plan";
import ApiUsers from "./apiUsers/ApiUsers";

function App() {
  const jack = "Jack"
  return (
    <div > 
      <Header />
     <p> Welcome {jack}</p>
     <Plan/>
     <hr></hr>
     <UseStateComp/>
     <hr></hr>
     <InputValue/>
     <hr></hr>
     <Array/>
     <hr/>
     {/* <Api/> */}
     <hr/>
     <ApiUsers/>
    </div>
  );
}

export default App;
