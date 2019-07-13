import assert from 'assert'

import Page from '../pages/page'

describe('sample', function () {
  it('Should load the webpage', function () {
    const page = new Page('https://www.google.nl/')
    page.navigateTo()
    assert(page.title.includes('Google'))
  })
})
