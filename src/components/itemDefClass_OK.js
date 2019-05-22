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
    console.log('Clear')
  }

  addIt = e => {
    console.log('Add it')
    this.props.defineItem('A NEW ITEM', 222)
    console.log(this.props)
  }

  componentDidMount = () => {
    console.log('mounted')

    this.props.addHireItem(1002, 'Buzz Saw', 255)
    this.props.defineItem('FUCK YEAH', 111)

    //this.setState(this.props.itemDef)
    console.log('Did Mount')
    this.setState(this.props.itemDef)
  }

  componentDidUpdate = prevProps => {
    // console.log('Update')
    // console.log(this.state)
    // console.log(this.props.itemDef)
    // console.log(prevProps.itemDef)
    //THIS IS THE KEY WHEN PROPS ARE UPDATED
    if (this.props.itemDef.desc !== prevProps.itemDef.desc) {
      this.setState(this.props.itemDef)
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    //Bind Variables to the Properties delivered from Redux Store via connect
    const { desc, amount } = this.state

    return (
      <div>
        <div>
          <p>Define new items to be added below - before clicking Add Item</p>
          <input
            value={desc}
            type='text'
            name='desc'
            placeholder='Description of Item'
            onChange={this.onChange}
            //Use onBlur Event so that changes are only submitted to store when field loses focus
            //onBlur={e => dispatch(defineItem(desc, amount))}
          />
          &nbsp;
          <input
            value={amount}
            type='number'
            name='amount'
            placeholder='Amount'
            onChange={this.onChange}
            //Use onBlur Event so that changes are only submitted to store when field loses focus
            //onBlur={e => {
            //  dispatch(defineItem(desc, amount))
            //}}
          />
          &nbsp;
          <button onClick={this.clearIt}>CLEAR ITEM</button>
          &nbsp;
          <button onClick={this.addIt}>ADD ITEM</button>
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
  { defineItem, addHireItem }
)(ItemDefClass)
