import React, { Component } from "react"
import { connect } from "react-redux"
import { addHireTicket } from "../store/actions"

let idx = 0

const onClickAddTicket = e => {
  const newTicket = {
    hireno: 1004 + idx,
    name: "Fuck Yeah!",
    date: "2019-05-01",
    total: 100
  }
  e.props.dispatch(addHireTicket(newTicket))
  idx++
}

class AddTicket extends Component {
  state = {
    hireno: 1004 + idx,
    name: "",
    date: "2019-05-01",
    total: 100
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
    return (
      <div>
        <button
          onClick={() => {
            onClickAddTicket(this)
          }}
        >
          ADD TICKET WITHOUT INPUT
        </button>
      </div>
    )
  }
}

export default connect(null)(AddTicket)
