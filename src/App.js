import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../src/App.css';
const list = [1, 2, 3, 4]
const App = () => {
  const newList = list.map(i => <li key={uuidv4()}>{i}</li>)
  const [mainList, setMainList] = useState(newList)
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
      setMainList((prevState) => [...prevState, <li key={uuidv4()}>{event.target.value}</li>])
      setText('')
    }
  }
  const newL = mainList;

  return (
    <div className='button-holder'>
      <List mainList={newL} setMainList={setMainList} />
        <input className='button-holder__input' type='text' onChange={handleText} onKeyDown={handleKeyDown} ref={textArea} value={text} />
        <div>
          <button className='focus' onClick={focusChange}>focus</button>
        </div>
    </div>
  )
}

const List = ({mainList, setMainList}) => {

  const setVal = () => {
    mainList.unshift(<li key={uuidv4()}>!!!</li >)

    setMainList(mainList.concat())
  }
  return (<div className='input-holder'>
    <button  onClick={setVal}>
      add !!!
    </button>
    <div className='holder-list'>
      <ul className='list'>{mainList}</ul>
    </div>
  </div>)
}

export default App
