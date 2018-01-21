import createTheme from 'styled-components-theme';

import { recursiveMap, differ } from './helpers';
import colors from './colors';

const theme = {
    colors,
};

export default recursiveMap(theme, differ);
