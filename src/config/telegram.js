// Telegram Bot sozlamalari
// Bot token va Chat ID ni .env faylidan yoki to'g'ridan-to'g'ri shu yerdan kiritishingiz mumkin

export const TELEGRAM_CONFIG = {
  // @BotFather dan olingan bot tokeni
  BOT_TOKEN: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '8949038794:AAGFdZjyrt9i-9x25qtCNNkBsiwJOKLlQ0g',
  
  // Arizalar tushadigan Telegram kanal yoki guruh ID si
  CHAT_ID: import.meta.env.VITE_TELEGRAM_CHAT_ID || '-1004489467876',
}

/**
 * Arizani Telegram kanal yoki guruhga yuborish funksiyasi
 */
export async function sendLeadToTelegram({ name, phone, pharmacyName, branchCount, language = 'uz' }) {
  const token = TELEGRAM_CONFIG.BOT_TOKEN
  const chatId = TELEGRAM_CONFIG.CHAT_ID

  const timeStr = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })

  const text = `🔔 *YANGI ARIZA — NYRONX DEMO*
━━━━━━━━━━━━━━━━━━━━
👤 *Mijoz:* ${name}
📞 *Telefon:* [${phone}](tel:${phone.replace(/\s+/g, '')})
🏥 *Dorixona:* ${pharmacyName}
🏢 *Filiallar soni:* ${branchCount} ta
🌐 *Sayt tili:* ${language.toUpperCase()}
⏰ *Vaqti:* ${timeStr}
━━━━━━━━━━━━━━━━━━━━
🚀 _Nyronx Landing Page orqali yuborildi_`

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    })

    const data = await res.json()
    return { ok: data.ok, data }
  } catch (error) {
    console.error('Telegramga yuborishda xatolik:', error)
    return { ok: false, error }
  }
}
