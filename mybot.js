/*
Name:		SWGOH-QF
Description:	A Discord bot for the guild SWGOH-GG
Autors:		Xalekk & Filbe Lamon
Version:	2.00.01

Change Log
2.00.01 -	!planif : Correct logic bugs + crontab bugs
		!a: Prototype for !arena
2.00.00 -	Massives changes (Try/Catch, Classes, Functions)
1.00.00 -	Original Script







Filbe Lamon's Todo:


Version 2.00


Commande RAID
Usage: !raid type jour heure podium1 podium2 podium3 message spécial

!raid r mardi 20h00
!raid a mardi 20h00 @podium1 @podium2 @podium3
!raid s mardi 20h00 @podium1 @podium2 @podium3
!raid n mardi 20h00 @Filbe Lamon#9224 @Xalekk#0763 @Peperlu#8833

Commande RAID Shortcut
!pit mardi 20h00
!aat mardi 20h00 @podium1 @podium2 @podium3
!sith mardi 20h00 @podium1 @podium2 @podium3

!pit mardi 20h00 0 0 0 Sanction particulière à @Filbe Lamon#9224, à cause du non respect du podium
!sith mardi 20h00 @podium1 @podium2 @podium3 Sanction particulière à @Filbe Lamon#9224, à cause du non respect du podium


Commande TB (lancement manuel / phase)
Usage: !tb side phase limiteDeploiement
!tb d 1
!tb l 4 12

Commande TB (Gestion des erreurs)
!tb x



Commande PLANIF (lacement planifié automatiquement / phase
Usage:!planif tb
!planif tb l 1 12
!planif tb d 1 12

PS: !planif tw sera programmé + tard











Version 2.01 - Shard rotation (Xalekk) Prototype uniquement

Cible bd mysql
@Filbe Lamon tu voudrais faire de quoi qui ferait un cycle de 3-5 personnes ou celui qui est premier le lendemain devient dernier?
Pour le pvp
Filbe Lamon - Last Thursday at 4:55 PM
1 commande de rotation de pvp?
Oui mais tu dois répondre à cette question
Si je fais ça, je dois héberger les information quelque part.
Bref jvais devoir faire 1 bd
As tu les ressources cpu ram etc pour supporter 1 bd?
Et si oui, jla fais en MySQL?
Car la c'est mon pc qui supporte ça et ye pas fiable... À long terme



Résumé de la strat
BD MySQL

commande [payout_hour] (20:30) joueur1, joueur2

la BD doit enregistrer
table #1 enregistre les informations du client, soit le serveur, le channel, le timestamp de la saisie & le timestamp du payout de la journée de saisie
table #2 les joueurs sur 1 channel, avec le # de l'ordre

ensuite INNER JOIN des 2 tables, avec modulo pour savoir l'ordre

https://www.npmjs.com/package/mysql
npm install mysql




Version 2.2


Convert if to switch
try doit englober la fonction au complet

javascript copy array without reference: attention shift !

??
return generateMessage (line.message, content); > return content; NOPE
FULL RETEST

ensuite if content then generateMessage (line.message, content)



Nomenclature fonction, proc, variable, parametre
commentaires


comment
Test iPad, Android & web







 future function comment example
  % function sorted_array = sort( array ) 
  % 
  % Author1: H. James de St. Germain (germain@eng.utah.edu) 
  % Author2: I worked alone  
  % Date:    Spring 2007 
  % Course:  Computer Science 1000 
  % 
  % Function   : Sort 
  % 
  % Description: The Sort Procedure sorts an array of 
  %              integers using the standard _bubble sort_ algorithm. 
  % 
  % Parameters : array              - a list of integers 
  % 
  % Return     : the newly sorted array 
  % 
  % Examples of Usage: 
  % 
  %    >> grades = [ 95 52 95 80 71 85 78 12 93 99 ]; 
  %    >> sorted_array = sort( array ) 
  %    ans = 
  %           [ 12 52 71 78 80 85 93 95 95 99 ] 
  % 
  % 
  













Version 2.3


!tw
ca prendrait juste..
1. un msg de launch-inscriptions, une seule fois au depart, pas de loop
2. un msg de defense setup
3. un msg La guerre commence
4. une commande manuel genre !tw new = un msg pour nouveau territoire ouvert
lets go sort une autre bouteille pis tu te couches pas...
hahaha


- purge utilisation ligne
- purge, bulkDelete & massdelete + gestion erreur
- inventaire des new () / destroy ?!?!?!
- TW (planif)
- Displayed defined cron (if defined) and summary of future step
- Find TBLS, TBDS & TW png or upload on discord for better display

- Create validate function pour valider les erreurs (throw)
- pour valider si variable = nombre entre x et y
- pour valider si variable = string entre x et y (liste array)

- Cap TB / channel (save in file) (si rotation alors bd)
- Cap Sith Raid / channel (save in file) (si rotation alors bd)

- Add the possibility that the bot grants himself discord privileges, when added into a server (administrator)

- Create help command for a available command list (and a flag for detail help)
- Create help commande for a specific command (Information command)
!yoda = information I




Version 2.4

- Save planif work into MYSQL, gérer crash recovery
- save cap raid limit MYSQL


Formated for UltraEdit

To ensure a perfect code format / diaplay, use UltraEdit.
Then click on Advanced, Settings.
Search for Word warp.
Enter the following value
 - Tab stop value: 8
 - Indent spaces: 8



Installation Procedure

1. Download & Install GitHub Desktop: https://desktop.github.com/
2. Clone a repository URL: https://github.com/xalekk/SWGOH-QF
3. Install Node.js & NPM: https://www.npmjs.com/get-npm
4. Open CMD prompt and copy paste the following command
	npm install discord.js
	npm install node-schedule
	npm install pm2 -g




Node.js helpfull commands

to start the bot, using Node.js (debug mod)
node mybot.js



PM2 - Advanced Node.js process manager helpfull commands

to start the bot, as pm2 process
pm2 start mybot.js

to stop all pm2 process
pm2 stop all

to restart all pm2 process
pm2 restart all
@param



Reference:
https://www.cs.utah.edu/~germain/PPS/Topics/commenting.html
https://gggritso.com/practical-javascript-nomenclature
http://www.j-io.org/Javascript-Naming_Conventions

*/








