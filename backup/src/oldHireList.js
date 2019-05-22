import React, { Component } from "react"
import { connect } from "react-redux"
import { setActiveTicket } from "../store/actions"
import { deleteHire } from "../store/actions"

import "./HireList.css"

class HireList extends Component {
  onClickDeleteHire = (e, hireno) => {
    //console.log(this)
    //console.log(hireno)
    e.props.dispatch(deleteHire(hireno))
  }

  onClickShowHire = (e, hireno) => {
    //console.log("Show " + hireno)
    //console.log(e)
    e.props.dispatch(setActiveTicket({ hireno: hireno }))
  }

  render() {
    const { tickets } = this.props
    console.log(tickets)
    console.log(this.props)

    return (
      <div>
        <table>
          <tbody>
            {tickets.map(ticket => (
              <tr key={`TR${ticket.hireno}`}>
                <td>{ticket.hireno}</td>
                <td>{ticket.name}</td>
                <td>{ticket.date}</td>
                <td className="td-right" key={`D${ticket.hireno}`}>
                  {ticket.total}
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.onClickShowHire(this, ticket.hireno)
                    }}
                  >
                    SHOW ITEMS
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.onClickDeleteHire(this, ticket.hireno)
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
}

const mapStateToProps = state => ({
  tickets: state.tickets
})

export default connect(mapStateToProps)(HireList)
