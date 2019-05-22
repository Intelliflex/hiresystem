import { createStore } from "redux"
import storeReducers from "./reducers" //We done neet to specify file as default is index.js
import { addHireTicket, addHireItem, defineItem } from "./actions"

//**** CREATE THE STORE AND PASS IN THE REDUCERS *****

const store = createStore(
  storeReducers,
  //The following code is required so the Chrome Redux Extention will work
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/***********************************************
 **** LOAD STARTING VALUES INTO THE STORE ******
 ***********************************************/

//**** Load Initial Store State */
store.dispatch(
  addHireTicket({
    hireno: 1000,
    name: "Fred Smith",
    date: "2019-04-20",
    total: 0
  })
)
store.dispatch(
  addHireTicket({
    hireno: 1001,
    name: "Anne Frank",
    date: "2019-04-20",
    total: 0
  })
)
store.dispatch(
  addHireTicket({
    hireno: 1002,
    name: "Freda Friend",
    date: "2019-04-21",
    total: 0
  })
)
store.dispatch(
  addHireTicket({
    hireno: 1003,
    name: "Jerry Jones",
    date: "2019-04-21",
    total: 0
  })
)
store.dispatch(addHireItem(1003, "Mini Loader", 250))
store.dispatch(addHireItem(1003, "Hole Driller", 95))
store.dispatch(addHireItem(1000, "Sledge Hammer", 10))
store.dispatch(addHireItem(1001, "Angle Grinder", 15))
store.dispatch(addHireItem(1000, "Power Saw", 25))
store.dispatch(addHireItem(1002, "Power Saw", 25))
store.dispatch(addHireItem(1003, "Jack Hammer", 45))

export default store
