import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { addHireTicket } from '../store/actions'

let idx = 1004 // We are fudging this to concentrate on React-Redux

const AddTicket = props => {
  //BRING IN DISPATCH OPTION FROM REDUX STORE
  const dispatch = useDispatch()

  //INITIALISE STATE HOOK
  const [name, setName] = useState('')

  //HANDLE FORM SUBMIT
  const onSubmit = e => {
    e.preventDefault()
    if (name === '') {
      return
    }
    dispatch(addHireTicket(idx, name, moment().format('YYYY-MM-DD'), 0))
    //Clear State so it clears input fields after update
    setName('')
    idx++
  }

  const onChange = e => setName(e.target.value)
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name of Hirer'
          value={name}
          onChange={onChange}
        />
        &nbsp;
        <input type='submit' value='ADD TICKET' />
      </form>
      <p />
    </div>
  )
}

export default AddTicket
