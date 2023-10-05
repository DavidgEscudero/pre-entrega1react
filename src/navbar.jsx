import React from 'react'
import cartwidget from './cartwidget'
import {Menu,MenuButton,MenuList,MenuItem } from '@chakra-ui/react'
const navbar = () => {
  return (
    <div>
        <h1>Hardgamers</h1>
        <Menu>
  <MenuButton>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem>
  </MenuList>
</Menu>
        <cartwidget/>
        </div>
  )
}

export default navbar