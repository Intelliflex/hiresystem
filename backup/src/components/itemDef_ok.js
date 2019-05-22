//**************************************************************************************************
//***** ITEMDEF COMPONENT - Allow entry of new Items (dispatched from button in HireList Table) ****
//**************************************************************************************************
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { defineItem, clearItem } from '../store/actions'

const ItemDef = props => {
  //BRING IN DISPATCH FROM REDUX STORE
  const dispatch = useDispatch()

  const { itemDef } = useSelector(state => ({
    itemDef: state.pendingItem
  }))

  //console.log(itemDef)

  const [desc, setDesc] = useState('')
  const [amount, setAmount] = useState(0)

  //CANNOT USE USESELECTOR AND USESTATE TOGETHER
  // const { desc, amount } = useSelector(state => ({
  //   desc: state.desc,
  //   amount: state.amount
  // }))
  //const xx = useSelector(state => state)
  //setDesc(xx.desc)
  //setAmount(xx.amount)

  const prevDesc = useRef(desc)
  useEffect(() => {
    //WE NEED TO CONDITIONALLY UPDATE BASED ON STORE CHANGING OR INPUT CHANGING
    //setDesc(itemDef.desc)
    //if (desc !== itemDef.desc) {
    if (desc !== prevDesc.current) {
      //INPUT HAS CHANGED
      // console.log('effect')
      // console.log('PREV  =>' + prevDesc.current)
      // console.log('STORE =>' + itemDef.desc)
      // console.log('STATE =>' + desc)
      // console.log('Change....')
      setDesc(desc)
      prevDesc.current = desc
    } else {
      if (desc !== itemDef.desc) {
        setDesc(itemDef.desc)
      }
    }
  })

  const clearIt = e => {
    console.log('Clear')
    dispatch(clearItem())
  }

  const addIt = e => {
    console.log('Add it')
    dispatch(defineItem('MY NEW ITEM', 222))
    console.log(props)
    console.log('XXXX')
    //console.log(xx)
    console.log('-----')
    //console.log(this.props)
  }

  return (
    <div>
      <p>Define new items to be added below - before clicking Add Item</p>
      <input
        value={desc}
        type='text'
        name='desc'
        placeholder='Description of Item'
        onChange={e => setDesc(e.target.value)}
        //Use onBlur Event so that changes are only submitted to store when field loses focus
        onBlur={e => dispatch(defineItem(desc, amount))}
      />
      &nbsp;
      <input
        value={amount}
        type='number'
        name='amount'
        placeholder='Amount'
        onChange={e => setAmount(e.target.value)}
        //Use onBlur Event so that changes are only submitted to store when field loses focus
        onBlur={e => {
          dispatch(defineItem(desc, amount))
        }}
      />
      &nbsp;
      <button onClick={clearIt}>CLEAR ITEM</button>
      &nbsp;
      <button onClick={addIt}>ADD ITEM</button>
    </div>
  )
}

export default ItemDef
