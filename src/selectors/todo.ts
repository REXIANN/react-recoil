import { selector } from "recoil"
import { textState } from '../atoms/todo'

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get })=> {
    const text = get(textState)
    // @ts-ignore
    return text.length
  }
})
