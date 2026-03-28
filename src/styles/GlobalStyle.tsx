import { createGlobalStyle } from "styled-components";
import normalize from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
    box-sizing: border-box;
    }

    body {
        transition: background-color 0.2s;
        background-color: ${({ theme }) => theme.colors.backgroundSecondary};
        padding: 50px 0 0 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        line-height: 1.429;
        color: black;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .not-found {
        min-height: calc(100vh - 50px);
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .not-found__container {
        text-align: center;
        padding: 40px;
        color: white;
    }

    .not-found__title {
        font-size: 120px;
        font-weight: 700;
        margin: 0 0 20px 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .not-found__text {
        font-size: 24px;
        margin: 0 0 30px 0;
        opacity: 0.9;
    }

    .not-found__link {
        display: inline-block;
        padding: 12px 30px;
        background-color: white;
        color: #764ba2;
        text-decoration: none;
        border-radius: 25px;
        font-weight: 700;
        font-size: 16px;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        &:active {
            transform: translateY(0);
        }
    }
`