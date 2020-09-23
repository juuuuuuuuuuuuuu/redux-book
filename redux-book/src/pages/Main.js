import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import useForm from '../hooks/useForm';

function Main() {
  const { handleChange, handleSubmit } = useForm();

  return (
    <div>
      <Input onChange={handleChange} />
      <Button label="검색" onClick={handleSubmit} />
    </div>
  )
}
export default Main