import React from 'react'

const SelectForm = ({ onSelect }) => {
  const [value, setValue] = React.useState(0)

  const formData = ['r/javascript', 'r/node', 'r/programming', 'r/reactjs', 'r/ubuntuserver','r/webdev']

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
        Select by topic:&nbsp;
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