import React from 'react'
import { useAppContext } from '../AppContext'
export default function UserProfile() {
     const {name,UserGreeting}=useAppContext()

  return (
    <div>
      <label>{UserGreeting}</label>
    </div>
  )
}
