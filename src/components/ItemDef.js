//**************************************************************************************************
//***** ITEMDEF COMPONENT - Allow entry of new Items (dispatched from button in HireList Table) ****
//**************************************************************************************************
import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { defineItem, clearItem } from '../store/actions'
import _ from 'lodash'

const ItemDef = props => {
  //BRING IN DISPATCH FROM REDUX STORE
  const dispatch = useDispatch()

  //DEFINE SELECTOR - EQUIV TO MAPSTATETOPROPS
  const { itemDef } = useSelector(state => ({
    itemDef: state.pendingItem
  }))

  const [item, setItem] = useState({ desc: '', amount: 0 })

  const onChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    })
  }

  const prevItem = useRef(item)
  useEffect(() => {
    //WE NEED TO CONDITIONALLY UPDATE BASED ON EITHER STORE BEING CHANGED DIRECTLY OR INPUT FORM CHANGING
    if (!_.isEqual(item, prevItem.current)) {
      //INPUT HAS CHANGED
      setItem(item)
    } else if (!_.isEqual(item, itemDef)) {
      //REDUX STATE HAS CHANGED
      setItem(itemDef)
    }
    prevItem.current = item
  }, [item, itemDef]) //Note: item and ItemDef are passed in as second argument in order to use setItem

  const clearIt = e => {
    dispatch(clearItem())
  }

  const addIt = e => {
    dispatch(defineItem({ desc: 'MY NEW ITEM', amount: 222 }))
  }

  return (
    <div>
      <p>
        Define new items to be added below - before clicking Add Item tp Input
      </p>
      <input
        value={item.desc}
        type='text'
        name='desc'
        placeholder='Description of Item'
        onChange={onChange}
        //Use onBlur Event so that changes are only submitted to store when field loses focus
        onBlur={e => dispatch(defineItem(item))}
      />
      &nbsp;
      <input
        value={item.amount}
        type='number'
        name='amount'
        placeholder='Amount'
        onChange={onChange}
        //Use onBlur Event so that changes are only submitted to store when field loses focus
        onBlur={e => dispatch(defineItem(item))}
      />
      &nbsp;
      <button onClick={clearIt} className='btn-warning rounded'>
        CLEAR ITEM
      </button>
      &nbsp;
      <button onClick={addIt} className='btn-success rounded'>
        ADD ITEM TO INPUT
      </button>
    </div>
  )
}

export default ItemDef
