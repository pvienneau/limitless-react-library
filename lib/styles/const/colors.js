import map from 'lodash.map';

import * as palette from './palette';

export const COLORS = Object.keys(palette).reduce((colors, key) => {
  colors[key] = {
    500: palette[key]
  };

  return colors;
}, {});
