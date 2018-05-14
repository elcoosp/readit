const badgesDictionnary = require('./badgesDictionnary')
const toBadgesMarkdown = require('./toBadgesMarkdown')

const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1)

const templateReadMe = ({
  ownerRepoPath,
  logoUrl,
  badges,
  description,
  installation,
  usage,
  support,
  contributing
}) => {
  const repoName = capitalize(ownerRepoPath.split('/')[1])

  return `
  ${
  logoUrl
    ? `
<p align="center">
  <img src="${logoUrl}"/>
</p>`.trim()
    : ''
}

# ${repoName}

${toBadgesMarkdown(badgesDictionnary, ownerRepoPath, badges)}

${description || `${repoName} super repository.`}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Support](#support)
- [Contributing](#contributing)

## Installation

${installation || `\`npm i -S ${repoName.toLowerCase()}\``}

## Usage

${usage || 'Read the docs !'}

## Support

${support ||
    `Please [open an issue](https://github.com/${ownerRepoPath}/issues/new) for support.`}

## Contributing

${contributing ||
    `Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/${ownerRepoPath}/compare/).`}

`.trim()
}

module.exports = templateReadMe
