// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

  if(command === "tbp1") {
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  
    "embed": {
    "title": "__**Territory Battle - PHASE 1**__",
    "description": "@everyone",
    "url": "",
    "color": 16777215,
    
    "thumbnail": {
      "url": "https://vignette3.wikia.nocookie.net/banthapedia/images/e/ea/Snowspeeder.jpg/revision/latest?cb=20090930205929"
    },
    "image": {
      "url": ""
    },
    "author": {
      "name": message.member.displayName,
      "url": "",
      "icon_url": message.author.avatarURL
    },
    "fields": [
      
      {
        "name": "PERSOS",
        "value": "1. Remplissez les pelotons en premier\n2. Faites le Combat Spécial.\n3. Faites tous vos Combat Missions __le plus tot possible!__"
      },
	  {
        "name": "__Une fois les combats termine__",
        "value": "-Vos combats finis, vous pouvez deployer __EN BAS__ **jusqu'a 34M maximum!!!**\n-Quand on atteint 34M, le reste deploie __au millieu__!"
      }
      
    ]
    }
    });
  }
  
  if(command === "tbp2") {
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  
    "embed": {
    "title": "__**Territory Battle - PHASE 2**__",
    "description": "@everyone",
    "url": "",
    "color": 16777215,
    
    "thumbnail": {
      "url": "https://vignette3.wikia.nocookie.net/banthapedia/images/e/ea/Snowspeeder.jpg/revision/latest?cb=20090930205929"
    },
    "image": {
      "url": ""
    },
    "author": {
      "name": message.member.displayName,
      "url": "",
      "icon_url": message.author.avatarURL
    },
    "fields": [
      
      {
        "name": "PERSOS",
        "value": "1. Remplissez les pelotons en premier\n2. Faites le Combat Spécial.\n3. Faites tous vos Combat Missions __le plus tot possible!__"
      },
	  {
        "name": "__Une fois les combats termine__",
        "value": "-Vos combats finis, vous pouvez deployer __EN BAS__ **jusqu'a 34M maximum!!!**\n-Quand on atteint 34M, le reste deploie __au millieu__!"
      }
      
    ]
    }
    });
  }
   if(command === "tbp3") {
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  
    "embed": {
    "title": "__**Territory Battle - PHASE 3**__",
    "description": "@everyone",
    "url": "",
    "color": 16777215,
    
    "thumbnail": {
      "url": "https://vignette3.wikia.nocookie.net/banthapedia/images/e/ea/Snowspeeder.jpg/revision/latest?cb=20090930205929"
    },
    "image": {
      "url": ""
    },
    "author": {
      "name": message.member.displayName,
      "url": "",
      "icon_url": message.author.avatarURL
    },
    "fields": [
      
      {
        "name": "__SHIP__",
        "value": "1. Remplissez les pelotons __sauf ceux avec le FALCON MILLENIUM__\n2. Faites votre combat\n3. Vous pouvez deployer tous vos ships ensuite."
      },
	  {
        "name": "__PERSOS__",
        "value": "1. Remplissez les pelotons\n2. Faite la Special Mission\n3. Faites tous vos Combat Missions __le plus tot possible!__"
      },
	  {
        "name": "__Une fois les combats termine__",
        "value": "-Vous pouvez deployer __EN BAS__ **jusqu'a 43M maximum!!!**\n-Le 43M atteint, le reste deploie __au millieu__!"
      }
      
    ]
    }
    });
	}

	if(command === "tbp4") {
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  
    "embed": {
    "title": "__**Territory Battle - PHASE 4**__",
    "description": "@everyone",
    "url": "",
    "color": 16777215,
    
    "thumbnail": {
      "url": "https://vignette3.wikia.nocookie.net/banthapedia/images/e/ea/Snowspeeder.jpg/revision/latest?cb=20090930205929"
    },
    "image": {
      "url": ""
    },
    "author": {
      "name": message.member.displayName,
      "url": "",
      "icon_url": message.author.avatarURL
    },
    "fields": [
      
      {
        "name": "__SHIP__",
        "value": "1. Remplissez les pelotons __sauf ceux avec le FALCON MILLENIUM__\n2. Faites votre combat\n3. Vous pouvez deployer tous vos ships ensuite."
      },
	  {
        "name": "__PERSOS__",
        "value": "1. Remplissez les pelotons\n2. Faite la Special Mission\n3. Faites tous vos Combat Missions __le plus tot possible!__"
      },
	  {
        "name": "__Une fois les combats termine__",
        "value": "-Vous pouvez deployer __EN BAS__ **jusqu'a 53M maximum!!!**\n-Le 53M atteint, le reste deploie __au millieu__!"
      }
      
    ]
    }
    });
	}
	
	if(command === "tbp5") {
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  
    "embed": {
    "title": "__**Territory Battle - PHASE 5**__",
    "description": "@everyone",
    "url": "",
    "color": 16777215,
    
    "thumbnail": {
      "url": "https://vignette3.wikia.nocookie.net/banthapedia/images/e/ea/Snowspeeder.jpg/revision/latest?cb=20090930205929"
    },
    "image": {
      "url": ""
    },
    "author": {
      "name": message.member.displayName,
      "url": "",
      "icon_url": message.author.avatarURL
    },
    "fields": [
      
      {
        "name": "__SHIP__",
        "value": "1. Remplissez les pelotons __sauf ceux avec le **FALCON MILLENIUM** ou le **KYLO REN** ship__\n2. Faites votre combat\n3. Vous pouvez deployer tous vos ships ensuite."
      },
	  {
        "name": "__PERSOS__",
        "value": "1. Remplissez les pelotons __sauf ceux avec les Ewoks recents__\n2. Faite la Special Mission\n3. Faites tous vos Combat Missions __le plus tot possible!__"
      },
	  {
        "name": "__Une fois les combats termine__",
        "value": "-Vous pouvez deployer __EN BAS__ **jusqu'a 32M maximum!!!**\n-Le 32M atteint, le reste deploie __au millieu__!"
      }
      
    ]
    }
    });
	}
	
	if(command === "tbp61") {
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  
    "embed": {
    "title": "__**Territory Battle - PHASE 6 - PARTIE 1**__",
    "description": "@everyone\n\n**-AUCUN COMBATS AU MILLIEU OU EN BAS** tant qu'on a pas complete tous les pelotons possibles (tous ceux qui ne demande pas de **FALCON MILLENIUM**, de **KYLO REN** ship ou les derniers EWOKS)!!\n-Les bonus de ces pelotons sont directement dans cette phase puisque c'est la derniere, il faut **ETRE RIGOUREUX!**",
    "url": "",
    "color": 16777215,
    
    "thumbnail": {
      "url": "https://vignette3.wikia.nocookie.net/banthapedia/images/e/ea/Snowspeeder.jpg/revision/latest?cb=20090930205929"
    },
    "image": {
      "url": ""
    },
    "author": {
      "name": message.member.displayName,
      "url": "",
      "icon_url": message.author.avatarURL
    },
    "fields": [
      
      {
        "name": "__SHIP__",
        "value": "1. Remplissez les pelotons __sauf ceux avec le **FALCON MILLENIUM** ou le **KYLO REN** ship__\n2. Faites votre combat\n3. Vous pouvez deployer tous vos ships ensuite."
      },
	  {
        "name": "__PERSOS__",
        "value": "Remplissez les pelotons possibles a terminer seulement et **vous attendez les instructions d'un officier pour donner le Go pour les Combats!!!**"
      },
	  {
        "name": "__Une fois les combats termine__",
        "value": "-Vous pouvez deployer __EN BAS__ **jusqu'a 32M maximum!!!**\n-Le 32M atteint, le reste deploie __au millieu__!"
      }
      
    ]
    }
    });
	}
  
    if(command === "tbp62") {
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  
    "embed": {
    "title": "__**Territory Battle - PHASE 6 - PARTIE 2**__",
    "description": "@everyone",
    "url": "",
    "color": 16777215,
    
    "thumbnail": {
      "url": "https://vignette3.wikia.nocookie.net/banthapedia/images/e/ea/Snowspeeder.jpg/revision/latest?cb=20090930205929"
    },
    "image": {
      "url": ""
    },
    "author": {
      "name": message.member.displayName,
      "url": "",
      "icon_url": message.author.avatarURL
    },
    "fields": [
      
      {
        "name": "Les pelotons sont termines!",
        "value": "1. Faite la Special Mission\n2. Faites tous vos Combat Missions __le plus tot possible__!"
      },
	  {
        "name": "__Une fois les combats termine__",
        "value": "-Vous pouvez deployer __EN BAS__ **jusqu'a 50M maximum!!!**\n-Le 50M atteint, le reste deploie __au millieu__!"
      }
      ]
    }
    });
	}
  
   if(command === "rancor") {
	   let day1 = args[0];
	   let day2 = args[1];
	   let sendto = args[2];
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  
    "embed": {
    "title": "__RAID RANCOR__",
    "description": `${sendto}\n`,
    "url": "",
    "color": 13671746,
    
    "thumbnail": {
      "url": "https://swgoh.gg/static/img/assets/tex.charui_rancor.png"
    },
    "image": {
      "url": ""
    },
    "author": {
      "name": message.member.displayName,
      "url": "",
      "icon_url": message.author.avatarURL
    },
    "fields": [
      
      {
	  "name": `${day1}`,
        "value": "Inscription a __**0 degat**__"
      },
	  {
	  "name": `${day2} 20h00`,
        "value": "RAID"
      }
      
    ]
	}
	});
  }
  
   if(command === "aath") {
	   let day1 = args[0];
	   let day2 = args[1];
	   let pod1 = args[2];
	   let pod2 = args[3];
	   let pod3 = args[4];
    message.delete().catch(O_o=>{}); 
    message.channel.send({
  
    "embed": {
    "title": "__RAID AAT HEROIC__",
    "description": `@everyone\n\nDernier podiums: ${pod1}, ${pod2}, ${pod3}\nCAP = 3,5 millions`,
    "url": "",
    "color": 3824016,
    
    "thumbnail": {
      "url": "https://swgoh.gg/static/img/assets/tex.charui_aat_body.png"
    },
    "image": {
      "url": ""
    },
    "author": {
      "name": message.member.displayName,
      "url": "",
      "icon_url": message.author.avatarURL
    },
    "fields": [
      
      {
	  "name": `${day1}`,
        "value": "Inscription a __**0 degat**__"
      },
	  {
	  "name": `${day2} 20h15`,
        "value": "RAID"
      }
      
    ]
	}
	});
  }
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({count: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(config.token);