//Hire Items - Handles all actions assocated with the Hire Items
const hireitems = (items = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...items, action.payload]
    case "DELETE_HIRE":
      //Return Array with deleted hireno removed
      let newArray = [...items]
      return newArray.filter(
        newArray => newArray.hireno !== action.payload.hireno
      )
    default:
      return items
  }
}

export default hireitems

const addItem = (item = [], action) => {}
