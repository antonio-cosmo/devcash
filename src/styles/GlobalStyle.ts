import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus{
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']} ;
    }
  }


  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{
    width: 100%;
    max-width: 500px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;


    @media (max-width: 650px) {
      width: 80%;
    }
  }

  .react-close-modal {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: none;
    background: transparent;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.8);
    }
  }
`
