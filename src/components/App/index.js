import data from '../../resources/dataSamples/users/index'
import React from 'react'
import UserCard from '../UserCard'

const Index = () => {
  const users = []

  for (let i = 0; i < data.length; i++) {
    const user = data[i]
    users.push(
      React.createElement(UserCard, {
        user: user,
        key: i
      })
    )
  }
  return users
}

export default Index
