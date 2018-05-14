const badgesDictionnary = {
  Documentation: ownerRepoPath =>
    `[![Inline docs](http://inch-ci.org/github/${ownerRepoPath}.svg?branch=master)](http://inch-ci.org/github/${ownerRepoPath})`,
  'Travis CI': ownerRepoPath =>
    `[![Build Status](https://travis-ci.org/${ownerRepoPath}.png?branch=master)](https://travis-ci.org/${ownerRepoPath})`,
  'NPM Version': ownerRepoPath =>
    `[![Node version](https://img.shields.io/node/v/${
      ownerRepoPath.split('/')[1]
    }.svg?style=flat)](http://nodejs.org/download/)`,
  'NPM statistics': ownerRepoPath => {
    const repoName = ownerRepoPath.split('/')[1]
    return `[![https://nodei.co/npm/${repoName}.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/${repoName}.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/${repoName})`
  },
  Contributing: ownerRepoPath =>
    `[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/${ownerRepoPath}/issues)`,
  Standard: ownerRepoPath =>
    `[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)`,
  Snyk: ownerRepoPath =>
    `[![Known Vulnerabilities](https://snyk.io/test/github/${ownerRepoPath}/badge.svg)](https://snyk.io/test/github/${ownerRepoPath})`
}

module.exports = badgesDictionnary
