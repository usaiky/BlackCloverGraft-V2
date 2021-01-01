const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande :x:**.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Commandes Black Clover Craft')
            .setTitle('Les commandes de *Black Clover Craft*')
            .setColor('RANDOM')
            .addField('***ban***', '!ban @name', )
            .addField('***Kick***', '!kick @name', )
            .addField('***Mute***', '!mute @name', )
            .addField('***Unmute***', '!unmute @name', )
            .addField('***Infractions***', '!infractions @name', )
            .addField('***Warn***', '!warn @name', )
            .addField('***Unwarn***', '!unwarn @name', )
            .addField('***Clear***', '!clear number', )
            .addField('***Tempmute***', '!tempmute  @name [temps-d=day/m=minute/s=seconde]', )
            .addField('***Tempban***', '!tempban  @name [temps-d=day/m=minute/s=seconde]', )
            .setAuthor('Black Clover Craft', 'https://cdn.discordapp.com/attachments/769499543095738379/793209568514932736/icon.png',)
            .setThumbnail('https://cdn.discordapp.com/attachments/769499543095738379/793209568514932736/icon.png')
            .setFooter('By Usaiky#7565', 'https://cdn.discordapp.com/attachments/769499543095738379/793209568514932736/icon.png')
            .setTimestamp())
            
    },
    name: 'help'
}