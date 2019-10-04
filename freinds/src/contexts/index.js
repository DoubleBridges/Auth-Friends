import React, { createContext, useState } from 'react'

export const FriendContext = createContext()

export const FriendProvider = props => {
  const [friends, setFriends] = useState([])

  return (
    <FriendContext.Provider value={[friends, setFriends]}>{props.children}</FriendContext.Provider>
  )
}