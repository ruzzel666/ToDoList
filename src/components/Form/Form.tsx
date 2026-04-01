import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setInputValue, clearInputValue } from '../../feature/form'
import {
    FormBlock,
    FormControl,
    FormField,
    FormLabel,
    FormWrapper,
    DateTimeButton,
    DateTimeModal,
    DateTimeModalRow,
    ModalDateInput,
    ModalTimeInput,
    ModalButtons,
    ModalButton,
} from './Form.styled'

import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
    const dispatch = useDispatch()
    const inputValue = useSelector((state: RootState) => state.form.inputValue)
    const [dueDate, setDueDate] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [tempDate, setTempDate] = useState('')
    const [tempTime, setTempTime] = useState('')
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false)
            }
        }

        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showModal])

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()

        if (inputValue) {
            props.createNewToDo(inputValue, dueDate || undefined)
            dispatch(clearInputValue())
            setDueDate('')
        }
    }

    const openModal = () => {
        if (dueDate) {
            const [date, time] = dueDate.split('T')
            setTempDate(date)
            setTempTime(time)
        } else {
            setTempDate('')
            setTempTime('')
        }
        setShowModal(true)
    }

    const applyDateTime = () => {
        if (tempDate && tempTime) {
            setDueDate(`${tempDate}T${tempTime}`)
        }
        setShowModal(false)
    }

    const clearDateTime = () => {
        setDueDate('')
        setTempDate('')
        setTempTime('')
        setShowModal(false)
    }

    const formatDisplayDate = (dateTimeString: string) => {
        if (!dateTimeString) return 'Нет срока'
        const date = new Date(dateTimeString)
        return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
    }

    const minDate = new Date().toISOString().slice(0, 16)

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
                    <DateTimeButton type="button" $hasValue={!!dueDate} onClick={openModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13h-2v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                        </svg>
                        {formatDisplayDate(dueDate)}
                    </DateTimeButton>
                    <FormControl $icon={plusIcon} />
                </FormLabel>
            </FormBlock>

            {showModal && (
                <DateTimeModal ref={modalRef}>
                    <DateTimeModalRow>
                        <label>Дата</label>
                        <ModalDateInput
                            type="date"
                            value={tempDate}
                            onChange={(e) => setTempDate(e.target.value)}
                            min={minDate.slice(0, 10)}
                        />
                    </DateTimeModalRow>
                    <DateTimeModalRow>
                        <label>Время</label>
                        <ModalTimeInput
                            type="time"
                            value={tempTime}
                            onChange={(e) => setTempTime(e.target.value)}
                        />
                    </DateTimeModalRow>
                    <ModalButtons>
                        <ModalButton type="button" onClick={clearDateTime}>
                            Очистить
                        </ModalButton>
                        <ModalButton type="button" $primary onClick={applyDateTime}>
                            Применить
                        </ModalButton>
                    </ModalButtons>
                </DateTimeModal>
            )}
        </FormWrapper>
    )
}