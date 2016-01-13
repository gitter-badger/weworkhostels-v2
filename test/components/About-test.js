
import React from 'react'
import expect from 'expect'
import {createRenderer} from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import About from '../../src/client/js/components/About.js'

describe('About', () => {
  it('works', () => {
    let renderer = createRenderer()
    renderer.render(<About />)
    let actualElement = renderer.getRenderOutput()
    let expectedElement = <div className="about"><h1>HELLO I AM ABOUT</h1></div>
    expect(actualElement).toEqualJSX(expectedElement)
  })
})