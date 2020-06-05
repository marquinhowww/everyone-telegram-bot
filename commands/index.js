const everyone = require('./everyone')

const commands = [
  everyone
]

const configure = bot => {
  for (const { use } of commands) {
    use(bot)
  }
}

module.exports = {
  configure
}
