import {TextField, Button, Container, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Checkbox} from '@mui/material'
import { useState } from 'react'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const temp = {}
    if (password.length < 6) temp.password = 'Min 6 characters'
    setErrors(temp)
    return Object.keys(temp).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.checkValidity() && validate()) {
      alert('Form submitted successfully')
      console.log('Form submitted successfully')
    }
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>Login Form</Typography>

      <form onSubmit={handleSubmit} noValidate>
        <TextField
          type="email"
          label="Email"
          value={email}
          required
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <TextField
          type="password"
          label="Password"
          value={password}
          required
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password}
          inputProps={{ minLength: 6 }}
        />

        <FormControlLabel
          control={<Checkbox defaultChecked={false} />}
          label="Remember me"
        />

        <FormControl margin="normal">
          <FormLabel>Login Type</FormLabel>
          <RadioGroup defaultValue="user">
            <FormControlLabel value="user" control={<Radio />} label="User" />
            <FormControlLabel value="admin" control={<Radio />} label="Admin" />
          </RadioGroup>
        </FormControl>

        <Button variant="contained" type="submit">Login</Button>
      </form>
    </Container>
  )
}