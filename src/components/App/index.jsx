import React, { useEffect } from 'react'
import UserCard from '../UserCard'
import Button from '../Button/index'
import axios from 'axios'

const Index = () => {
  const [usersToShow, setUsersToShow] = React.useState(0)
  const [data, setData] = React.useState([])
  const usersLimit = 5
  const users = []

  const getData = () => {
    axios.get('https://randomuser.me/api/', {
      params: {
        results: usersLimit
      }
    })
      .then((response) => {
        setData(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const showMoreButtonEvent = () => {
    usersToShow < usersLimit
      ? setUsersToShow(usersToShow + 1)
      : setUsersToShow(0)
  }

  const showMoreUsersButton = React.createElement(Button, {
    onClick: showMoreButtonEvent,
    value: 'Show More',
    key: 'showMoreUsersButton'
  })

  useEffect(() => {
    if (data.length === 0) {
      getData()
    }
  }, [data])

  if (data.length > 0 && usersToShow > 0) {
    for (let i = 0; i < usersToShow; i++) {
      users.push(
        React.createElement(UserCard, {
          user: data[i],
          key: i
        })
      )
    }
  }

  return [showMoreUsersButton, users]
}

export default Index
