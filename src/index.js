#!/usr/bin/env node
require('babel-polyfill')
const program = require('commander')
const inquirer = require('inquirer')
const readMeQuestions = require('./readMeQuestions')
const templateReadMe = require('./templateReadMe')
const fs = require('fs')

const promptAndProcess = readMeQuestions => async () => {
  const responses = await inquirer.prompt(readMeQuestions)
  const readme = templateReadMe(responses)

  const writeStream = fs.createWriteStream(`${process.cwd()}/README.md`)
  writeStream.write(readme)
  writeStream.end()
}

program
  .version('0.1.0')
  .command('init')
  .action(promptAndProcess(readMeQuestions))

program.parse(process.argv)
