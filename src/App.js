import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../src/App.css';
const App = (props) => {
  const list = props.list;
  console.log(list)
  const [mainList, setList] = useState(list)
  const [text, setText] = useState('')
  const textArea = useRef(null)
  const handleText = (e) => {
    setText(e.target.value)
  }
  const focusChange = () => {
    textArea.current.focus()
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      list.push(<li key={uuidv4()}>{text}</li>)
      const newList = list.concat()
      setList(newList)
      setText('')
    }
  }

  return (
    <div class='button-holder'>
      <input type='text' onChange={handleText} onKeyDown={handleKeyDown} ref={textArea} value={text} />
      <div>
        <button class='focus' onClick={focusChange}>focus</button>
      </div>
    </div>
  )
}

const List = (props) => {
  const arr = props.arr
  const listItem = arr.map(it => <li key={uuidv4()}>{it}</li>)
  const [list, setList] = useState(listItem)
  const setVal = () => {
    list.unshift(<li key={uuidv4()}>!!!</li >)
    const newList = list.concat();
    setList(newList)
  }
  return (<div class='input-holder'>
    <button onClick={setVal}>
      add !!!
    </button>
    <div class='holder-list'>
      <ul class='list'>{list.map(i => <li key={uuidv4()}>{i}</li>)}</ul>
    </div>
    <App list={list} />
  </div>)
}

const ParentApp = () => { 
  return (
    <div>
      <List arr={[1, 2, 3, 4]} />
    </div>
  )
}

export default ParentApp
