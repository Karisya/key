import React, { useState, useRef } from 'react';
import { ThemeProvider } from './providers/ThemeProvider'
import { Root } from './components/Root'
import { v4 as uuidv4 } from 'uuid';
import '../src/App.css';

const App = () => {
    const list = [1, 2, 3, 4]
    // const newList = list.map(i => <li key={uuidv4()}>{i}</li>)
    const [mainList, setMainList] = useState(list)
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
            setMainList((prevState) => [...prevState, event.target.value])
            setText('')
        }
    }

    return (
        <ThemeProvider>
            <Root />
            <div className='button-holder'>
                <List mainList={mainList} setMainList={setMainList} />
                <input className='button-holder__input' type='text' onChange={handleText} onKeyDown={handleKeyDown} ref={textArea} value={text} />
                <div>
                    <button className='focus' onClick={focusChange}>focus</button>
                </div>
            </div>
        </ThemeProvider>

    )
}

const List = ({ mainList, setMainList }) => {
    const setVal = () => {
        setMainList((prevState) => {
            return prevState.map((i, id) => id === 0 ? i = `!!!${i}` : i
            )
        })
    }
    return (<div className='input-holder'>
        <button className='add' onClick={setVal}>
            add !!!
        </button>
        <div className='holder-list'>
            <ul className='list'>{mainList.map(i => <li key={uuidv4()}>{i}</li>)}</ul>
        </div>
    </div>)
}


export default App