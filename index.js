const { Telegraf } = require('telegraf');

const BOT_TOKEN = '8212460792:AAFDkm-33geDjip3QEAVjv-CI10Oc-c3RR0';
const ADMIN_ID = 248862140;

let AFFILIATE_URL = 'https://www.vantage-mkts.com/ru/open-live-account/?affid=MTY1MDI3NjY=';

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('🚀 Vantage Markets', {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Открыть счёт', url: AFFILIATE_URL }]
      ]
    }
  });
});

bot.command('setlink', (ctx) => {
  if (ctx.from.id !== ADMIN_ID) {
    return ctx.reply('❌ Только для админа');
  }
  const args = ctx.message.text.split(' ');
  if (args[1]) {
    AFFILIATE_URL = args[1];
    ctx.reply(`✅ Обновлено!\n🔗 ${AFFILIATE_URL}`);
  } else {
    ctx.reply('❌ Пиши: /setlink https://ссылка.com');
  }
});

bot.command('link', (ctx) => {
  if (ctx.from.id !== ADMIN_ID) return;
  ctx.reply(`Текущая:\n🔗 ${AFFILIATE_URL}`);
});

bot.launch();

console.log('🤖 Vantage Affiliate Bot запущен!');
