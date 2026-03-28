import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 50px;
    background-color: #4682b4;
    display: flex;
    align-items: center;
`

export const HeaderContainer = styled.div`
    max-width: 97%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const HeaderLink = styled.a<{ $active?: boolean }>`
    text-decoration: none;
    padding: 10px;
    color: ${(props) => (props.$active ? '#ffffff33' : '#fff')};
`

export const ToggleButton = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-40%);
`

export const ToggleControl = styled.button<{ $themeName: string }>`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: ${(props) => {
        switch (props.$themeName) {
            case 'dark':
                return 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
            case 'ocean':
                return 'linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)';
            case 'sunset':
                return 'linear-gradient(135deg, #6a0572 0%, #f77f00 100%)';
            default:
                return 'linear-gradient(135deg, #f39c12 0%, #e74c3c 100%)';
        }
    }};
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.15) rotate(15deg);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.9);
    }

    &:active {
        transform: scale(0.9) rotate(-10deg);
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        background: ${(props) => {
        switch (props.$themeName) {
            case 'dark':
                return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'/%3E%3C/svg%3E")`;
            case 'ocean':
                return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E")`;
            case 'sunset':
                return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM5.636 5.636a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414L5.636 7.05a1 1 0 010-1.414zM16.95 16.95a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414L16.95 18.364a1 1 0 010-1.414zM2 12a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zm16 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM5.636 18.364a1 1 0 010-1.414l1.414-1.414a1 1 0 111.414 1.414L7.05 18.364a1 1 0 01-1.414 0zM16.95 7.05a1 1 0 010-1.414l1.414-1.414a1 1 0 111.414 1.414L18.364 7.05a1 1 0 01-1.414 0z'/%3E%3Cpath d='M12 7a5 5 0 100 10 5 5 0 000-10z'/%3E%3C/svg%3E")`;
            default:
                return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z'/%3E%3Cpath d='M12 2a1 1 0 011 1v2a1 1 0 11-2 0V3a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1zM5.636 5.636a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414L5.636 7.05a1 1 0 010-1.414zM16.95 16.95a1 1 0 011.414 0l1.414 1.414a1 1 0 11-1.414 1.414L16.95 18.364a1 1 0 010-1.414zM2 12a1 1 0 011-1h2a1 1 0 110 2H3a1 1 0 01-1-1zm16 0a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM5.636 18.364a1 1 0 010-1.414l1.414-1.414a1 1 0 111.414 1.414L7.05 18.364a1 1 0 01-1.414 0zM16.95 7.05a1 1 0 010-1.414l1.414-1.414a1 1 0 111.414 1.414L18.364 7.05a1 1 0 01-1.414 0z'/%3E%3C/svg%3E")`;
        }
    }};
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        transform: translate(-50%, -50%);
        transition: transform 0.4s ease, opacity 0.3s ease;
        opacity: 0.9;
    }

    &:hover::before {
        transform: translate(-50%, -50%) ${(props) => {
        switch (props.$themeName) {
            case 'dark':
                return 'rotate(-20deg)';
            case 'ocean':
                return 'rotate(360deg)';
            case 'sunset':
                return 'rotate(-360deg)';
            default:
                return 'rotate(20deg)';
        }
    }};
    }

    &::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.3) 0%,
            transparent 70%
        );
        transform: scale(0);
        transition: transform 0.4s ease;
    }

    &:active::after {
        transform: scale(1);
    }
`