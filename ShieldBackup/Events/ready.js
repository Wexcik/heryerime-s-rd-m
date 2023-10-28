const moment = require('moment');
let {MessageEmbed} = require('discord.js');
require("moment-duration-format");
let sunucuayar = require("../models/sunucuayar");
const client = global.client;
let conf = client.ayarlar
const { EmbedBuilder, ActivityType } = require("discord.js")

module.exports = async client => {
  try {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  
    const { joinVoiceChannel, getVoiceConnection} = require("@discordjs/voice");

    const connection = getVoiceConnection(client.ayarlar.guildID);
    if (connection) return;
    setInterval(async () => { 
    const VoiceChannel = client.channels.cache.get(client.ayarlar.botSesID);
    if (VoiceChannel) { joinVoiceChannel({
      channelId: VoiceChannel.id,
      guildId: VoiceChannel.guild.id,
      adapterCreator: VoiceChannel.guild.voiceAdapterCreator,
      selfDeaf: true
    })}},
    5000);
  
    let activities = client.ayarlar.readyFooter, i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`,
      type: ActivityType.Streaming,
      url: "https://www.twitch.tv/wex"}), 10000);
       } catch (err) { }
  
       client.rolbackup();
       client.kanalbackup();
       setInterval(async () => {
           await client.rolbackup();
           await client.kanalbackup();
       }, 1000 * 60 * 30)
 
 

};
