const { Extra } = require('telegraf')

const ALL_USERS = process.env.ALL_USERS.split(',')

const use = bot => {
  bot.hears([
    /@everyoneqbdbot/i, /@geral/i, /@atencao/i
  ], ctx => {

    const formatedUsers = ALL_USERS.users.join(' ')
    const message = `${formatedUsers} ${finalGroup.tag}`

    return ctx.reply(
      message,
      Extra.inReplyTo(ctx.message.message_id)
    )
  })
}

module.exports = {
  use
}
