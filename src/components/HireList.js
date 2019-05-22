//*************************************************************
//***** HIRELIST COMPONENT - Display Table of Hire Records ****
//*************************************************************
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setActiveTicket,
  deleteHire,
  addHireItem,
  clearItem
} from '../store/actions'
import './HireList.css'

const HireList = props => {
  //BRING IN DISPATCH FROM REDUX STORE
  const dispatch = useDispatch()

  //GET DATA FROM STORE - SIMILAR TO MAPSTATETOPROPS INSIDE CONNECT (FOR CLASS BASED COMPONENTS)
  //const tickets = useSelector(state => state.tickets)
  //const newItem = useSelector(state => state.pendingItem)
  const { tickets, newItem } = useSelector(state => ({
    tickets: state.tickets,
    newItem: state.pendingItem
  }))

  const onClickDeleteHire = (e, hireno) => {
    dispatch(deleteHire({ hireno: hireno }))
  }

  const onClickShowHire = (e, hireno) => {
    dispatch(setActiveTicket({ hireno }))
  }

  const onClickAddItems = (e, hireno) => {
    //If new Item description and amount values are defined - then dispatch add
    if (newItem.desc !== '') {
      //console.log(newItem)
      dispatch(addHireItem(hireno, newItem.desc, newItem.amount))
      dispatch(setActiveTicket({ hireno }))
      dispatch(clearItem()) //THIS PART IS NOT WORKING
    }
  }

  return (
    <div>
      <table>
        <tbody>
          {tickets.map(ticket => (
            <tr key={`TR${ticket.hireno}`}>
              <td>{ticket.hireno}</td>
              <td>{ticket.name}</td>
              <td>{ticket.date}</td>
              <td className='td-right' key={`D${ticket.hireno}`}>
                {ticket.total}
              </td>
              <td>
                <button
                  onClick={() => {
                    onClickShowHire(this, ticket.hireno)
                  }}
                >
                  SHOW ITEMS
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    onClickAddItems(this, ticket.hireno)
                  }}
                >
                  ADD ITEM
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    onClickDeleteHire(this, ticket.hireno)
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  )
}

export default HireList
