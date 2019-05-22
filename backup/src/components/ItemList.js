// ItemList() Function Component Using Hooks
import React, { useState } from "react"
import { useSelector } from "react-redux"

const ItemList = props => {
  //**** Connect to Redux State *****
  const { items, activehire } = useSelector(state => ({
    items: state.items,
    activehire: state.settings[0].hireno
  }))

  const currenthire = items.filter(item => item.hireno === activehire)
  if (activehire) {
    return (
      <div>
        <table>
          <tbody>
            {currenthire.map(item => (
              <tr key={item.hireno + "." + item.desc}>
                <td>{item.hireno}</td>
                <td>{item.desc}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
      </div>
    )
  } else {
    return <div />
  }
}
export default ItemList
