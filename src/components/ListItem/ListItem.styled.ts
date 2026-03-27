import styled from 'styled-components'

export const ListItemLink = styled.a<{ done: boolean }>`
    text-decoration: none;
    padding: 20px;
    color: ${(props) => (props.done ? 'green' : 'red')};
`
