
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
    let expectedElement = <div className="container">
        <div className="about content">
          <h1>About Weworkhostels</h1>

          <h2>Hostels</h2>
          <p>Find amazing volunteers for your backpacker hostel. Offer a work exchange position at your hostel!</p>

          <h2>Volunteers</h2>
          <p>Find great places to travel to, live, and work! Check out the volunteer positions posted by hostels.</p>
        </div>

      </div>
    expect(actualElement).toEqualJSX(expectedElement)
  })
})