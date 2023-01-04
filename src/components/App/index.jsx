import data from '../../resources/dataSamples/users/index'
import React from 'react'
import UserCard from '../UserCard'
import Button from '../Button/index'

const Index = () => {
  const users = []
  const [usersToShow, setUsersToShow] = React.useState(0)

  const buttonEvent = () => {
    if (usersToShow < data.length) {
      setUsersToShow(usersToShow + 1)
    } else {
      setUsersToShow(0)
    }
  }

  const button = React.createElement(Button, {
    onClick: buttonEvent,
    value: 'Add'
  })

  for (let i = 0; i < usersToShow; i++) {
    const user = data[i]
    users.push(
      React.createElement(UserCard, {
        user: user,
        key: i
      })
    )
  }

  return [button, users]
}

export default Index
