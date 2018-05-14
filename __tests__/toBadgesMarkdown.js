const toBadgesMarkdown = require('../src/toBadgesMarkdown')
const badgesDictionnary = require('../src/badgesDictionnary')
test('should return formatted badges in markdown', () => {
  expect(
    toBadgesMarkdown(badgesDictionnary, 'some/repo', [
      'Documentation',
      'Travis CI'
    ])
  ).toEqual(
    `[![Inline docs](http://inch-ci.org/github/some/repo.svg?branch=master)](http://inch-ci.org/github/some/repo)\n[![Build Status](https://travis-ci.org/some/repo.png?branch=master)](https://travis-ci.org/some/repo)\n`
  )
})
