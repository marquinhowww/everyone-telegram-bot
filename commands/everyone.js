const { Extra } = require('telegraf')

const use = bot => {
  bot.hears([
    /@everyoneqbdbot/i, /@geral/i, /@atencao/i
  ], ctx => {
    const message = `${ALL_USERS} #salvegeral`

    return ctx.reply(
      message,
      Extra.inReplyTo(ctx.message.message_id)
    )
  })
}

module.exports = {
  use
}
