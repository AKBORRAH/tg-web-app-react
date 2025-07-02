import TelegramBot from "node-telegram-bot-api";

const token = "7827745558:AAE3AcIci_O8LRR5eHKr4Y7Bu2bH6J3J16Q"


const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id
    if(msg.text === '/start') {
        const options = {
        
        reply_markup: {
            inline_keyboard: [
                [{text: "Buy 🎁", callback_data: '/'}]
            ]
        }
    }
    await bot.sendMessage(chatId, 'Привет! Добро пожаловать в магазин 🎁', options);
    }
});