import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setInputValue, clearInputValue } from '../../feature/form'
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from './Form.styled'

import plusIcon from '../../assets/images/plus.png'

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
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        value={inputValue}
                        type="text"
                        onChange={(e) => dispatch(setInputValue(e.target.value))}
                    />
                    <FormControl $icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}