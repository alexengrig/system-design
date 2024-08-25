import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import ActiveUsersInput from './ActiveUsersInput'

function ActiveUsers() {
  const [indexOfLastChanged, setIndex] = useState(0)
  const [mau, setMAU] = useState(100000)
  const [wau, setWAU] = useState(25000)
  const [dau, setDAU] = useState(33333)
  return (
    <section>
      <Typography>Active Users</Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <ActiveUsersInput
          id="mau-input"
          title="MAU"
          subtitle="Monthly Active Users"
          exact={indexOfLastChanged === 0}
          value={mau}
          onChange={value => {
            setMAU(value)
            setIndex(0)
          }}
        />
        <ActiveUsersInput
          id="wau-input"
          title="WAU"
          subtitle="Weekly Active Users"
          exact={indexOfLastChanged === 1}
          value={wau}
          onChange={value => {
            setWAU(value)
            setIndex(1)
          }}
        />
        <ActiveUsersInput
          id="dau-input"
          title="DAU"
          subtitle="Daily Active Users"
          exact={indexOfLastChanged === 2}
          value={dau}
          onChange={value => {
            setDAU(value)
            setIndex(2)
          }}
        />
      </Box>
    </section>
  )
}

export default ActiveUsers