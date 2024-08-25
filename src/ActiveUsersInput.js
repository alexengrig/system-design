import React from 'react'
import { Avatar, Button, InputAdornment, TextField } from '@mui/material'

function ActiveUsersInput({ title, subtitle, exact, value, onChange }) {
  return (
    <div>
      <TextField
        type="number"
        label={title}
        helperText={subtitle}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Avatar sx={{ width: 24, height: 24 }}>{exact ? '=' : '~'}</Avatar>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button>Foo</Button>
            </InputAdornment>
          )
        }}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      /></div>
  )
}

export default ActiveUsersInput