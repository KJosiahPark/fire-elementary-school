import { useState } from 'react';

const useInputChange = (initialObj) => {
  const [input, setInput] = useState(initialObj)

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const reset = () => {
    setInput(initialObj);
  }

  return [input, handleInputChange, reset]
}

export { useInputChange };