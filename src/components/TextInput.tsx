import * as React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '../atoms/todo'

function TextInput() {
  const [text, setText] = useRecoilState(textState)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setText(value)
  }

  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <br />
      <div>
        <span>Echo: {text}</span>
      </div>
    </div>
  )
}

export default TextInput
