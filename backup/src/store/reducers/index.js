//IMPORT COMBINE FUNCTION FROM REDUX
import { combineReducers } from "redux"

//IMPORT ALL THE REDUCERS FOR THIS STORE
import tickets from "./ticket"
import items from "./item"
import settings from "./settings"
import defineItem from "./defineItem"

//EXPORT ALL REDUCERS AS A SINGLE INSTANCE SO IT CAN BE PASSED TO STORE OBJECT
//NOTE THE NAME IS THE SAME AS REDUCER NAME UNLESS WE PAIR VALUE A DIFFERENT NAME
export default combineReducers({
  items,
  tickets,
  settings,
  pendingItem: defineItem
})
