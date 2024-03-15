//we will give all props here
import { useState } from 'react'
import NoteContext from './NoteContext'
const NoteState = (props) => {
    const [alert, setAlert] = useState({ msg: "", type: "" });
    const showAlert = (msg, type) => {
        setAlert({ msg, type })
        setTimeout(() => {
            setAlert({ msg: "" })
        }, 2000)
    }
    return (
        <div>
            <NoteContext.Provider value={{ alert:alert, showAlert:showAlert }}>
                {props.children}
            </NoteContext.Provider>
        </div>
    )
}
export default NoteState;
