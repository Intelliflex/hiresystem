import React from "react"
import HireList from "./components/HireList"
import AddTicket from "./components/AddTicket"
import ItemList from "./components/ItemList"
import ItemDef from "./components/ItemDef"

//THE ESSENTIAL REDUX PROVIDER
import { Provider } from "react-redux"

//DEFINE THE STORE
import store from "./store/index.js"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hire System - React-Redux Demo</h1>
        <HireList />
        <ItemList />
        <AddTicket />
        <ItemDef />
      </div>
    </Provider>
  )
}

export default App
