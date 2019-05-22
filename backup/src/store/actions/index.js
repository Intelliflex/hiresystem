//**************************************************
//**** ACTIONS - DEFINE ACTIONS & THEIR PAYLOADS ***
//**************************************************
//Each Action must have a type and return a payload being the data required for that action

//CREATE HIRE TICKET
export const addHireTicket = ticket => {
  return {
    type: "CREATE_HIRE",
    payload: ticket
  }
}

//ADD HIRE ITEM - Adds a hire item to an existig hire ticket (Note this is not checked so there could be orphans)
export const addHireItem = (hireno, desc, amount) => {
  return {
    type: "ADD_ITEM",
    payload: {
      hireno,
      desc,
      amount
    }
  }
}

//DELETE HIRE TICKET - Note this this action is passed automatically to the hireticker and hireitems reducers
// as both the tickets and all items belonging to the ticket must be deleted
export const deleteHire = hireno => {
  return {
    type: "DELETE_HIRE",
    payload: hireno
  }
}

//ACTIVE TICKET
export const setActiveTicket = hireno => {
  return {
    type: "SET_ACTIVE_TICKET",
    payload: hireno
  }
}

//DEFINE ITEM
export const defineItem = (desc, amount) => {
  return {
    type: "DEFINE_ITEM",
    payload: {
      desc,
      amount
    }
  }
}