// Defines that JavaScript code should be executed in "strict mode".  Reference: https://www.w3schools.com/js/js_strict.asp
'use strict';



//Class Error
//when an error happen, this class is thrown
class Error {
	constructor() {
		this.parameters = '';
		this.example = '';
	};
};

class line {
	constructor() {
		this.message = '';
		this.prefix = '';
		this.command = '';
		this.args = '';
	};
};

class Content {
	constructor() {
		this.text = '';
		this.title = '';
		this.description = '';
		this.author = '';
		this.transmissionSource = '';
		this.thumbnail = '';
		this.color = '';
		this.footerText = '';
		this.footerIconURL = '';
	};
};



//https://eureka.ykyuen.info/2011/02/20/javascript-sleep-function/
function sleep(ms) {
	var end = new Date().getTime() + ms;
	while (new Date().getTime() < end);
};

function eventOutput (text) {
	return new Date() + ' - ' + text;
};

function log (text){
	console.log(eventOutput('Log: ' + text));
};




//########## [BF] ?????
// makes the bot say something and delete the message. As an example, it's open to anyone to use.
function generateMessage (message, content){
	//var everyoneRole = line.message.guild.roles.find("name", "Human");

	// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
	message.delete().catch(O_o=>{});
	
	var vTransmissionSource = '';
	
	if (content.transmissionSource){
		vTransmissionSource = "Voici 1 transmission " + content.transmissionSource + ":";
	}
	var embed = new Discord.RichEmbed()
	.setAuthor(vTransmissionSource, message.author.avatarURL)
		.setColor(content.color)
		.setTitle(content.title)
		.setDescription(content.description)
		.setThumbnail(content.thumbnail)
		.setFooter(content.footerText, content.footerIconURL);

	//console.log (content);
	//console.log ({embed});
	
	message.channel.send(content.text,{embed});
	
	return message;
};





