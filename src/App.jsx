import Head from "./components/Head"
import Body from "./components/Body"
import store from "./utills/store";
function App() {
  return (
    <provider store={store}>
    <div>
      <Head />
      <Body />
     

    </div>
    </provider>

   
  );
    
    
  
  

}

export default App
