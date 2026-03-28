import styled from 'styled-components'

export const ListWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`

export const ListGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    padding: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 15px;
    }
`

export const CardLink = styled.a<{ $done: boolean }>`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.colors.backgroundPrimary};
    border-radius: 16px;
    padding: 20px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    min-height: 140px;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(-2px) scale(0.98);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 6px;
        height: 100%;
        background: ${(props) => (props.$done ? 'linear-gradient(180deg, #27ae60, #2ecc71)' : 'linear-gradient(180deg, #e74c3c, #f39c12)')};
        border-radius: 6px 0 0 6px;
        transition: width 0.3s ease;
    }

    &:hover::before {
        width: 8px;
    }
`

export const CardContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 12px;
`

export const CardTitle = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.name === 'dark' ? '#fff' : '#2c3e50'};
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const CardPreview = styled.div`
    font-size: 13px;
    color: ${(props) => props.theme.name === 'dark' ? '#bdc3c7' : '#7f8c8d'};
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    opacity: 0.8;
`

export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    margin-top: auto;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`

export const CardStatus = styled.span<{ $done: boolean }>`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    background: ${(props) => props.$done 
        ? 'linear-gradient(135deg, #d5f5e3, #abebc6)' 
        : 'linear-gradient(135deg, #fadbd8, #f5b7b1)'};
    color: ${(props) => props.$done ? '#27ae60' : '#e74c3c'};
    transition: transform 0.2s ease;

    ${CardLink}:active & {
        transform: scale(0.9);
    }
`

export const CardArrow = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    color: ${(props) => props.theme.name === 'dark' ? '#fff' : '#2c3e50'};
    font-size: 14px;
    transition: all 0.3s ease;

    ${CardLink}:hover & {
        transform: translateX(4px);
        background: rgba(255, 255, 255, 0.2);
    }
`

export const EmptyState = styled.div`
    text-align: center;
    padding: 60px 20px;
    color: ${(props) => props.theme.name === 'dark' ? '#bdc3c7' : '#7f8c8d'};

    h2 {
        font-size: 24px;
        margin: 0 0 10px 0;
        color: ${(props) => props.theme.name === 'dark' ? '#ecf0f1' : '#2c3e50'};
    }

    p {
        font-size: 16px;
        margin: 0;
        opacity: 0.8;
    }
`