function fcterror (line, error){
	
	// makes the bot say something and delete the message. As an example, it's open to anyone to use.
	// To get the "message" itself we join the `args` back into a string with spaces:
	///.parameters, error.example
	const input = line.prefix + line.command;
	const args = line.args.join(" ");
	var content = new Content();
	
	if (!error.example){
		error.example = '';
	}
	else{
		error.example = '\n' + error.example;
	}
	//var ou let ?!?!?!
	
	content.title = "Erreur: ";
	content.color = 0xff0000;
	//##########
	// To get the "message" itself we join the `args` back into a string with spaces:
	content.description = "1 erreur est survenue, lors de l'appel de la commande suivante:\n`" + input + " " + args + "`\n\nLes valeurs permise sont:\n`" + error.parameters + "`.\n\nVoici quelques exemples d'appel:\n`" + error.example.replace(/\n/g, '\n' + input + ' ') + "`";
	content.thumbnail = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Oxygen480-actions-dialog-close.svg/2000px-Oxygen480-actions-dialog-close.svg.png";

	return generateMessage (line.message, content);
	
};





function getContentYoda(line) {
	
	//var ou let ?!?!?!
	var content = new Content();
	content.transmissionSource = "de Yoda: ";
	content.color = 0x2CA705;
	// To get the "message" itself we join the `args` back into a string with spaces:
	content.description = line.args.join(" ");
	content.thumbnail = "https://swgoh.gg/static/img/assets/tex.charui_yodahermit.png";
	
	return generateMessage (line.message, content);
};





/*
Function TB
Argument
Type: L/D
Phase: 1 to 6
Deployment limit : 0 to 100
   let day1 = args[0];
	   let day2 = args[1];
	   let pod1 = args[2];
	   let pod2 = args[3];
	   let pod3 = args[4];
*/


Number.prototype.between = function(a, b) {
	var min = Math.min.apply(Math, [a, b]),
	max = Math.max.apply(Math, [a, b]);
	return this >= min && this <= max;
};


function tbParametersValidation(side, phase, deploymentLimit){
	if (
		!side ||
		!['l','d'].includes(side) ||
		!phase ||
		![1,2,3,4,5,6].includes(phase) || (
			//length === 3 &&
			deploymentLimit !== undefined &&
			!deploymentLimit.between(1, 100)
		)
	) {
		
		var error = new Error();
		throw error;
	}
};

function tb(line) {
	
	var side = line.args[0];
	var phase = Number(line.args[1]);
	
	if (line.args[2] !== undefined) {
		var deploymentLimit = Number(line.args[2]);
	}

	if (side){
		side = side.toLowerCase();
	}
	try {

		tbParametersValidation(side, phase, deploymentLimit);
		
		phase = Number(phase);
		deploymentLimit = Number(deploymentLimit);
	
		var content = new Content();
		var admiralname, objective, sideName;
		
		if (side === 'l') {
			content.transmissionSource = "de l'Amiral Ackbar";
			sideName = 'LIGHT';
			objective = "contrer les plans de l'Empire";
			content.color = 16777215;
			content.footerText = "Que la Force soit avec vous.";
			content.footerIconURL = "https://swgoh.gg/static/img/assets/tex.charui_ackbaradmiral.png";
			//content.thumbnail = "https://www.dagobahdayspa.online/img/territory_battle_thumbnail.png";
			content.thumbnail = "http://zam.zamimg.com/images/9/a/9afca49f83018cbbe49a3ff709e2b31f.png";
		}
		else if (side === 'd') {
			content.transmissionSource = "du Grand Admiral Thrawn";
			sideName = 'DARK';
			objective = "anéantir cette vermine rebelle";
			content.color = '0xa8a8b1';
			content.footerText = "Pour détruire un ennemi, tu dois le connaître.";
			content.footerIconURL = "https://swgoh.gg/static/img/assets/tex.charui_thrawn.png";
			content.thumbnail = "https://vignette.wikia.nocookie.net/starwars/images/8/87/Death-Star-SWCT.png/revision/latest?cb=20170506050458";
		}
		
		content.text = "@everyone __**:boom:TERRITORY BATTLES " + sideName + " SIDE PHASE " + phase + ":boom:**__\n";
		/////content.text = "@everyone __**:boom:RAID " + raidTitle + " :boom:**__ \n";#############################################################
		//content.description = fctInitTBDescription (phase, admiralname, objective);

		content.description  = "\n\nVoici vos ordres pour " + objective + ":\n\n";

		// If phase is 1, 2 3 or 4
		if ( [1,2,3,4].includes(phase) ) {
			content.description  += "`#1 - `MISSIONS SPÉCIALES.\n`#2 - `PLATOONS. **Attention aux commentaires!**\n";
		}
		else {
			content.description  += "`#1 - `PLATOONS. **Attention aux commentaires!**\n`#2 - `MISSIONS SPÉCIALES.\n";
		}
		content.description  += "`#3 - `MISSIONS NORMALES.\n`#4 - `DÉPLOIEMENT";

		if (deploymentLimit && [4,5,6].includes(phase)) {
			content.description  += " EN BAS, **jusqu'à " + deploymentLimit + "M de la 3e** :star:.\n`#5 - `DÉPLOIEMENT EN HAUT & MILLIEU";
		}

		content.description  += ".";
		
		return generateMessage (line.message, content);
	}

	catch(error) {
		error.parameters = "Type: l/s, \nPhase: 1 à 6, \nLimitte de déploiement: # entre 0 & 100";
		error.example = "d 1\nl 4 12";
		return fcterror(line, error);
	}

};



			



