import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setInputValue, clearInputValue } from '../../feature/form'
import './Form.scss'

export const Form = (props: { createNewToDo: Function }) => {
    const dispatch = useDispatch()
    const inputValue = useSelector((state: RootState) => state.form.inputValue)

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (inputValue) {
            props.createNewToDo(inputValue)
            dispatch(clearInputValue())
        }
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input
                        value={inputValue}
                        type="text"
                        onChange={(e) => dispatch(setInputValue(e.target.value))}
                    />
                    <button></button>
                </label>
            </form>
        </div>
    )
}