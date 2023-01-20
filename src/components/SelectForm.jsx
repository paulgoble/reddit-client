import React from 'react'
import { 
  FormGroup,
  Select,
  MenuItem,
  Button,
  InputLabel
} from '@mui/material'

const SelectForm = ({ onSelect, formData }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    onSelect(formData[value])
  }

  const styles = {
    labelStyles: {
      color: "#fff",
      marginRight: '0.6em',
      fontSize: "23px;"
    },
    selectStyles: {
      backgroundColor: '#fff',
      marginRight: '1.6em',
      height: '2.2em'
    }
  }
  
  return (
    <FormGroup row>
      <InputLabel id="form-label" sx={styles.labelStyles}>
        Select by topic:
      </InputLabel>

      <Select labelid="form-label" value={value}
        onChange={handleChange} sx={styles.selectStyles}
      >
        {formData.map((data, index) => (
          <MenuItem key={index} value={index}>{data}</MenuItem>
        ))}
      </Select>

      <Button variant="contained" onClick={handleSubmit}>
        Get New Posts
      </Button>
    </FormGroup>
  )
}

export default SelectForm