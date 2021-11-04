# React with Recoil

## 사전공부
recoil(이하 리코일)은 페이스북이 2020년에 만든 상태관리 라이브러리이다. 
공식홈페이지에서 소개하는 리코일의 특징은 minimal and reactish이다. '가볍고 리액트친화적인' 이라고 해석할 수 있겠다. 

리코일은 컴포넌트가 구독할 수 있는 ReactState를 atom으로 지정하고 이 atom 값이 바뀌면 해당 atom을 구독하고 있는 
컴포넌트들만 재렌더링이 일어날도록 설계되어 있다고 한다. 그리고 selector는 상태에서(state에서) 파생된 데이터로, 
다른 atom에 의존하는 동적 데이터를 만들 수 있게 한다. 아마도 Vuejs에서 vuex가 가지는 상태값에서 store의 값에 연동되는 getters 같은 존재인가보다.

리코일은 또한 리액트의 동시성모드(Concurrent Mode. 내가 알기로는 아직 개발중이며 출시되지는 않았다)를 지원한다.
또한 비동기 함수들도 selector 데이터 플로우 그래프에서 균일하게 혼잡하게 해준다고 한다(사실 이 말은 아직 무슨소린지 모르겠다).
여튼 이러저러한 기능이 있어 요새는 변경이 덜 일어나는 부분은 context api로, 잦은 변경이 일어나는 부분은 리코일을 사용한다고 한다.

## 공식문서 따라 공부
### Atom
Atom은 상태(state)의 일부를 나타낸다. Atoms는 어떤 컴포넌트에서나 읽고 쓸 수 있다. aotm의 값을 읽는 컴포넌트들은 
암묵적으로 atom을 구독한다. 그래서 atom에 어떤 변화가 있으면 그 atom을 구독하는 모든 컴포넌트들이 재렌더링되는 결과가 발생할 것이다.

```javascript
const textState = atom({
  key: 'textState', // 다른 atom, selectors와 구분되는 고유한 ID
  default: '', // 해당 atom의 기본값 또는 초기값
})
```

컴포넌트가 atom을 읽고 쓰게 하기 위해서는 `useRecoilState()`를 아래와 같이 사용하면 된다.

```javascript
function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  )
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);
  
  const onChange = event => {
    setText(event.target.value)
  }
  
  return (
    <div>
      <input type='text' value={text} onChange={onChange} />
      <br />
      <span>Echo: {text}</span>
    </div>
  )
}
```

### Selector
