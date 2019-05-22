import React, { useState } from "react"
import { useDispatch } from "react-redux"
import moment from "moment"
import { addHireTicket } from "../store/actions"

let idx = 0

const AddTicket = props => {
  //BRING IN DISPATCH OPTION FROM REDUX STORE
  const dispatch = useDispatch()

  const [name, setName] = useState("")

  const onSubmit = e => {
    e.preventDefault()
    if (name === "") {
      return
    }

    const newTicket = {
      hireno: 1004 + idx,
      name,
      date: moment().format("YYYY-MM-DD"),
      total: 100
    }
    dispatch(addHireTicket(newTicket))

    //Clear State so it clears input fields after update
    setName("")
    idx++
  }

  const onChange = e => setName(e.target.value)
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name of Hirer"
          value={name}
          onChange={onChange}
        />
        &nbsp;
        <input type="submit" value="ADD TICKET" />
      </form>
      <p />
    </div>
  )
}

export default AddTicket
