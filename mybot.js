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

  if(command === "yoda") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayYoda = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    //message.channel.send(sayYoda);

	const embed = new Discord.RichEmbed()
    //.setTitle("__**Territory Battle - PHASE 5**__")
	.setDescription(sayYoda)
	//.addBlankField(true)
	.setAuthor("Yoda", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPjfUR7rA2_VPgnpJ-Kot49lwwC9umwGcZDysDPPnwqUz4qc64")
	.setColor(0x2CA705)
	.setThumbnail("https://swgoh.gg/static/img/assets/tex.charui_yodagrandmaster.png")
    message.channel.send({embed});

  }	
	
  if(command === "tbp1") {
    message.delete().catch(O_o=>{});
	message.channel.send("__**Territory Battle - PHASE 1**__ @everyone",{
    embed: {
    title: "\n",
    description: "\n",
    url: "",
    color: 16777215,

    thumbnail: {
      url: "https://vignette3.wikia.nocookie.net/banthapedia/images/e/ea/Snowspeeder.jpg/revision/latest?cb=20090930205929"
    },
    image: {
      url: ""
    },
    author: {
      name: message.member.displayName,
      url: "",
      icon_url: message.author.avatarURL
    },
    fields: [

      {
        name: "__**PERSOS**__",
        value: "1. Remplissez les pelotons en premier\n2. Faites le Combat Sp\u00e9cial.\n3. Faites tous vos Combat Missions!\n4. Vous pouvez d\u00e9ployer vos unit\u00e9s"
      },

    ],
	footer: {
      text: "Bonne guerre et amusez-vous"
    }
    }
    });
  }

  if(command === "tbp2") {
    message.delete().catch(O_o=>{});

    message.channel.send("__**Territory Battle - PHASE 2**__ @everyone",{

    "embed": {
    "title": "\n",
    "description": "\n",
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
        "name": "__**PERSOS**__",
        "value": "1. Remplissez les pelotons en premier\n2. Faites le Combat Sp\u00e9cial.\n3. Faites tous vos Combat Missions __le plus t\u00f4t possible!__"
      },
	  {
        "name": "__Une fois les combats termin\u00e9__",
        "value": "-Vous pouvez d\u00e9ployer __EN BAS__ **jusqu'\u00e0 34M maximum!!!**\n-Quand on atteint 34M, le reste d\u00e9ploie __en haut__!"
      }

    ]
    }
    });
  }
   if(command === "tbp3") {
    message.delete().catch(O_o=>{});

    message.channel.send("__**Territory Battle - PHASE 3**__ @everyone",{

    "embed": {
    "title": "\n",
    "description": "\n",
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
        "name": "__**SHIP**__",
        "value": "1. Remplissez les pelotons\n2. Faites votre combat\n3. Vous pouvez d\u00e9ployer tous vos ships ensuite."
      },
	  {
        "name": "__**PERSOS**__",
        "value": "1. Remplissez les pelotons\n2. Faite la Special Mission\n3. Faites tous vos Combat Missions __le plus t\u00f4t possible!__"
      },
	  {
        "name": "__Une fois les combats termin\u00e9__",
        "value": "-Vous pouvez d\u00e9ployer __EN BAS__ **jusqu'\u00e0 43M maximum!!!**\n-Le 43M atteint, le reste d\u00e9ploie __au milieu__!"
      }

    ]
    }
    });
	}

	if(command === "tbp4") {
    message.delete().catch(O_o=>{});

    message.channel.send("__**Territory Battle - PHASE 4**__ @everyone",{

    "embed": {
    "title": "\n",
    "description": "\n",
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
        "name": "__**ATTENTION!**__",
        "value": "Une fois la 2e \u00e9toiles obtenu au milieu, ne plus faire **AUCUN** combat au milieu!"
      },
      {
        "name": "__**SHIP**__",
        "value": "1. Remplissez les pelotons __sauf ceux IMPOSSIBLE (nouveaux vaisseaux)__\n2. Faites votre combat\n3. Vous pouvez d\u00e9ployer tous vos ships ensuite."
      },
	  {
        "name": "__**PERSOS**__",
        "value": "1. Remplissez les pelotons\n2. Faite la Sp\u00e9cial Mission\n3. Faites tous vos Combat Missions __le plus t\u00f4t possible!__\nNB. Si vous voyez que nous avons atteint 2* au milieu, ne faites plus de combat au milieu"
      },
	  {
        "name": "__Une fois les combats termin\u00e9__",
        "value": "-Vous pouvez d\u00e9ployer __EN BAS__\n-__AUCUN__ d\u00e9ploiement au milieu!"
      }

    ]
    }
    });
	}

	if(command === "tbp5") {
    message.delete().catch(O_o=>{});

    message.channel.send("__**Territory Battle - PHASE 5**__ @everyone",{

    "embed": {
    "title": "\n",
    "description": "\n",
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
        "name": "__**SHIP**__",
        "value": "1. Remplissez les pelotons __sauf ceux avec le **FO SF TIE FIGHTER**__\n2. Faites votre combat\n3. Vous pouvez d\u00e9ployer tous vos ships ensuite."
      },
	  {
        "name": "__**PERSOS**__",
        "value": "1. Remplissez les pelotons __sauf ceux avec Rose et Holdo__\n2. Si possible, attendez que les pelotons soit termin\u00e9.\n3. Faite la Sp\u00e9cial Mission\n4. Faites tous vos Combat Missions __le plus t\u00f4t possible!__"
      }

    ]
    }
    });
	}

	if(command === "tbp52") {
    message.delete().catch(O_o=>{});
	//message.channel.send("@everyone TB: PHASE 5");
    const embed = new Discord.RichEmbed()
    .setTitle("__**Territory Battle - PHASE 5**__")
	.setDescription("@everyone &euml")
	//.addBlankField(true)
	.setAuthor(message.member.displayName, message.author.avatarURL)
	.setColor(16777215)

    .setThumbnail("https://vignette3.wikia.nocookie.net/banthapedia/images/e/ea/Snowspeeder.jpg/revision/latest?cb=20090930205929")
    //.setTimestamp()
	.addField("__**SHIP**__", "1. Remplissez les pelotons __sauf ceux avec le **FALCON MILLENIUM**, le **KYLO REN** ship ou le **TIE REAPER**__\n2. Faites votre combat\n3. Vous pouvez d\u00e9ployer tous vos ships ensuite.")
    .addField("__**PERSOS**__", "1. Remplissez les pelotons __sauf ceux avec les Ewoks recents__\n2. Faite la Special Mission\n3. Faites tous vos Combat Missions __le plus tot possible!__")
    .addField("__Une fois les combats termine__", "-Vous pouvez d\u00e9ployer __EN BAS__\n-__AUCUN__ d\u00e9ploiement au milieu!")
    message.channel.send({embed});
	}

	if(command === "tbp61") {
    message.delete().catch(O_o=>{});

    message.channel.send("__**Territory Battle - PHASE 6 - PARTIE 1**__ @everyone",{

    "embed": {
    "title": "\n",
    "description": "**-AUCUN COMBATS AU __MILIEU__ OU EN __BAS__** tant qu'on a pas compl\u00e9t\u00e9 tous les pelotons possibles\n-Les bonus de ces pelotons sont directement dans cette phase, puisque c'est la derni\u00e8re, il faut **\u00caTRE RIGOUREUX!**",
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
        "name": "__PELOTONS \u00c0 NE PAS TOUCHER__",
        "value": "Ne pas toucher au pelotons contenant les unit\u00e9s suivantes:\n-**Faucon Millenium**, **Kylo Ren Ship**, **Gauntlet**, **Tie Reaper**\n-**Nouveau Ewoks**, **Lobot**"
      },
	  {
        "name": "__SHIP__",
        "value": "1. Remplissez les pelotons\n2. Faites votre combat\n3. Vous pouvez d\u00e9ployer tous vos ships ensuite."
      },
	  {
        "name": "__PERSOS__",
        "value": "1. Remplissez les pelotons\n2. **Vous attendez les instructions d'un officier pour donner le GO pour les Combats!!!**"
      }

    ]
    }
    });
	}

    if(command === "tbp62") {
    message.delete().catch(O_o=>{});

    message.channel.send("__**Territory Battle - PHASE 6 - PARTIE 2**__ @everyone",{

    "embed": {
    "title": "\n",
    "description": "\n",
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
        "name": "Les pelotons sont termin\u00e9s!",
        "value": "1. Faite la Sp\u00e9cial Mission\n2. Faites tous vos Combat Missions __le plus t\u00f4t possible__!"
      },
	  {
        "name": "__Une fois les combats termin\u00e9s__",
        "value": "-Vous pouvez d\u00e9ployer __EN BAS__ **seulement!!!**"
      }
      ]
    }
    });
	}

   if(command === "rancor") {
	   let day1 = args[0];
	   let day2 = args[1];
    message.delete().catch(O_o=>{});

    message.channel.send("__**RAID RANCOR**__ @everyone",{

    "embed": {
    "title": "\n",
    "description": " ",
    "url": "",
    "color": 13671746,

    "thumbnail": {
      "url": "https://swgoh.gg/static/img/assets/raids/tex.guild_events_rancor.jpg"
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
		"name": `__${day1} :__`,
        "value": "Inscription \u00e0 __**0 d\u00e9gat**__",
		//"inline": true
      },
	  {
		"name": `__${day2} 20h00 :__`,
        "value": "RAID"
		//"inline": true
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
	message.channel.send(`__**RAID AAT HEROIC**__ @everyone\n	Ne doivent PAS être sur le podium: ${pod1}, ${pod2}, ${pod3}`,{

    embed: {
    title: "\n",
    description: "\n",
    url: "",
    color: 3824016,

    thumbnail: {
      url: "https://swgoh.gg/static/img/assets/raids/tex.guild_events_aat.jpg"
    },
    image: {
      url: ""
    },
    author: {
      name: message.member.displayName,
      url: "",
      icon_url: message.author.avatarURL
    },
    fields: [

      {
	  name: `__${day1} :__`,
        value: "Inscription \u00e0 __**0 d\u00e9gat**__"
      },
	  {
	  name: `__${day2} 20h15 :__`,
        value: "RAID"
      }

    ]
	}
	});
  }

  if(command === "sithh") {
    	// makes the bot say something and delete the message. As an example, it's open to anyone to use.
    	// To get the "message" itself we join the `args` back into a string with spaces:
  	const dayHour = args.join(" ");
    	// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    	message.delete().catch(O_o=>{});
    	// And we get the bot to say the thing:

	const embed = new Discord.RichEmbed()
    	//.setTitle("__**RAID SITH HEROIC**__")
	.setDescription(`${dayHour}`)
	//.addBlankField(true)
	.setAuthor(message.member.displayName, message.author.avatarURL)
	.setColor(0xa20410)
	.setThumbnail("https://swgoh.gg/static/img/assets/raids/tex.guild_events_triumvirate.jpg")
    message.channel.send(`__**RAID SITH HEROIC**__ @everyone`,{embed});

  }
  
    if(command === "sithhp1") {
    	// makes the bot say something and delete the message. As an example, it's open to anyone to use.
    	// To get the "message" itself we join the `args` back into a string with spaces:
  	const dayHour = args.join(" ");
	
    	// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    	message.delete().catch(O_o=>{});
    	// And we get the bot to say the thing:

	const embed = new Discord.RichEmbed()
    	//.setTitle("__**RAID SITH HEROIC :point_right: Phase 1 :point_left:**__")
	//.setDescription(":point_right: Phase 1 :point_left:")
	.addBlankField(true)
	.addField(":airplane:**Toujours en mode avion.**:airplane:",".\nTeam JTR,  4%+ peuvent enregistrer.\nPour plus d'infos :point_right:  <#437585712464789524>")
	//.addBlankField(true)
	.setAuthor(message.member.displayName, message.author.avatarURL)
	.setColor(0xa20410)
	.setThumbnail("https://swgoh.gg/static/img/assets/tex.charui_nihilusraid.png")
	let sithRole = message.guild.roles.get("448198255915040775");
    message.channel.send(`__**:boom: SITH HEROIC :boom: :point_right: Phase 1 :point_left:**__ @everyone`,{embed});

  }
	
    if(command === "sithhp2") {
    	// makes the bot say something and delete the message. As an example, it's open to anyone to use.
    	// To get the "message" itself we join the `args` back into a string with spaces:
  	const dayHour = args.join(" ");
	let role = guild.roles.get("451549948366946304");
	   	// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    	message.delete().catch(O_o=>{});
    	// And we get the bot to say the thing:
	
	const embed = new Discord.RichEmbed()
    	//.setTitle("__**RAID SITH HEROIC**__")
	.setDescription(`:point_right: Phase 2 :point_left:`)
	.addField("Tout le monde doit faire 2% minimum (1 million) durant cette phase.",".\nPour la tactic de P2, vous pouvez consulter ici :point_right:  <#437594040435998740>")
	//.addBlankField(true)
	.setAuthor(message.member.displayName, message.author.avatarURL)
	.setColor(0xa20410)
	.setThumbnail("https://swgoh.gg/static/img/assets/tex.charui_sionraid.png")
    message.channel.send(`__**:boom: SITH HEROIC:boom:**__ ${role}`,{embed});

  }
  
    if(command === "sithhp3") {
    	// makes the bot say something and delete the message. As an example, it's open to anyone to use.
    	// To get the "message" itself we join the `args` back into a string with spaces:
  	const dayHour = args.join(" ");
	let sithRole = message.guild.roles.get("448198255915040775");
    	// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    	message.delete().catch(O_o=>{});
    	// And we get the bot to say the thing:

	const embed = new Discord.RichEmbed()
    	//.setTitle("__**RAID SITH HEROIC**__")
	.setDescription(`:point_right: Phase 3 :point_left:`)
	.addField(":airplane:**Toujours en mode avion.**:airplane:",".\nTeam Chexmix, 4%+ vous pouvez enregistré.")
	.addField("**Lorsque Traya sera arrivée à 30%, on peut utiliser d'autre équipe pour finir P3.**","")
	//.addBlankField(true)
	.setAuthor(message.member.displayName, message.author.avatarURL)
	.setColor(0xa20410)
	.setThumbnail("https://swgoh.gg/static/img/assets/tex.charui_sionraid.png")
    message.channel.send(`__**:boom: SITH HEROIC:boom:**__ ${sithRole}`,{embed});

  }
	
  if(command === "shard") {
	   let no_shard = args[0];
	   let per_shard = args[1];

	    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
		var firstDate = new Date();
		var secondDate = new Date(2017,11,17);
		var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

	switch(per_shard){
	  case '10':
		var total_shard = 320
		break;
	  case '15':
		var total_shard = 305
		break;
	  case '25':
		var total_shard = 280
		break;
	  case '30':
		var total_shard = 250
		break;
	  case '65':
		var total_shard = 185
		break;
	  case '85':
		var total_shard = 100
		break;
	  case '100':
		var total_shard = 0
		break;
	  case '50':
		var total_shard = 280
		break;
	  case '80':
		var total_shard = 250
		break;
	  case '145':
		var total_shard = 185
		break;
	  default:
		var total_shard = 330
	}
		var shard_left = per_shard - no_shard + total_shard
		var shard_needed = Math.ceil((shard_left) / diffDays);

	if(shard_left >= 330){
		message.channel.send("Erreur, bien suivre le format: arg1 arg2 ou arg1 est le nombre de shard possédé et arg2 le nombre de shard pour débloqué. Exemple 20/85 serait écrit 20 85");
	}
	else{
	//message.channel.send(no_shard + " " + per_shard + " " + total_shard + " " + shard_left);
	message.channel.send(message.member.displayName + ", tu dois acquérir " + shard_needed + " shard/jour(" + shard_left + " restantes) pour avoir **Captain Han Solo** d'ici le 17 décembre");
	//let chan = client.channels.find("295927456404209665");
	//chan.send("Hello");
	}
  }

  var schedule = require('node-schedule');
  var date = new Date(2017, 9, 5, 11, 10, 0);
  var j = schedule.scheduleJob(date, function(){
	bot.channels.get('344164205525729282').sendMessage('Damn good!');
  });

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
