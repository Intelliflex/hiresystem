//*********************************************************
//**** CREATE STORE & INITIALISE WITH STARTING VALUES *****
//*********************************************************
import { createStore } from 'redux'
import storeReducers from './reducer'
import { addHireTicket, addHireItem } from './actions'

//**** CREATE THE STORE AND PASS IN THE REDUCERS *****

const store = createStore(
  storeReducers,
  //The following code is required so the Chrome Redux Extention will work
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//**** LOAD STARTING VALUES INTO THE STORE ******
store.dispatch(addHireTicket(1000, 'Fred Smith', '2019-04-20'))
store.dispatch(addHireTicket(1001, 'Anne Frank', '2019-04-20'))
store.dispatch(addHireTicket(1002, 'Freda Friend', '2019-04-21'))
store.dispatch(addHireTicket(1003, 'Jerry Jones', '2019-04-21'))
store.dispatch(addHireItem(1003, 'Mini Loader', 250))
store.dispatch(addHireItem(1003, 'Hole Driller', 95))
store.dispatch(addHireItem(1000, 'Sledge Hammer', 10))
store.dispatch(addHireItem(1001, 'Angle Grinder', 15))
store.dispatch(addHireItem(1000, 'Power Saw', 25))
store.dispatch(addHireItem(1002, 'Power Saw', 25))
store.dispatch(addHireItem(1003, 'Jack Hammer', 45))

//store.dispatch(defineItem({ desc: 'FROM CREATE', amount: 999 }))

export default store
