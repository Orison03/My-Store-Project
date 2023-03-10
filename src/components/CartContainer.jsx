import React from 'react'
import { useGlobalCustomHook } from '../context'
import EmptyContainer from './EmptyContainer'
import Items from './Items'

const CartContainer = () => {
    const {cartData} = useGlobalCustomHook()
  return (
    <main>
       {
        cartData.length === 0 ? <EmptyContainer/> : <Items/>
       }
    </main>
  )
}

export default CartContainer;