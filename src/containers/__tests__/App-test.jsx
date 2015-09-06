import React, { render } from 'react/addons';
import { expect } from 'chai';
import stubContext from 'react-stub-context'
import App from '../App'

let { TestUtils } = React.addons

function noop() {}
let Router = {
  makeHref: sinon.stub().returns('test'),
  isActive: sinon.stub().returns(true)
}

AppWithStubbedContext = stubContext(App, { router: Router })


describe('App', () => {
  let div = undefined
   beforeEach(() => {
     div = document.createElement('div')
   })

   afterEach(() => {
     React.unmountComponentAtNode(div);
   })


  it('should test', (done) => {
    render((<AppWithStubbedContext />), div, () => {
      // expect(div).to.equal('test')
    })
    done()
  })
})
