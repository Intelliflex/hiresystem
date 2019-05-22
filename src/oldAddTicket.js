import React, { Component } from "react"
import { connect } from "react-redux"
import moment from "moment"
import { addHireTicket } from "../store/actions"

let idx = 0

class AddTicket extends Component {
  state = {
    hireno: 1004 + idx,
    name: "",
    date: "2019-05-01",
    total: 100
  }

  onSubmit = e => {
    e.preventDefault()

    const { name } = this.state

    //Dont proceed if name is blank
    if (name === "") {
      return
    }

    const newTicket = {
      hireno: 1004 + idx,
      name,
      date: moment().format("YYYY-MM-DD"),
      total: 100
    }
    this.props.dispatch(addHireTicket(newTicket))

    //Clear State so it clears input fields after update
    this.setState({ name: "" })
    idx++
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
    const { hireno, name, date, total } = this.state
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name of Hirer"
            value={name}
            onChange={this.onChange}
          />
          <input type="submit" value="ADD TICKET" />
        </form>
      </div>
    )
  }
}

export default connect(null)(AddTicket)
