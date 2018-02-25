import chaiDateString from 'chai-datetime'

import { chaiDateValues } from 'utils/chai'

chai
  .use(chaiDateString)
  .use(chaiDateValues)