/*

# True command
!raid type jour heure podium1 podium2 podium3 message spécial

!raid r mardi 20h00
!raid a mardi 20h00 @podium1 @podium2 @podium3
!raid s mardi 20h00 @podium1 @podium2 @podium3
!raid n mardi 20h00 @Filbe Lamon#9224 @Xalekk#0763 @Peperlu#8833

# Shortcut command
!pit mardi 20h00
!aat mardi 20h00 @podium1 @podium2 @podium3
!sith mardi 20h00 @podium1 @podium2 @podium3

!pit mardi 20h00 0 0 0 Sanction particulière à @Filbe Lamon#9224, à cause du non respect du podium
!sith mardi 20h00 @podium1 @podium2 @podium3 Sanction particulière à @Filbe Lamon#9224, à cause du non respect du podium

*/





function raid(line) {
	const type = line.args[0];
	const day = line.args[1];
	const hour = line.args[2];
	//const limit = line.args[3];
	const pod1 = line.args[3];
	const pod2 = line.args[4];
	const pod3 = line.args[5];
	const messages = line.args[6];

	var raidTitle = '';

//		function fctInitRaid (type){
			var content = new Content();
			
			switch (type){
			
				case 'r':
					raidTitle = 'THE PIT';
					content.transmissionSource = "du Rancor";
					content.description = "Vous êtes tombé dans un piège!";
					content.color = 0xf7dd92;
					content.thumbnail = 'https://swgoh.gg/static/img/assets/raids/tex.guild_events_rancor.jpg';
					content.footerText = 'ROOOOOAAAAARRRRR';
					content.footerIconURL = 'https://swgoh.gg/static/img/assets/tex.charui_rancor.png';
					break;

				case 'a':
					raidTitle = 'TANK TAKEDOWN';
					content.transmissionSource = "du General Grevious";
					content.description = "Tank en approche, renforts ennemis imminent!";
					content.color = 0xa3acef;
					content.thumbnail = 'https://swgoh.gg/static/img/assets/raids/tex.guild_events_aat.jpg';
					content.footerText = "Imbéciles! J'ai été initié à l'art Jedi par Comte Dooku!";
					content.footerIconURL = 'https://swgoh.gg/static/img/assets/tex.charui_grievous.png';
					break;

				case 's':
					raidTitle = 'THE SITH TRIUMVIRATE';
					content.transmissionSource = "de Darth Traya";
					content.description = "Oserez-vous affrontez les Seigneurs Siths?";
					content.color = 0xcc281c;
					content.thumbnail = 'https://swgoh.gg/static/img/assets/raids/tex.guild_events_triumvirate.jpg';
					content.footerText = "Tes compagnons ne pourront compenser tes faiblesses!";
					content.footerIconURL = 'https://swgoh.gg/static/img/assets/tex.charui_trayaraid.png';
					break;

				default:
					raidTitle = 'NEW';
					break;
			}
		
			content.description += '\n\nInscription **immédiate**!\nDémarrage: **' + day + ' à '+ hour + '**';
			if(type === 's') {
				content.description += "\nCap: **11M**";
			}
			
			if (pod1 && pod1 !== '0') {
				content.description += "\n\nÀ exclure du podium:\n:first_place: " + pod1+"\n:second_place: " + pod2+"\n:third_place: " + pod3;
			}
			
			
			if (messages) {
				
				var vMessages = line.args;
				vMessages.shift();
				vMessages.shift();
				vMessages.shift();
				vMessages.shift();
				vMessages.shift();
				vMessages.shift();
				
				vMessages = vMessages.join(" ");

				content.description += "\n\n**" + vMessages + "**"
				
				// !sith mardi 20 @Filbe Lamon 0 0 sanction à Peperlu car violation de podium

			}

			content.text = "@everyone __**:boom:RAID " + raidTitle + " :boom:**__ \n";

//			return content;
//		}
		
		
//		var content = fctInitRaid(type);

	return generateMessage (line.message, content);
};



