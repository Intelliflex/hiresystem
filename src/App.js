//******************************************
//****** APP.JS - Main App Entry Point *****
//******************************************
import React from 'react'
import HireList from './components/HireList'
import AddTicket from './components/AddTicket'
import ItemList from './components/ItemList'
// Comment Out line below for Class Based Solution
import ItemDef from './components/ItemDef'
// Remove Comment on line below for CLass Based Solution
// import ItemDefClass from './components/ItemDefClass'

//THE ESSENTIAL REDUX PROVIDER
import { Provider } from 'react-redux'

//DEFINE THE STORE
import store from './store/create'

function App() {
  return (
    <Provider store={store}>
      <div className='App container m-4'>
        <nav class='navbar navbar-dark bg-primary rounded'>
          <h2 className='text-light'>
            Hire Application - React-Redux Learning & Testing Module
          </h2>
        </nav>
        <p />
        <HireList />
        <ItemList />
        <AddTicket />
        {/* Comment Out line below for Class Based Solution */}
        <ItemDef />
        {/* Remove comments on line below to use Class based Solution */}
        {/* <ItemDefClass /> */}
      </div>
    </Provider>
  )
}

export default App
