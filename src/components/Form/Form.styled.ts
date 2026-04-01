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

export const DateTimeButton = styled.button<{ $hasValue: boolean }>`
    height: 50px;
    padding: 0 15px;
    background: ${(props) => (props.$hasValue ? '#27ae60' : '#ffffff33')};
    border: 2px dashed ${(props) => (props.$hasValue ? '#27ae60' : 'rgba(255, 255, 255, 0.5)')};
    border-radius: 5px;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 6px;

    &:hover {
        background: ${(props) => (props.$hasValue ? '#2ecc71' : '#ffffff55')};
        border-color: #fff;
    }

    svg {
        width: 18px;
        height: 18px;
    }
`

export const DateTimeModal = styled.div`
    position: absolute;
    top: calc(100% + 10px);
    right: 60px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    z-index: 100;
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 280px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &::before {
        content: '';
        position: absolute;
        top: -6px;
        right: 30px;
        width: 12px;
        height: 12px;
        background: ${({ theme }) => theme.colors.backgroundPrimary};
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        transform: rotate(45deg);
    }
`

export const DateTimeModalRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
`

export const ModalDateInput = styled.input`
    height: 40px;
    padding: 0 10px;
    background: #ffffff33;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
        border-color: #fff;
        background: #ffffff55;
    }

    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
        cursor: pointer;
    }
`

export const ModalTimeInput = styled.input`
    height: 40px;
    padding: 0 10px;
    background: #ffffff33;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
        border-color: #fff;
        background: #ffffff55;
    }

    &::-webkit-calendar-picker-indicator {
        filter: invert(1);
        cursor: pointer;
    }
`

export const ModalButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`

export const ModalButton = styled.button<{ $primary?: boolean }>`
    flex: 1;
    height: 36px;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    ${(props) =>
        props.$primary
            ? `
        background: linear-gradient(135deg, #27ae60, #2ecc71);
        color: #fff;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(39, 174, 96, 0.4);
        }
    `
            : `
        background: rgba(255, 255, 255, 0.2);
        color: #fff;

        &:hover {
            background: rgba(255, 255, 255, 0.3);
        }
    `}
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