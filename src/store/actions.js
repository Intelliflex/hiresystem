import uuid from 'uuid'

//********************
//**** ACTIONS *******
//********************

//ACTION CREATOR HELPER FUNCTION
const action = (type, payload) => {
  return { type, payload }
}

//ACTIONS
const CREATE_HIRE = 'CREATE_HIRE'
const DELETE_HIRE = 'DELETE_HIRE'
const ADD_ITEM = 'ADD_ITEM'
const CLEAR_ITEM = 'CLEAR_ITEM'
const SET_ACTIVE_TICKET = 'SET_ACTIVE_TICKET'
const DEFINE_ITEM = 'DEFINE_ITEM'
const GET_ITEM = 'GET_ITEM'

//ACTION CREATORS
export const deleteHire = hireno => action(DELETE_HIRE, hireno)
export const addHireTicket = (hireno, name, date, total = 0) =>
  action(CREATE_HIRE, {
    key: uuid(),
    hireno,
    name,
    date,
    total
  })
export const addHireItem = (hireno, desc, amount) =>
  action(ADD_ITEM, {
    key: uuid(),
    hireno,
    desc,
    amount
  })

export const setActiveTicket = hireno => action(SET_ACTIVE_TICKET, hireno)
export const defineItem = item => action(DEFINE_ITEM, item)
export const clearItem = () => action(CLEAR_ITEM)
export const getItem = () => action(GET_ITEM)
