export async function sendTelegramMessage(message) {
  try {
    const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;
    const BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    
    if (!BOT_TOKEN || !CHAT_ID) {
      throw new Error("Telegram environment variables are missing.");
    }

    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      throw new Error(`Telegram API Error: ${data.description}`);
    }

    return data;
  } catch (error) {
    console.error("Telegram Error:", error);
    throw error;
  }
}
