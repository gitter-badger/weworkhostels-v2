
import React from 'react'
import expect from 'expect'
import {createRenderer} from 'react-addons-test-utils'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)

import About from '../About.js'

describe('About', () => {
  it('works', () => {
    let renderer = createRenderer()
    renderer.render(<About />)
    let actualElement = renderer.getRenderOutput()
    let expectedElement = <div> HELLO I AM ABOUT</div>
    expect(actualElement).toEqualJSX(expectedElement)
  })
})