const toBadgesMarkdown = (badgesDictionnary, ownerRepoPath, badges) => {
  return badges.reduce(
    (acc, key) => (acc += badgesDictionnary[key](ownerRepoPath) + '\n'),
    ''
  )
}

module.exports = toBadgesMarkdown
