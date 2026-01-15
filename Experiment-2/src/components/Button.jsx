import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export function ButtonBasic() {
  return (
    <>
    <Button size="small" variant='outlined'>Small</Button>
    <Button size="large" variant='outlined'>Large</Button>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </>
  )
}

export function Ss(){
  return (
    <Select native>
      <option value={10}>Ten</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
    </Select>
  )
}

export function RatingBasic(){
  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
  )
}