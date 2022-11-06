import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "NDA3OTIyNzMxNjQ1MDA5OTMy.GSMifh.tzyfJBKUblyC3OieOV32t_BTUStlaYPpX7ZdUA"
);

gateway.on("message", (m) => {
  if (m.channel_id === "997566696137175144") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };
    client.sendWebhook(
      "https://discord.com/api/webhooks/1038812589301432410/n3flhOTzw4XfsJq1WqkVaSOJuQPlVnymb13we66tHrCEe4dBL_4kifLNsKMnWav9ICHN",
      content
    );
  }
})