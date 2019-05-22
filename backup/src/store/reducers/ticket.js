//Hire Tickets - Handles all actions associated with The Hire Ticket
const hireticket = (ticket = [], action) => {
  switch (action.type) {
    case "CREATE_HIRE":
      return [...ticket, action.payload]
    case "DELETE_HIRE":
      //Return a new array with Delete Hireno Removed
      return ticket.filter(ticket => ticket.hireno !== action.payload.hireno)
    case "ADD_ITEM":
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
export default hireticket
