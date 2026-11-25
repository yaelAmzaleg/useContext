import React from 'react'
import { useAppContext } from '../AppContext'

export default function UserName() {
    const {name,UserGreeting}=useAppContext()
  return (
    <div>
      <label>{name}</label>
    </div>
  )
}
