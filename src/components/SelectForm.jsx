import React from 'react'

const SelectForm = ({ onSelect, formData }) => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSelect(formData[value])
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label">
        <select value={value} onChange={handleChange}>
          {formData.map((data, index) => (
            <option key={index} value={index}>{data}</option>
          ))}
        </select>
        <button type="submit">Get New Posts</button>
      </label>
    </form>
  )
}

export default SelectForm