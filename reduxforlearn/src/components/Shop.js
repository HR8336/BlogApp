import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "../state/index"

const Shop = () => {

  const dispatch = useDispatch()
  const {withdrawMoney , depositeMoney} = bindActionCreators(actionCreators , dispatch)

  const balance = useSelector(state => state.amount)
  return (
      <>  
        <div>
        <h2>Deposite/Withdraw Money</h2>
             {/* <button className='btn btn-primary mx-2' onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
             Update Balance 
             <button className='btn btn-primary mx-2' onClick={() => {dispatch(actionCreators.depositeMoney(100))}}>+</button> */}
             <button className='btn btn-primary mx-2' onClick={() => {withdrawMoney(100)}}>-</button>
              Balance : {balance}
             <button className='btn btn-primary mx-2' onClick={() => {depositeMoney(100)}}>+</button>
        </div>
      </>


  )
}

export default Shop