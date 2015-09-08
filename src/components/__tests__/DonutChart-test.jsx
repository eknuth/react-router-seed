import React from 'react/addons';
import { expect } from 'chai';

let { TestUtils } = React.addons;

import DonutChart from '../DonutChart'

describe('Rendering', () =>  {
  let donut = TestUtils.renderIntoDocument(
     <DonutChart />
   );
   let donutElem = React.findDOMNode(donut);
   it('Should render the menu items', () => {
      expect(donutElem).to.equal(2);
  });
})
