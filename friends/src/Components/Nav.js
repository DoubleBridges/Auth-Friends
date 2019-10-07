import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Nav = () => {

  const [token, setToken] = useState(true)
  const [watcher, setWatcher] = useState(false)
  
  useEffect(() => {
    setToken(!!localStorage.token ? false : true)
    console.log(token)
  }, [watcher])

  const [activeItem, setActiveItem] = useState('Log In');

  const activeHandler = (e, { name }) => {
    setActiveItem({ activeItem: name })
    setWatcher(!watcher)
  }

  const deleteToken = () => localStorage.clear()
  
  return (
    <Menu tabular>
      <Menu.Item
        name='Log In'
        active={activeItem === 'Log In'}
        as={NavLink}
        exact to='/'
        onClick={activeHandler}
      />
      <Menu.Item
        name='Friends'
        active={activeItem === 'Friends'}
        as={NavLink}
        to='/friendlist'
        disabled={token}
        onClick={activeHandler}
      />
      <Menu.Item
        name='Add A Friend'
        active={activeItem === 'Add A Friend'}
        as={NavLink}
        to='/addfriend'
        disabled={token}
        onClick={activeHandler}
      />
      <Menu.Item
        name='Edit A Friend'
        active={activeItem === 'Edit A Friend'}
        as={NavLink}
        to='/editfriend'
        disabled={token}
        onClick={activeHandler}
      />
      <Menu.Item
        name='Log Out'
        active={activeItem === 'Log Out'}
        as={NavLink}
        exact to='/'
        onClick={deleteToken}
      />
    </Menu>
  )
}

export default Nav