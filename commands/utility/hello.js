const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Replies the user with Hello!'),
    async execute(interaction) {
        if(interaction.member.nickname != null){
            await interaction.reply(`Hi, ${interaction.member.nickname}! `);
        } else {
            await interaction.reply(`Hi, ${interaction.user.username}! `);
        }
        
    },
};