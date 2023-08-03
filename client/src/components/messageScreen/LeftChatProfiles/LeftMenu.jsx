import React from 'react'
import TopIcons from './TopIcons'
import { Box } from '@mui/material'
import SearchBar from './SearchBar'

const LeftMenu = () => {
  return (
    <Box height={'100%'} width={'100%'}>

        <TopIcons/>
        <SearchBar/>
    </Box>
  )
}

export default LeftMenu