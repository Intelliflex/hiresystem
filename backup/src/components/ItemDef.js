import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { defineItem } from "../store/actions"

let idx = 0

const ItemDef = props => {
  //BRING IN DISPATCH FROM REDUX STORE
  const dispatch = useDispatch()

  const [desc, setDesc] = useState([])
  const [amount, setAmount] = useState([])

  return (
    <div>
      <p>Define new items to be added below - before clicking Add Item</p>
      <input
        value={desc}
        type="text"
        name="desc"
        placeholder="Description of Item"
        onChange={e => setDesc(e.target.value)}
        //Use onBlur Event so that changes are only submitted to store when field loses focus
        onBlur={e => dispatch(defineItem(desc, amount))}
      />
      &nbsp;
      <input
        value={amount}
        type="number"
        name="amount"
        placeholder="Amount"
        onChange={e => setAmount(e.target.value)}
        //Use onBlur Event so that changes are only submitted to store when field loses focus
        onBlur={e => {
          dispatch(defineItem(desc, amount))
        }}
      />
    </div>
  )
}

export default ItemDef