function sithp(line){
	const phase = line.args[0];
	var content = new Content();
	
	var varHead, varTeams, varCible, varFooter, varChannel;
	
	varHead = "**IMPORTANT** Toujours faire vos essais en mode :airplane: !\n\n:point_right:  **Phase " + phase + "**\n";
	varFooter = "\n\nUne fois la cible atteinte, vous pouvez enregistrer si vous êtes satisfait!\n\nConsultez la tactique ici :point_right: ";

	switch (phase){
		case '1':
		varTeams = "Rey (Jedi Training)";
		varCible = "4%";
		varChannel = "<#437585712464789524>";
		content.transmissionSource = "de Darth Nihilus";
		content.thumbnail = 'https://swgoh.gg/static/img/assets/tex.charui_nihilusraid.png';
		break;
		
		case '2':
		varTeams = "2 à 3, de votre choix";
		varCible = "2%";
		varChannel = "<#437594040435998740>";
		content.transmissionSource = "de Darth Sion";
		content.thumbnail = 'https://swgoh.gg/static/img/assets/tex.charui_sionraid.png';
		break;

		case '3':
		varTeams = "Chexmix, Greedomix, Aurramix";
		varCible = "4%";
		varChannel = "<#437588390376898570>";
		content.transmissionSource = "de Darth Traya";
		content.thumbnail = 'https://swgoh.gg/static/img/assets/tex.charui_trayaraid.png';
		break;

		case '4.1':
		varTeams = "Nightsisters";
		varCible = "10%";
		varChannel = "<#437599173307662336>";
		content.transmissionSource = "de Darth Nihilus";
		content.thumbnail = 'https://swgoh.gg/static/img/assets/tex.charui_nihilusraid.png';
		break;

		case '4.2':
		varTeams = "ALL IN";
		varCible = "2%";
		varChannel = "<#437599173307662336>";
		content.transmissionSource = "de Darth Traya";
		content.thumbnail = 'https://swgoh.gg/static/img/assets/tex.charui_trayaraid.png';
		break;
	}

	content.description = varHead + "Teams: **" + varTeams + "**\nCible / joueur: **" + varCible +" &+**" + varFooter + varChannel + ":bangbang:";
	content.color = 0xcc281c;
	content.text = '@everyone :boom:__**RAID THE SITH TRIUMVIRATE**__ :boom: __**HEROIC**__:boom:';
	
	return generateMessage (line.message, content);
};





// function planiftb
// function planiftw
function planif (line) {
	try {
		// ajouter fonction de validation input
		// ajouter 1 fonction qui retourne la prochain planif
			const type = line.args[0];
			var side = line.args[1];
			var phase = Number(line.args[2]);
			var deploymentLimit = line.args[3];

			if (line.args[3] !== undefined) {
				var deploymentLimit = Number(line.args[3]);
			}

			if (side){
				side = side.toLowerCase();
			}

			tbParametersValidation(side, phase, deploymentLimit);

			var schedule = require('node-schedule');
			line.message.channel.send('Votre schedule a été planifiée avec succès!');
			//var date = new Date(2017, 9, 5, 11, 10, 0);
			//var date = new Date(2018, 7, 13, 11, 21, 0);
			//var channel = client.channels.get("name", "bb-9e_test").id; 
			
			//var j = schedule.scheduleJob('* * * * * *', function(){ // Test
			//var j = schedule.scheduleJob('0 40 13 * * *', function(){ // Test TB 13h40
			var j = schedule.scheduleJob('0 0 13 * * *', function(){ // Hypothèse TB = 13h00, TW = 14h00
				line.command = type;
				line.args = [ side, phase, deploymentLimit ];

				//const info = '\nMESSAGE TEMPORAIRE: Démarrage de la schedule: ' + line.command +' ' + line.args;
				//line.message.channel.send(info);


				tb(line);
				phase ++;
				
				if (phase >= 7){
					j.cancel();
				}
			});

		return line.message;
		


	}

	catch(error) {
		error.parameters = "Type: l/s, \nPhase: 1 à 6, \nLimitte de déploiement: # entre 0 & 100";
		error.example = "tb d 1\ntb l 4 12";
		return fcterror(line, error);
	}

}






