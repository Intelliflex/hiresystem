//*******************
//**** REDUCERS *****
//*******************
//IMPORT COMBINE FUNCTION FROM REDUX
import { combineReducers } from 'redux'

const tickets = (ticket = [], action) => {
  switch (action.type) {
    case 'CREATE_HIRE':
      return [...ticket, action.payload]
    case 'DELETE_HIRE':
      //Return a new array with Delete Hireno Removed
      return ticket.filter(ticket => ticket.hireno !== action.payload.hireno)
    case 'ADD_ITEM':
      //Add to the Hire Total - we Cannot modify store directly so we need to make a copy
      let newArray = [...ticket]
      newArray.find(
        newArray => newArray.hireno === action.payload.hireno
      ).total += Number(action.payload.amount)
      return newArray
    default:
      return ticket
  }
}

const items = (item = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...item, action.payload]
    case 'DELETE_HIRE':
      //Return Array with deleted hireno removed
      let newArray = [...item]
      return newArray.filter(
        newArray => newArray.hireno !== action.payload.hireno
      )
    case 'GET_ITEM':
      return [...item, action.payload]
    default:
      return item
  }
}

const pendingItem = (items = { desc: '', amount: 0 }, action) => {
  switch (action.type) {
    case 'DEFINE_ITEM':
      return action.payload
    case 'CLEAR_ITEM':
      return { desc: '', amount: 0 }
    default:
      return items
  }
}

const settings = (setting = [{ hireno: null }], action) => {
  switch (action.type) {
    case 'SET_ACTIVE_TICKET':
      return [action.payload]
    default:
      return setting
  }
}
//EXPORT ALL REDUCERS AS A SINGLE INSTANCE SO IT CAN BE PASSED TO STORE OBJECT
export default combineReducers({
  items,
  tickets,
  settings,
  pendingItem
})
