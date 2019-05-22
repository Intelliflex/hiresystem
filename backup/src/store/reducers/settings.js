//Hire Tickets - Handles all actions associated with The Hire Ticket
const settings = (setting = [{ hireno: null }], action) => {
  switch (action.type) {
    case "SET_ACTIVE_TICKET":
      return [action.payload]
    default:
      return setting
  }
}
export default settings