// Référence: https://stackoverflow.com/questions/19700283/how-to-convert-time-milliseconds-to-hours-min-sec-format-in-javascript
function uptime (line) {
	var d, h, m, s, ms, result;

	ms = client.uptime;
	s = Math.floor(ms / 1000);
	ms = ms % 1000;
	m = Math.floor(s / 60);
	s = s % 60;
	h = Math.floor(m / 60);
	m = m % 60;
	d = Math.floor(h / 24);
	h = h % 24;
	
	d = d % 24;

	d = (d < 10) ? "0" + d : d;
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	result = `I'm connected since `;
	
	if ( d > 0 ){
		result += d + ' day';
		if ( d > 1 ) {
			result += '(s)';
		}
		result += ' ';
	}
	
	result += h + ':' + m + ':' + s + '.' + ms;
	return line.message.reply(result);
};




async function massDelete (message, limit) {
	await message.channel.fetchMessages({ limit: limit })
	.then(async(messages) => {
		for (var i in messages.array()) {
			await messages.array()[i].delete().catch(console.error);
		}
		return Number(limit);
	}
	
	//sleep(5000);

	)
	.catch(error => message.reply(`Couldn't delete messages because of: ${error}`));

};



async function bulkDelete (message, limit){
	var bulkDeleteCount;
	//async function bulkDelete (line){
	
	//const limit = line.args[0];
	// This command removes all messages from all users in the channel, up to 100.
	// Ooooh nice, combined conditions. <3
	if(!limit || limit < 2 || limit > 100)
		return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

	// So we get our messages, and delete them. Simple enough, right?
	await message.channel.fetchMessages({limit: limit})
	.then(async(messages) => {
		await message.channel.bulkDelete(messages)
			.then(async(messages) => {
				bulkDeleteCount = messages.size;
				//log (bulkDeleteCount);
				//log (messages);

				// s'il en reste à supprimer
				//if () {
					// massDelete de ce qui reste à supprimer
					// var result = await massDelete(message, limit - bulkDeleteCount);
					// log (result);
				//}
			
				// Return number of message purged, from both function
				//message.reply(`Bulk deleted ${bulkDeleteCount} messages`);
				//return line.message.reply(result);
			})
			
			// the catch code need to be trapped.  If it's cannot delete, then recursive - 10, else stop
			//.catch(error => message.reply(` Couldn't delete messages because of: ${error}`));
			.catch(error => bulkDelete(message, limit - 10));
	})

	//return message;
	// Return number of message purged, from both function
	return message.reply(`Bulk deleted ${bulkDeleteCount} messages`);
				
};






/*
Insert a member into the Channel rotation
need to do 1 insert for all members

*/
function arenamemberadd(pGuildID, pChannelID, pMemberID){
	var result = pGuildID + ' ' + pChannelID  + ' ' + pMemberID
	log(result);
}

/*
!arena embeded podium etc.
!arenaadd 19 00 @filbe @xalekk .... (array)
+ afficher po today, po demain

!arenadel
!arenamemberadd @filbe ajout à la fin
!arenamemberdel @filbe delete + bouche trou de #

!a 19 00 @Filbe Lamon#9224 @BB-9E#8279 @Filbe Lamon#9224 

*/


