import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Nav = () => {

  const [activeItem, setActiveItem] = useState('Log In');

  const activeHandler = (e, { name }) => setActiveItem({activeItem: name})
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
        onClick={activeHandler}
      />
      <Menu.Item
        name='Add A Friend'
        active={activeItem === 'Add A Friend'}
        as={NavLink}
        to='/addfriend'
        onClick={activeHandler}
      />
      <Menu.Item
        name='Edit A Friend'
        active={activeItem === 'Edit A Friend'}
        as={NavLink}
        to='/editfriend'
        onClick={activeHandler}
      />
    </Menu>
  )
}

export default Nav