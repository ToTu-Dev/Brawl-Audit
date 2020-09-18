const Discord = require("discord.js");
const client = new Discord.Client();
var Version = 'Beta 1.1.0'
var server = 'https://discord.gg/msUbraU'
var invite = 'https://discord.com/api/oauth2/authorize?client_id=755985276873998486&permissions=0&scope=bot'




const exampleEmbed = new Discord.MessageEmbed()
  .setColor('0xFFFF00')
	.setTitle('Pika Bot')
	.setAuthor('PIKA!!', 'https://cdn.discordapp.com/attachments/755630499770400811/756175433409757255/images_46.jpeg' )
  .setDescription('```pika Bot is a multifunction bot its currently in beta and is under test ```DEVLOPED BY- TOTU#5997')
  
	.setThumbnail('https://cdn.discordapp.com/attachments/755630499770400811/756175433409757255/images_46.jpeg')
	
	
	.setImage('https://cdn.discordapp.com/attachments/755177322730225705/756383714207989780/pik.png')
	.setTimestamp()
	.setFooter('Dev:TOTU#5997','https://cdn.discordapp.com/attachments/755630499770400811/756175901783228556/images_41.jpeg' );
	


  const aembed = new Discord.MessageEmbed()
	.setColor('0xFFFF00')
	.setTitle('Support Server')
	.setAuthor('GG !!', 'https://cdn.discordapp.com/attachments/755630499770400811/756175433409757255/images_46.jpeg', )
  .setDescription('Official Support server of pika bot ```CLICK ON SUPPORT SERVER```')
  .setURL(server)
  
  .setThumbnail('https://cdn.discordapp.com/attachments/755630499770400811/756175433409757255/images_46.jpeg')
  


  const bembed = new Discord.MessageEmbed()
	.setColor('0xFFFF00')
	.setTitle('Invite Me!!!')
	.setAuthor('oWo !!', 'https://cdn.discordapp.com/attachments/755630499770400811/756175433409757255/images_46.jpeg', )
  .setDescription('Add Pika Bot to your server and make your server cute!!! ```CLICK ON Invite Me!!!```')
  .setURL(invite)
  
	.setThumbnail('https://cdn.discordapp.com/attachments/755630499770400811/756175433409757255/images_46.jpeg')
	

  


   





























// Set the prefix

let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send(bembed);
  } else
  if (message.content.startsWith(prefix + "cute")) {
    message.channel.send('https://cdn.discordapp.com/attachments/755177322730225705/756385128346812446/o.gif')
} else
if (message.content.startsWith(prefix + "pika")) {
  message.channel.send(exampleEmbed)
} else
if (message.content.startsWith(prefix + "Hi")) {
  message.channel.send("Hello, I am Pika Bot made by some kid genius ```TOTU and Lee```")  

 } else if (message.content === `${prefix}current`) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
  else if (message.content === `${prefix}user-info`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);

  } else
  if (message.content.startsWith(prefix + "support")) {
    message.channel.send(aembed)

  }})
 
   
  

  





       

 
client.login("NzU1OTg1Mjc2ODczOTk4NDg2.X2LQJw.QK3W0CQgjzJp9tmVQ6Rq4y56xO4");



