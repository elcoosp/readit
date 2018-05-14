const badgesDictionnary = require('./badgesDictionnary')

const inputOrUndefined = (
  name,
  message = `Enter the ${name} of your repo, or press enter`
) => ({
  type: 'input',
  name,
  message,
  default: undefined
})
const inputOrUndefinedSection = name =>
  inputOrUndefined(name, `Custom ${name} section, or press enter`)

module.exports = [
  {
    type: 'input',
    name: 'ownerRepoPath',
    validate: d => d.includes('/'),
    message: 'Enter your repository adress formatted like this {owner}/{repo}',
    filter: d => d.trim()
  },
  inputOrUndefined('logoUrl'),
  {
    type: 'checkbox',
    name: 'badges',
    message: 'Select the badges you want on your repo',
    choices: Object.keys(badgesDictionnary).reduce(
      (acc, name) => [...acc, { name }],
      []
    )
  },
  ...['description', 'installation', 'usage', 'support', 'contributing'].reduce(
    (acc, v) => acc.concat(inputOrUndefinedSection(v)),
    []
  )
]
