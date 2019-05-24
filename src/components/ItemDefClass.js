//**************************************************************************************************
//***** ITEMDEF COMPONENT - Allow entry of new Items (dispatched from button in HireList Table) ****
//**************************************************************************************************
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { defineItem, addHireItem, getItem, clearItem } from '../store/actions'

class ItemDefClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //NEEDED THIS TO DELCARE STATE - OTHERWISE FUNNY HAPPENINGS WHEN READING STATE VALUES (SHOWING NULL)
      desc: '',
      amount: 0
    }
  }

  clearIt = e => {
    this.props.clearItem()
  }

  addIt = e => {
    this.props.defineItem({ desc: 'A NEW ITEM', amount: 222 })
  }

  //LOAD ANY PRE-EXISTING REDUX STATE BEFORE COMPONENT STARTS
  componentDidMount = () => {
    this.setState(this.props.itemDef)
  }

  //CONTROL UPDATES TO STORE DEPENDING ON CHNAGE TO INPUT (THIS.STATE) OR CHANGES TO REDUX STORE (THIS.PROPS.ITEMDEF)
  componentDidUpdate = prevProps => {
    if (this.props.itemDef.desc !== prevProps.itemDef.desc) {
      this.setState(this.props.itemDef)
    } else if (this.state != prevProps.itemDef.desc) {
      this.props.defineItem(this.state)
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        <div>
          <p>Define new items to be added below - before clicking Add Item</p>
          <input
            value={this.state.desc}
            type='text'
            name='desc'
            placeholder='Description of Item'
            onChange={this.onChange}
          />
          &nbsp;
          <input
            value={this.state.amount}
            type='number'
            name='amount'
            placeholder='Amount'
            onChange={this.onChange}
          />
          &nbsp;
          <button onClick={this.clearIt} className='btn-warning rounded'>
            CLEAR ITEM
          </button>
          &nbsp;
          <button onClick={this.addIt} className='btn-success rounded'>
            ADD ITEM TO INPUT
          </button>
        </div>
      </div>
    )
  }
}

//WE BIND REDUX STORE TO COMPONENT VIA PROPS - HERE WE GET this.props.itemDef
const mapStateToProps = state => ({
  itemDef: state.pendingItem
})

//NOte: Connect automatically attaches dispatch to props - so there is no need for mapDIspatchToProps
export default connect(
  mapStateToProps,
  { defineItem, addHireItem, clearItem }
)(ItemDefClass)
