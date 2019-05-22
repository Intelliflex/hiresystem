//Hire Items - Handles all actions assocated with the Hire Items
const defineItem = (items = { desc: "", amount: 0 }, action) => {
  switch (action.type) {
    case "DEFINE_ITEM":
      return action.payload
    default:
      return items
  }
}

export default defineItem
