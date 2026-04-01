import styled from 'styled-components'

export const ToDoItem = styled.li<{ $isOverdue: boolean }>`
    width: 100%;
    min-height: 50px;
    font-size: 14px;
    font-weight: 500;
    color: #444;
    line-height: 22px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #fff;
    border-radius: 5px;
    position: relative;
    box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
    margin: 0 0 10px 0;
    padding: 14px;
    word-break: break-word;
    
    ${(props) =>
        props.$isOverdue &&
        `
        border-left: 4px solid #e74c3c;
        background: linear-gradient(90deg, #fadbd8 0%, #fff 100%);
    `}

    &:last-child {
        margin: 0;
    }
`

export const ToDoItemText = styled.span`
    flex: 1;
    margin-right: 10px;
`

export const ToDoItemRight = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ToDoItemDueDate = styled.span<{ $isOverdue: boolean }>`
    font-size: 12px;
    color: ${(props) => (props.$isOverdue ? '#e74c3c' : '#f39c12')};
    padding: 4px 10px;
    background: ${(props) => (props.$isOverdue ? '#fadbd8' : '#fef9e7')};
    border-radius: 4px;
    white-space: nowrap;
    font-weight: 600;
`

export const ToDoItemControls = styled.div`
    display: flex;
    gap: 0;
`

export const ToDoItemControl = styled.button<{ $icon: string }>`
    width: 40px;
    height: 40px;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    border: 0;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    background-image: url(${(props) => props.$icon});
    border-radius: 5px;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    &:first-of-type::before {
        content: '';
        width: 1px;
        height: 24px;
        background: #edf0f1;
        position: absolute;
        top: 8px;
        left: 0;
    }
`