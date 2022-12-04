import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "_token_"
);

gateway.on("message", (m) => {
  if (m.channel_id === "_Channel_ID_") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };
    client.sendWebhook(
      "_Webhook_URL_",
      content
    );
  }
})
