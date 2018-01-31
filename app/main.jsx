import React from 'react';

import { ThemeProvider } from 'styled-components';
import { colors } from 'theme';

import App from 'app/app';

export default class Main extends React.Component {
    render() {
        return (
            <ThemeProvider theme={colors}>
                <App />
            </ThemeProvider>
        );
    }
}
