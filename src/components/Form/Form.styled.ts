import styled from 'styled-components'

export const FormWrapper = styled.div`
    width: 100%;
    min-height: 80px;
    position: relative;
    padding: 15px;
    z-index: 5;
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    box-shadow: 0 2px 4px rgba(44, 62, 80, 0.15);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    align-items: center;
`

export const FormBlock = styled.form`
    display: flex;
    gap: 10px;
    width: 100%;
    align-items: center;
`

export const FormLabel = styled.label`
    flex: 1;
    display: flex;
    gap: 10px;
    align-items: center;
`

export const FormField = styled.input`
    flex: 1;
    min-width: 200px;
    height: 50px;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    text-indent: 18px;
    padding: 0 10px;
    background: #ffffff33;
    border-radius: 5px 25px 25px 5px;
    border: 0;
    box-shadow: none;
    outline: none;

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }
`

export const FormDateField = styled.input`
    width: 160px;
    height: 50px;
    color: #fff;
    font-size: 14px;
    padding: 0 10px;
    background: #ffffff33;
    border-radius: 5px;
    border: 0;
    box-shadow: none;
    outline: none;
    cursor: pointer;

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
    }

    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
        cursor: pointer;
    }
`

export const FormControl = styled.button<{ $icon: string }>`
    width: 50px;
    height: 50px;
    background: transparent url(${(props) => props.$icon}) no-repeat center/cover;
    position: relative;
    border-radius: 25px;
    border: 0;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    flex-shrink: 0;
`