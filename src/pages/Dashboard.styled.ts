import styled from 'styled-components'

export const DashboardWrapper = styled.div`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px 20px;
`

export const DashboardTitle = styled.h1`
    font-size: 28px;
    font-weight: 700;
    color: ${(props) => (props.theme.name === 'dark' ? '#ecf0f1' : '#2c3e50')};
    margin: 0 0 30px 0;
    text-align: center;
`

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

export const StatCard = styled.div`
    background: ${(props) => props.theme.colors.backgroundPrimary};
    border-radius: 16px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
`

export const StatCardIcon = styled.div<{ $color: string }>`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${(props) => props.$color}20;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 32px;
        height: 32px;
        color: ${(props) => props.$color};
    }
`

export const StatCardValue = styled.div`
    font-size: 36px;
    font-weight: 700;
    color: ${(props) => (props.theme.name === 'dark' ? '#ecf0f1' : '#2c3e50')};
`

export const StatCardLabel = styled.div`
    font-size: 14px;
    color: ${(props) => (props.theme.name === 'dark' ? '#95a5a6' : '#7f8c8d')};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`

export const ChartsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const ChartCard = styled.div`
    background: ${(props) => props.theme.colors.backgroundPrimary};
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`

export const ChartTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: ${(props) => (props.theme.name === 'dark' ? '#ecf0f1' : '#2c3e50')};
    margin: 0 0 20px 0;
    text-align: center;
`

export const ChartWrapper = styled.div`
    width: 100%;
    min-height: 300px;

    .recharts-text {
        font-size: 12px;
    }

    .recharts-tooltip-cursor {
        fill: ${(props) => (props.theme.name === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)')};
    }
`
