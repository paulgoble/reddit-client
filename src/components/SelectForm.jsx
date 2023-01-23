import React from 'react'
import { 
  FormGroup,
  Select,
  MenuItem,
  Button
} from '@mui/material'

const SelectForm = ({ formData }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const selectStyles = {
    backgroundColor: '#fff',
    marginRight: '1.6em',
    height: '2.2em'
  }
  
  return (
    <FormGroup row>
      <Select id="select"
        value={value}
        onChange={handleChange}
        sx={selectStyles}
      >
        {formData.map((data, index) => (
          <MenuItem key={index} value={index}>
            {data}
          </MenuItem>
        ))}
      </Select>
      <Button 
        variant="contained"
        href={`/${formData[value]}`}
      >
        Get New Posts
      </Button>
    </FormGroup>
  )
}

export default SelectForm