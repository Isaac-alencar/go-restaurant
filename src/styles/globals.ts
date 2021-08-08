import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --red: #C72828;
    --yellow: #FFB84D;
    --titles: #3D3D4D;
    --texts: #6C6C80;
    --green: #39B100;
    --green-available: #39B100;
    --green-accent: #41C900;
    --red-alert: #C72828;
    --white: #FFFFFF;
    --gray-card-background: #F0F0F5;
    --gray-footer-card: #E4E4EB;
    --gray-inputs: #B7B7CC;
  }

`

export { GlobalStyles };