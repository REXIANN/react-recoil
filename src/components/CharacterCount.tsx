import * as React from 'react'
import { useRecoilValue} from 'recoil'
import { charCountState } from '../selectors/todo'


function CharacterCount() {
  const count = useRecoilValue(charCountState)

  return <span>Character Count: {count}</span>

}

export default CharacterCount
