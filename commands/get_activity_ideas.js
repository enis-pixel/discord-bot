const { SlashCommandBuilder } = require("discord.js");

const randomActivities = async () => {
  const response = await fetch("https://www.boredapi.com/api/activity");
  const data = await response.json();
  return data.activity;
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName("get_activity_ideas")
    .setDescription(
      "Find something to do by getting suggestions for random activities.!"
    ),
  async execute(interaction) {
    const activity = await randomActivities();
    if (activity) {
      await interaction.reply(activity);
    } else {
      await interaction.reply(
        "Es tut mir leid, es konnte keine Aktivität gefunden werden."
      );
    }
  },
};
