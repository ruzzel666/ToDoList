import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setInputValue, clearInputValue } from '../../feature/form'
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper, FormDateField } from './Form.styled'

import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
    const dispatch = useDispatch()
    const inputValue = useSelector((state: RootState) => state.form.inputValue)
    const [dueDate, setDueDate] = useState('')

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (inputValue) {
            props.createNewToDo(inputValue, dueDate || undefined)
            dispatch(clearInputValue())
            setDueDate('')
        }
    }

    const formatDateForInput = (date: Date) => {
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const hours = String(date.getHours()).padStart(2, '0')
        const minutes = String(date.getMinutes()).padStart(2, '0')
        return `${year}-${month}-${day}T${hours}:${minutes}`
    }

    const minDate = formatDateForInput(new Date())

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        value={inputValue}
                        type="text"
                        placeholder="Что нужно сделать?"
                        onChange={(e) => dispatch(setInputValue(e.target.value))}
                    />
                    <FormDateField
                        type="datetime-local"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        min={minDate}
                        title="Срок выполнения"
                    />
                    <FormControl $icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}