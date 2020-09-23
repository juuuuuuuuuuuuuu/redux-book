import React from 'react';

function Input({ onChange }) {
  const handleChange = (e) => {
    onChange && onChange(e.target.value);
  }

  return (
    <div>
      <input onChange={handleChange} />
    </div>
  )
}
export default Input;