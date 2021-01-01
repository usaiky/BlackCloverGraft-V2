module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande**:x:.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('**Veuillez mentionner le membre à bannir.**')
        if (member.id === message.guild.ownerID) return message.channel.send('**Vous ne pouvez pas bannir le propriétaire du serveur**:x:.')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('**Vous ne pouvez pas Bannir ce membre**:x:')
        if (!member.bannable) return message.channel.send('**Le bot ne peut pas bannir ce membre**:x:.')
        const reason = args.slice(1).join(' ') || '**Aucune raison fournie**:x:'
        await member.ban({reason})
        message.channel.send(`${member.user.tag} a été banni :white_check_mark:`)
    },
    name: 'ban',
    guildOnly: true
}