function arena (line){
	try{
		const hours = line.args[0];
		const minutes = line.args[1];
		
		const firstMember = line.args[2];
		var vMembersAr = new Array;
		
		if (firstMember) {
			var vMembersAr = line.args.slice();
			
			
			vMembersAr.shift();
			vMembersAr.shift();
		}
		


		
		// line.message.channel.guild.id
		//// channel: line.message.channel.id
		///message.id.timestamp = date.
		//guild_id
		
		var date;
		
		var result = '';
		result += '\nGuild#: ' + line.message.channel.guild.id;
		result += '\nChannel#: ' + line.message.channel.id;
		result += '\nMessage#: ' + line.message.id;
		
		//JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
		//result += '\nMessage Created Timestamp (Milliseconds): ' + line.message.createdTimestamp;
		date = new Date(line.message.createdTimestamp);
		//JavaScript will (by default) output dates in full text string format:
		result += '\nMessage Created Timestamp: ' + date;
		//The toISOString() method converts a Date object into a string, using the ISO standard.
		result += '\nMessage Created Timestamp (ISO-8601): ' + date.toISOString();
		//The toUTCString() method converts a date to a UTC string (a date display standard).
		//result += '\nMessage Created Timestamp (UTC): ' + date.toUTCString();
		
		date.setHours(hours);
		date.setMinutes(minutes);
		date.setSeconds(0);
		date.setMilliseconds(0);
		
		result += '\nPayout Timestamp of the day: ' + date;
		result += '\nPayout Timestamp of the day (ISO-8601): ' + date.toISOString();
		
		result += '\nMessage: ' + line.message;

		for (var i in vMembersAr) {
			arenamemberadd (line.message.channel.guild.id, line.message.channel.id, vMembersAr[i]);
		}

		line.message.reply(result);
	}
	
	
	
	catch(error) {
		error.parameters = "Hours \nMinutes \nMembers list";
		error.example = "19 00 @...\n20 30 @...";
		return fcterror(line, error);
	}


	
};


///////////////////#############



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

client.login(config.token);

client.on("ready", () => {
	// This event will run if the bot starts, and logs in, successfully.
	log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
	// Example of changing the bot's playing game to something useful. `client.user` is what the
	// docs refer to as the "ClientUser".
	client.user.setActivity(`on ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
	// This event triggers when the bot joins a guild.
	log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
	client.user.setActivity(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
	// this event triggers when the bot is removed from a guild.
	log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
	client.user.setActivity(`on ${client.guilds.size} servers`);
});


client.on("message", async message => {
	// This event will run on every single message received, from any channel or DM.

	// It's good practice to ignore other bots. This also makes your bot ignore itself
	// and not get into a spam loop (we call that "botception").
	if(message.author.bot) return;

	// Also good practice to ignore any message that does not start with our prefix,
	// which is set in the configuration file.
	const prefix = config.prefix;
	if(message.content.indexOf(prefix) !== 0) return;

	// Here we separate our "command" name, and our "arguments" for the command.
	// e.g. if we have the message "+say Is this the real life?" , we'll get the following:
	// command = say
	// args = ["Is", "this", "the", "real", "life?"]
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
	var line = {message:message, prefix:prefix, command:command, args:args};

	var content;

	// Start switch for shortcut
	switch (line.command) {
		case 'y':
			line.command = 'yoda';
			break;

		case "pit":
		case "rancor":
			line.command = 'raid';
			line.args.unshift('r');
			break;
	
		case "tank":
		case "aat":
		case "haat":
			line.command = 'raid';
			line.args.unshift('a');
			break;

		case "sith":
		case "hsith":
			line.command = 'raid';
			line.args.unshift('s');
			break;

	} // End Switch for shortcut

	// Start switch
	switch (line.command) {
		
		// Admin command
		// Let's go with a few common example commands! Feel free to delete or change those.
		// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
		case "ping":
			// The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
			const m = await message.channel.send("Ping?");
			m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
			break;

		// Made yoda said a message
		case "yoda":
			content = getContentYoda(line);
			break;

		case "tb":
			content = tb(line);
			break;

		case "raid":
			content = raid(line);
			break;
			
		case 'sithp':
			content = sithp(line);
			break;

		case "uptime":
			message = uptime(line);
			break;
			
		// loop récursif pour deleter 1 maximum de x message
		case "purge":
			message = bulkDelete (message, args[0]);
			break;

		case 'planif':
			message = planif(line);
			break;

		case 'a':
			message = arena(line);
			break;

	// End Switch
	}


	


	// Convert if commands into function

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


});



// Catching errors & promisses throwed from discord.js

// client.on('debug', (e) => console.log(eventOutput('Debug:'), e)); // For debug purposed only
client.on('warn', (e) => console.warn(eventOutput('Warning:'), e));
client.on('error', (e) => console.error(eventOutput('Error:'), e));

//The following line prevent the following warning: [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (e) => console.error(eventOutput('Unhandled Rejection:'), e.stack || e));
