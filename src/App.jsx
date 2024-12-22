import Card from "./components/Card"
import './App.css'
import Data from "./utils/Data"

function App() {

  return (
    <>
    <div className="parent">
    </div>
        <div className="container">
          {
            Data.map((ele , idx)=>{
              return <Card key={idx} {...ele} />
              
            })
          }
        </div>
    </>
  )
}

export default App
