module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande**:x:')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('**Veuillez mentionner le membre à exclure**.')
        if (member.id === message.guild.ownerID) return message.channel.send('**Vous ne pouvez pas exclure le propriétaire du serveur**:x:')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('**Vous ne pouvez pas exclure ce membre**:x:')
        if (!member.kickable) return message.channel.send('**Le bot ne peut pas exclure ce membre**:x:')
        const reason = args.slice(1).join(' ') || '**Aucune raison fournie**:x:'
        await member.kick(reason)
        message.channel.send(`${member.user.tag} **a été exclu** :white_check_mark:`)
    },
    name: 'kick',
    guildOnly: true
}