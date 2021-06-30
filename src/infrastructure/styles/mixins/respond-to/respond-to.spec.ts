import { toMatchSnapshot, functionImportTest } from '@utils';
import { respondToMin, respondToMax } from './respond-to.mixin';

describe('respondToMin Mixin', () => {
  functionImportTest(respondToMin.large);
  toMatchSnapshot(() => respondToMin.large`background-color: red;`);
});

describe('respondToMax Mixin', () => {
  functionImportTest(respondToMax.large);
  toMatchSnapshot(() => respondToMax.large`background-color: red;`);
});
