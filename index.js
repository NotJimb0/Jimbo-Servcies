    const Discord = require("discord.js");

var client = new Discord.Client();
var embed = new Discord.RichEmbed()

var spotifyaccounts = [
  "inestomaz1998@hotmail.com:OneDirection",
  "edson_lq_ribeiro@hotmail.com:tricolor",
  "anacgcast@hotmail.com:411985",
  "marthe_gautland@hotmail.com:marthe9592",
  "daniqueengel01@hotmail.com:agaatha",
  "igorbublik_23@hotmail.com:car34nfl",
  "hot_florist@hotmail.com:noodle62",


];

 const TOKEN = "NTcxMDQ3Mjk4MzYwOTM0NDMw.XMIDTg.BWg9VaKl1OnejoSzOk0iQ1X_kiI"; 

 client.on ("ready", () => {
console.log ("ready");
client.user.setPresence({ watching: { name: "Hola." , type: 2 } });

}); 

const PREFIX = ""
client.on ("message", (message) => {

    if (message.author.bot) return;


msg = message.content.toLowerCase();


     
mention = message.mentions.users.first();

if (msg.startsWith (PREFIX + "alert")) {
    if (mention == null) { return; }
    message.delete();
    mentionMessage = message.content.slice (1);
    mention.sendMessage (mentionMessage);
}   

});
     


     
     client.on("message", function(message) {
          if (message.author.equals(client.user)) return;
          
          if (!message.content.startsWith(PREFIX)) return;
          
          var args = message.content.substring(PREFIX.length).split(" ");
          
          switch (args[0].toLowerCase()) {
              case "/help":
              var embed = new Discord.RichEmbed()
              .addField("How do I purchase LT2 cash?", "To purchase LT2 cash, go to #lumber-tycoon-2-shop, make a ticket and wait for someone to serve you.", true)
              .addField("How do I purchase Dugeon Quest items?", "To purchase DQ items, go to #dungeon-quest-shop, make a ticket and wait for someone to serve you.", true)
              .addField("Who was the previous owner?", "The previous owner of this server was Saif.", true)
              .addField("How do I claim my giveaway prize?","To claim your giveaway prize, go to #support and make a ticket.", true)
              .addField("Can I become moderator?","To become moderator, type /applications and check if they are open. If they are open, type /apply", true)
              .setColor("#B22222")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed);
              break;
              case "/info":
              message.channel.sendMessage("Information has been sent to your DM's.")
              message.author.send("*test*")
              break;
              case "/suggest":
              message.delete(0)
              if(message.member.roles.find("name", "Anti-Suggest")){
                message.reply('you cannot use this command as you are banned from using the suggest command.')
            }else{
              var text = message.content.split(' ').slice(1).join(' ')
              if (!text) return message.reply("please say /suggest followed with your suggestion.")
              var embed20 = new Discord.RichEmbed()
              .addField("Suggestion:", text, true)
              .addField("User:", message.author, true)
              .setFooter("This bot was made by NotJimbo via v3rm.")
              .setColor("#5041f4")
              client.channels.get("567681921774256152").sendEmbed(embed20)
              message.channel.sendMessage("Successfully sent suggestion to #suggestions.")
            }            
              break;
              case "/open-bloxburg-sales":
              message.delete(1000)
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var embed9 = new Discord.RichEmbed()
              .addField("Bloxburg Sales Status", "Bloxburg sales are now open! To make a ticket, go to #bloxburg-shop", true)
              .setColor("#008000")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              var status = "open"
              message.channel.sendEmbed(embed9);
              break;
              case "/close-bloxburg-sales":
              message.delete(1)
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var embed9 = new Discord.RichEmbed()
              .addField("Bloxburg Sales Status", "Bloxburg sales are now closed! You can still make a ticket but it will not get served until sales re-open.", true)
              .setColor("ff3342")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              var status = "close"
              message.channel.sendEmbed(embed9);
              break;
              case "/bloxburg-sales":
              var embed11 = new Discord.RichEmbed()
              .addField("Bloxburg Sales Status", "Bloxburg sales are currently open! To make a ticket, go to #bloxburg-shop", true)
              .setColor("#008000")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              var embed12 = new Discord.RichEmbed()
              .addField("Bloxburg Sales Status", "Bloxburg sales are currently closed!", true)
              .setColor("ff3342")
              if  (status = "open"); 
              message.channel.sendEmbed(embed11);
              break;
              case "/open-lt2-sales":
              message.delete(1)
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var embed13 = new Discord.RichEmbed()
              .addField("LT2 Sales Status", "LT2 sales are now open! Go to #lumber-tycoon-2-shop to make a ticket!", true)
              .setColor("#008000")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed13);
              break;
              case "/close-lt2-sales":
              message.delete(1)
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var embed14 = new Discord.RichEmbed()
              .addField("LT2 Sales Status", "LT2 sales are now closed! You can still make a ticket but it will not get served until sales re-open.", true)
              .setColor("ff3342")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed14);
              break;
              case "/updates":
              message.delete(1)
              message.channel.sendMessage("The bot has just been updated! Here is what has been updated:")
              var embed15 = new Discord.RichEmbed()
              .addField("Anti-Leech", "Users will now get a message from the bot telling them to reply to the thread.", true)
                            .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed15);
              break;
              case "/shutdown":
              message.channel.sendMessage("SyntaxError at new Script (vm.js:79:7) at createScript (vm.js:251:10) at Module.load (internal/modules/cjs/loader.js:599:32")
              break;
              case "/commands":
              var embed16 = new Discord.RichEmbed()
              .addField("/help", "Lists a embed of the most FAQ.", true)
              .addField("/updates", "Shows a list of updates.", true)
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed16);
              break;
              case "/help-mod":
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var embed18 = new Discord.RichEmbed()
              .addField("/open-lt2-sales", "Announces to the channel the command was ran in that sales are open for LT2.", true)
              .addField("/close-lt2-sales", "Announces to the channel the comamnd was ran in that sales are closed for LT2.", true)
              .addField("/shutdown", "This command shuts down the bot. Only run if the bot is breaking - do not use to close bot.", true)
              .addField("/announce", "Sends whatever text after the comamnd in #announcements", true)
              .addField("/announce-embed", "Sends whatever text after the comamnd in #announcements as an embed.", true)
              .addField("/open-lt2-items", "Announces to the channel the command was ran in that sales are open for LT2 items.", true)
              .addField("/close-lt2-items", "Announces to the channel the command was ran in that sales are closed for LT2 items.", true)
              .setFooter("This bot was made by NotJimbo via v3rm.")
              .setColor("8d33ff")
              message.channel.sendEmbed(embed18);
              break;
              case "/lockdown":
                  if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')            
                message.delete(0)
                var text8 = message.content.split(' ').slice(1).join(' ')
                if (!text8) return message.reply("please say /raid followed with why you're locking general..")
              var embed65 = new Discord.RichEmbed()
              .addField("Lockdown Announcement:", "The server is currently in lockdown. Please be patient.", true)
              .addField("Reason added:", text8)
              .addField("Lockdown by:", message.author, true)
              .setColor("f44542")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed65);
              break;
              case "/announce":
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var text2 = message.content.split(' ').slice(1).join(' ')
              client.channels.get("557505498354679808").sendMessage(text2)
              message.channel.sendMessage("Successfully sent announcement.")
              break;
              case "/announce-embed":
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')            
              var text3 = message.content.split(' ').slice(1).join(' ')
              var embed19 = new Discord.RichEmbed()
              .addField("Announcement:", text3, true)
              client.channels.get("557505498354679808").sendEmbed(embed19)
              message.channel.sendMessage("Successfully sent announcement as an embed.")
              break;
              case "/staff-list":
              var embed21 = new Discord.RichEmbed()
              .addField("Owner", "NotJimbo", true)
              .addField("Former Owner", "Saif", true)
              .addField("Head Administrator", "N/A.", true)
              .addField("Head of Sales", "N/A", true) 
              .addField("Head of Media", "N/A", true)
              .addField("Adminstrator", "N/A", true) 
              .addField("LT2 Cash Provider", "H20", true)
              .addField("Bloxburg Cash Provider", "[Discontinued]", true) 
              .addField("Dungeon Quest Provider", "Spongebob", true)
              .addField("Jailbreak Cash Provider", "NotJimbo", true) 
              .addField("The Northern Frontier Provider", "H20", true)
              .addField("Moderator", "Dead Inside, depression, iGraxy, Spongebob, stopit, CriShoux", true) 
              .setFooter("This bot was made by NotJimbo via v3rm.")
              .setColor("8d33ff")
              .setThumbnail("https://i.vgy.me/SHdIQ7.jpg")
              message.channel.sendEmbed(embed21);
              break;
              case "/applications":
              var embed22 = new Discord.RichEmbed()
              .addField("Applications Status", "Applications are currently open! Go to #apply and type the command /apply followed with why you should be a moderator!", true)
              .setFooter("This bot was made by NotJimbo via v3rm.")
              .setColor("8d33ff")
              message.channel.sendEmbed(embed22);
              break; 
              case "/apply":
                message.reply("applications are currently closed.")
              break; 
              case "/open-lt2-items":
              message.delete(1)
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var embed24 = new Discord.RichEmbed()
              .addField("LT2 Item Sales Status", "LT2 item sales are now open! Go to #lumber-tycoon-items to make a ticket!", true)
              .setColor("#008000")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed24);
              break;
              case "/close-lt2-items":
              message.delete(1)
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var embed23 = new Discord.RichEmbed()
              .addField("LT2 Item Sales Status", "LT2 item sales are now closed! You can still make a ticket but it will not get served until sales re-open.", true)
              .setColor("ff3342")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed23);
              break;
              case "/accounts":
              var embed25 = new Discord.RichEmbed()
              .addField("Spotify Premium Stock", "20,000", true)
              .addField("Hulu Stock", "10,000", true)
              .addField("Crunchyroll Premium Stock", "2,000", true)
              .addField("Netflix Stock", "0", true)
              .addField("Minecraft Stock", "0", true)
              .addField("Twitch Stock", "0", true)
              .addField("Wish Stock", "1,000", true)
              .addField("NS Codes Stock", "3,000", true)
              .addField("Roblox Stock", "0", true)
              .setColor("#f47442")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed25);
              break;
              case "/moderator_warning":
              message.delete(1)
              var embed26 = new Discord.RichEmbed()
              .addField("Moderator Warning", "You have been given a warning for the reason: **Being rude while making a ticket.**", true)
              .setColor("#aa0a0a")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed26);
              break;
              case "/6hd":
              message.delete(1)
              var embed27 = new Discord.RichEmbed()
              .addField("Public Notice", "You can no longer get served unless you reply to this: https://v3rmillion.net/showthread.php?tid=828583", true)
              .setColor("#0aa96f")
              .setFooter("This message was sent to all game copying tickets // This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed27);
              break;
              case "/hello":
              message.delete(0)
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var embed29 = new Discord.RichEmbed()
              .addField("Welcome to your ticket!", "Hello there! A member of staff has now arrived at your ticket!", true)
              .setColor("#0aa96f")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed29)
              var embed30 = new Discord.RichEmbed()
              .addField("Requirements", "Due to the insane amount of leeches, you will be required to reply to our thread. You can reply with something like 'will vouch if goes well' then edit your message after saying it went smoothly (if it did!). Once you have replied, let us know!", true)
              .setColor("#0aa96f")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed30)
              var embed31 = new Discord.RichEmbed()
              .addField("Thread Link", "Here's the thread link! https://v3rmillion.net/showthread.php?tid=828583", true)
              .setColor("#0aa96f")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed31)
              var embed44 = new Discord.RichEmbed()
              .addField("When you have replied", "Type the command /username followed with your v3rm username! E.G: /username NotJimbo", true)
              .setColor("#0aa96f")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed44)
              break;
              case "/feedback":
              message.delete(0)
              if(message.member.roles.find("name", "Anti-Vouch")){
                  message.reply('you cannot use this command as you are banned from using the feedback command.')
              }else{
                var text4 = message.content.split(' ').slice(1).join(' ')
                if (!text4) return message.reply("please say /feedback followed with your feedback message.")
                .then(msg => {
                  msg.delete(10000)
                })
                var embed32 = new Discord.RichEmbed()
                .addField("Feedback Left:", text4, true)
                .setColor("#42f44e")
                client.channels.get("575388657599643648").sendMessage(message.author, "a")
                client.channels.get("575388657599643648").sendMessage(embed32)
                message.reply("your feedback has been sent!")
                .then(msg => {
                  msg.delete(10000)
                })
              }
              break;
              case "/vouch":
              message.delete(0)
              if(message.member.roles.find("name", "Anti-Vouch")){
                  message.reply('you cannot use this command as you are banned from using the feedback command.')
              }else{
                var text4 = message.content.split(' ').slice(1).join(' ')
                if (!text4) return message.reply("please say /vouch followed with your feedback message.")
                var embed32 = new Discord.RichEmbed()
                .addField("Feedback Left:", text4, true)
                .setColor("#42f44e")
                client.channels.get("575388657599643648").sendMessage(message.author, "a")
                client.channels.get("575388657599643648").sendMessage(embed32)
                message.reply("your feedback has been sent!")
              }
              break;
              
              case "/bye":
              message.delete(0)
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              var embed33 = new Discord.RichEmbed()
              .addField("Your ticket is now complete!", "Your ticket has now been completed.", true)
              .setColor("#0aa96f")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed33)
              var embed34 = new Discord.RichEmbed()
              .addField("But wait!", "Please let us know how it went for you! Type the command '/feedback' followed with your experience! This will be posted to #vouches-proof.", true)
              .setColor("#0aa96f")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed34)
              var embed36 = new Discord.RichEmbed()
              .addField("Thanks for choosing Jimbo Services.", "We hope you enjoy your stay.", true)
              .setColor("#0aa96f")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed36)
              break;
              case "/fuckhypera":
              if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
              message.delete(0)
              var embed35 = new Discord.RichEmbed()
              .addField("2000 Cash for free!", "Do you want 2,000 cash via UnbelievaBoat for free? All you have to do is subscribe to me below and post a screenshot of it in #subbed-proof. Wait up to 24 hours to obtain the cash.", true)
              .setColor("#4242f4")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed35)
              message.channel.sendMessage("http://www.youtube.com/liamglitchesyt")
              break;
              case "/thatoneguya":
              message.delete(0)
              var embed37 = new Discord.RichEmbed()
              .addField("2000 Cash for free!", "Do you want 2,000 cash via UnbelievaBoat for free? All you have to do is type /thatoneguy in #general!", true)
              .setColor("#4242f4")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed37)
              break;
              case "/role-all-premium":
              if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
              let role2 = message.guild.roles.find(r2 => r2.name == 'Premium')
              if (!role2) return message.channel.send(`**${message.author.username}**, an error as occured: Role not found.`)
              message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role2))
              message.channel.send(`**${message.author.username}**, role premium is now being added to all users.`)
              break;
              case "/dm-all":
              if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
              client.on('message', msg => {
                  {
                  let text3 = msg.content.slice('/dm-all'.length); // cuts off the /private part
                  msg.guild.members.forEach(member => {
                    if (member.id != client.user.id && !member.user.bot) member.send(text3);
                  });
                }
              });
              break;
              case "/simon-says":
              if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
              message.delete(0)
              var embed41 = new Discord.RichEmbed()
              .addField("Welcome to the game!", "Welcome to the simon says game! The game is simple. Only do what the message says if it starts with Simon Says. There will be lots of hidden tricks to get you out so be careful! :eyes: The game will be starting shortly.", true)
              .setColor("#4242f4")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed41)
              break;
              case "/simon-says-start":
              if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
              message.delete(0)
              var embed42 = new Discord.RichEmbed()
              .addField("The game has started!", "Let the games begin! Good luck!", true)
              .setColor("#4242f4")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed42)
              break;
              case "/enter-simon-says":
              if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
                            message.delete(0)
              var text5 = message.content.split(' ').slice(1).join(' ')
              client.channels.get("577540692830584874").sendMessage("A new member has joined the game! The new member is:")
              client.channels.get("577540692830584874").sendMessage(message.author, "a")
              message.reply('you have now entered into the game!')
              break;
              case "/spotify":
              if(message.member.roles.find("name", "Diamond")){ 
                var embed56 = new Discord.RichEmbed()
                .addField("Sucess!","The accounts have been sent to your direct messages.", true)
                .setColor("#42f44e")
                .setFooter("This bot was made by NotJimbo via v3rm.")
                message.channel.sendMessage(embed56)
                message.author.sendMessage('You understand that if you leak the accounts, your perms will be removed: https://pastr.io/view/AZGUDs')
                .then(msg => {
                  msg.delete(20000)
                })
            }else{
              var embed57 = new Discord.RichEmbed()
              .addField("Uh oh!","This feature is restricted to diamond users only!", true)
              .setColor("#f4414d")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendMessage(embed57)
            }
            break;
            case "/nitro":
                if(message.member.roles.find("name", "Administrator")){ 
                  var embed56 = new Discord.RichEmbed()
                  .addField("Sucess!","The codes have been sent to your direct messages.", true)
                  .setColor("#42f44e")
                  .setFooter("This bot was made by NotJimbo via v3rm.")
                  message.channel.sendMessage(embed56)
                  message.author.sendMessage('https://anonfile.com/0cQ4c2scnf/anygen_discord.csc_001_txt')
                  .then(msg => {
                    msg.delete(20000)
                  })
              }else{
                var embed57 = new Discord.RichEmbed()
                .addField("Uh oh!","This command is disabled with the reason: *no reason added*.", true)
                .setColor("#f4414d")
                .setFooter("This bot was made by NotJimbo via v3rm.")
                message.channel.sendMessage(embed57)
              }
            break;
            case "/malwarebytekeys":
                if(message.member.roles.find("name", "Diamond")){ 
                  var embed56 = new Discord.RichEmbed()
                  .addField("Sucess!","The keys have been sent to your direct messages.", true)
                  .setColor("#42f44e")
                  .setFooter("This bot was made by NotJimbo via v3rm.")
                  message.channel.sendMessage(embed56)
                  message.author.sendMessage('You understand that if you leak the keys, your perms will be removed: https://throwbin.io/t7dESXM')
                  .then(msg => {
                    msg.delete(20000)
                  })
              }else{
                var embed57 = new Discord.RichEmbed()
                .addField("Uh oh!","This feature is restricted to diamond users only!", true)
                .setColor("#f4414d")
                .setFooter("This bot was made by NotJimbo via v3rm.")
                message.channel.sendMessage(embed57)
              }
            break;
            case "/pornhub":
                if(message.member.roles.find("name", "Administrator")){ 
                  var embed56 = new Discord.RichEmbed()
                  .addField("Sucess!","The accounts have been sent to your direct messages.", true)
                  .setColor("#42f44e")
                  .setFooter("This bot was made by NotJimbo via v3rm.")
                  message.channel.sendMessage(embed56)
                  message.author.sendMessage('You understand that if you leak the accounts, your perms will be removed: https://throwbin.io/Ji1vzPm')
                  .then(msg => {
                    msg.delete(20000)
                  })
              }else{
                var embed57 = new Discord.RichEmbed()
                .addField("Uh oh!","This command is disabled with the reason: *no reason added*.", true)
                .setColor("#f4414d")
                .setFooter("This bot was made by NotJimbo via v3rm.")
                message.channel.sendMessage(embed57)
              }
            break;
            case "/nordvpn":
                if(message.member.roles.find("name", "Diamond")){ 
                  var embed56 = new Discord.RichEmbed()
                  .addField("Sucess!","The accounts have been sent to your direct messages.", true)
                  .setColor("#42f44e")
                  .setFooter("This bot was made by NotJimbo via v3rm.")
                  message.channel.sendMessage(embed56)
                  message.author.sendMessage('You understand that if you leak the accounts, your perms will be removed: https://throwbin.io/xouZG8s')
                  .then(msg => {
                    msg.delete(20000)
                  })
              }else{
                var embed57 = new Discord.RichEmbed()
                .addField("Uh oh!","This feature is restricted to diamond users only!", true)
                .setColor("#f4414d")
                .setFooter("This bot was made by NotJimbo via v3rm.")
                message.channel.sendMessage(embed57)
              }
            break;
            case "/steam":
            if(message.member.roles.find("name", "Administrator")){ 
              var embed56 = new Discord.RichEmbed()
              .addField("Sucess!","The accounts have been sent to your direct messages.", true)
              .setColor("#42f44e")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendMessage(embed56)
              message.author.sendMessage('You understand that if you leak the accounts, your perms will be removed: https://pastebin.com/rxg9CbK4')
              .then(msg => {
                msg.delete(20000)
              })
          }else{
            var embed57 = new Discord.RichEmbed()
            .addField("Uh oh!","This command is disabled with the reason: *no reason added*.", true)
            .setColor("#f4414d")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendMessage(embed57)
          }
          break;
          
            case "/hulu":
            if(message.member.roles.find("name", "Diamond")){ 
              var embed56 = new Discord.RichEmbed()
              .addField("Sucess!","The accounts have been sent to your direct messages.", true)
              .setColor("#42f44e")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendMessage(embed56)
              message.author.sendMessage('You understand that if you leak the accounts, your perms will be removed: https://pastebin.com/bMQRHPV7')
              .then(msg => {
                msg.delete(20000)
              })
          }else{
            var embed57 = new Discord.RichEmbed()
            .addField("Uh oh!","This feature is restricted to diamond users only!", true)
            .setColor("#f4414d")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendMessage(embed57)
          }
          break;
          case "/crunchyroll":
          if(message.member.roles.find("name", "Diamond")){ 
            var embed56 = new Discord.RichEmbed()
            .addField("Sucess!","The accounts have been sent to your direct messages.", true)
            .setColor("#42f44e")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendMessage(embed56)
            message.author.sendMessage('You understand that if you leak the accounts, your perms will be removed: https://pastr.io/view/5SiWks')
            .then(msg => {
              msg.delete(20000)
            })
        }else{
          var embed57 = new Discord.RichEmbed()
          .addField("Uh oh!","This feature is restricted to diamond users only!", true)
          .setColor("#f4414d")
          .setFooter("This bot was made by NotJimbo via v3rm.")
          message.channel.sendMessage(embed57)
        }
        break;
        case "/tunnelbear":
        if(message.member.roles.find("name", "Diamond")){ 
          var embed56 = new Discord.RichEmbed()
          .addField("Sucess!","The accounts have been sent to your direct messages.", true)
          .setColor("#42f44e")
          .setFooter("This bot was made by NotJimbo via v3rm.")
          message.channel.sendMessage(embed56)
          message.author.sendMessage('Tunnelbear accounts coming soon! :eyes:')
          .then(msg => {
            msg.delete(20000)
          })
      }else{
        var embed57 = new Discord.RichEmbed()
        .addField("Uh oh!","This feature is restricted to diamond users only!", true)
        .setColor("#f4414d")
        .setFooter("This bot was made by NotJimbo via v3rm.")
        message.channel.sendMessage(embed57)
      }
      break;
            case "/username":
            var text5 = message.content.split(' ').slice(1).join(' ')
            if (!text5) return message.reply("looks like that user hasn't replied! Maybe you spelt the username wrong?")
            message.channel.sendMessage("Are you sure you entered your username correct? If so, type /username-confirm. If you entered it wrong, redo it.")
            var embed46 = new Discord.RichEmbed()
            .addField("V3RM Username:", text5, true)
            client.channels.get("577880018030559254").sendMessage(message.author, "a")
            client.channels.get("577880018030559254").sendMessage(embed46)
            break;
            case "/username-confirm":
            var embed43 = new Discord.RichEmbed()
            .addField("Great!", "You have completed the steps above!", true)
            .setColor("#0aa96f")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendEmbed(embed43)
            var embed45 = new Discord.RichEmbed()
            .addField("TOS", "To proceed further, please read the following TOS and type '/i-agree': https://pastebin.com/raw/yhVa68DK", true)
            .setColor("#0aa96f")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendEmbed(embed45)
            break;
            case "/i-agree":
            var embed63 = new Discord.RichEmbed()
            .addField("Great!", "Please wait till a member of staff arrives.", true)
            .setColor("#0aa96f")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendEmbed(embed63)       
            var embed64 = new Discord.RichEmbed()
            .addField("To alert on-duty staff", "If you want to ping on-duty staff, type the command /ping-duty. If you use this more than once your ticket will be closed.", true)
            .setColor("#0aa96f")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendEmbed(embed64)       
            break;
            case "/ping-duty":
            message.channel.sendMessage("Feature is currently not working.")
            break;
            case "/toschange":
            if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
            var embed47 = new Discord.RichEmbed()
            .addField("V3RM Username:", text5, true)
            break;
              case "/help-diamond":
              var embed59 = new Discord.RichEmbed()
              .addField("/tos", "Shows the bot's TOS", true)
              .addField("/feedback", "Sends your feedback to #feedback", true)
              .addField("/spotify", "Spotify Premium Dump Link", true)
              .addField("/crunchyroll", "Crunchyroll Premium Dump Link", true)
              .addField("/hulu", "Hulu Premium Dump Link", true)
              .addField("/tunnelbear", "Tunnelbear Dump Link", true)
              .addField("/nordvpn", "NordVPN Dump Link", true)
              .addField("/steam", "Steam Dump Link", true)  
              .setColor("#4242f4")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed59)
              break;
              case "/spotify-new":
              if(message.member.roles.find("name", "Diamond")){ 
                var embed56 = new Discord.RichEmbed()
                .addField("Sucess!","The account has been sent to your direct messages.", true)
                .setColor("#42f44e")
                .setFooter("This bot was made by NotJimbo via v3rm.")
                message.channel.sendMessage(embed56)
                message.author.sendMessage(spotifyaccounts[Math.floor(Math.random() * spotifyaccounts.length)]);
            }else{
              var embed57 = new Discord.RichEmbed()
              .addField("Uh oh!","This feature is restricted to diamond users only!", true)
              .setColor("#f4414d")
              .setFooter("This bot was made by NotJimbo via v3rm.")
              message.channel.sendMessage(embed57)
            }
            break;
            case "/afk":
            if (!message.member.permissions.has('MANAGE_MESSAGES') ) return message.reply('you cannot use this command.')
            var text6 = message.content.split(' ').slice(1).join(' ')
            if (!text6) return message.reply("please say /afk followed with why you're AFK.")
            var embed58 = new Discord.RichEmbed()
            .addField("User now AFK:", message.author, true)
            .addField("Reason:", text6, true)
            .setColor("#f4414d")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendEmbed(embed58)
            break;
            case "/un-afk":
              message.delete(0)
            if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
            var embed60 = new Discord.RichEmbed()
            .addField("User is no longer AFK:", message.author, true)
            .setColor("#f4414d")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendEmbed(embed60)
            break;
            case "/fuckreece":
            var embed6 = new Discord.RichEmbed()
            .addField("Fuck Reece", "I only made this a command to catch his attention and hopefully raid me.", true)
            .setColor("#f4414d")
            .setFooter("This bot was made by NotJimbo via v3rm.")
            message.channel.sendEmbed(embed6)
            break;
            case "/accounts-diamond":
              message.delete(0)
              var embed66 = new Discord.RichEmbed()
              .addField("If it says true:", "True means it is a command.")
              .addField("If it says false:", "Fales means it is not a command.")
              .addField("If it says coming soon:", "Coming soon means it is coming soon.")
              .setColor("#b942f4")
              .setFooter("This message will delete in 20 seconds // This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed66)
              .then(msg => {
                msg.delete(20000)
              })
              var embed67 = new Discord.RichEmbed()
              .addField("NordVPN", "True", true)
              .addField("Crunchyroll", "True", true)
              .addField("Spotify", "True", true)
              .addField("Pornhub", "True", true)
              .addField("Hulu", "True", true)
              .addField("Steam", "True", true)
              .addField("Wish", "False", true)
              .addField("Origin", "Coming soon", true)
              .addField("Tunnelbear", "Coming soon", true)
              .addField("Minecraft", "True", true)
              .addField("MalwareBytes", "True", true)
              .addField("Fortnite", "Coming soon", true)
              .addField("Instagram", "True", true)
              .setColor("#b942f4")
              .setFooter("This message will delete in 20 seconds // This bot was made by NotJimbo via v3rm.")
              message.channel.sendEmbed(embed67)
              .then(msg => {
                msg.delete(20000)
              })
              break;
              case "/minecraft":
                  if(message.member.roles.find("name", "Diamond")){ 
                    var embed56 = new Discord.RichEmbed()
                    .addField("Sucess!","The accounts have been sent to your direct messages.", true)
                    .setColor("#42f44e")
                    .setFooter("This bot was made by NotJimbo via v3rm.")
                    message.channel.sendMessage(embed56)
                    message.author.sendMessage('You understand that if you leak the accounts, your perms will be removed: https://throwbin.io/Gl87IeI')
                    .then(msg => {
                      msg.delete(20000)
                    })
                }else{
                  var embed57 = new Discord.RichEmbed()
                  .addField("Uh oh!","This feature is restricted to diamond users only!", true)
                  .setColor("#f4414d")
                  .setFooter("This bot was made by NotJimbo via v3rm.")
                  message.channel.sendMessage(embed57)
                }
                break;
                case "/instagram":
                    if(message.member.roles.find("name", "Diamond")){ 
                      var embed56 = new Discord.RichEmbed()
                      .addField("Sucess!","The accounts have been sent to your direct messages.", true)
                      .setColor("#42f44e")
                      .setFooter("This bot was made by NotJimbo via v3rm.")
                      message.channel.sendMessage(embed56)
                      message.author.sendMessage('You understand that if you leak the accounts, your perms will be removed: https://throwbin.io/cZbsfDH')
                      .then(msg => {
                        msg.delete(20000)
                      })
                  }else{
                    var embed57 = new Discord.RichEmbed()
                    .addField("Uh oh!","This feature is restricted to diamond users only!", true)
                    .setColor("#f4414d")
                    .setFooter("This bot was made by NotJimbo via v3rm.")
                    message.channel.sendMessage(embed57)
                  }
                break;
                case "/purchase-diamond":
                    if (message.channel.type == "dm") {
                      var embed68 = new Discord.RichEmbed()
                      .addField("Hello!","To purchase diamond, purchase this T-Shirt: https://www.roblox.com/catalog/2367151063/2017-ROBLOX-logo", true)
                      .setColor("#f4426e")
                      .setFooter("This bot was made by NotJimbo via v3rm.")
                      message.channel.sendMessage(embed68)
                      var embed69 = new Discord.RichEmbed()
                      .addField("Once bought","When you have bought it, type the command /diamond-username followed along with your ROBLOX name you purchased it under.", true)
                      .setColor("#f4426e")
                      .setFooter("This bot was made by NotJimbo via v3rm.")
                      message.channel.sendMessage(embed69)
                    }
                    else{
                      message.reply("please use this command in DM's.")
                    }
                  break;
                  case "/diamond-username":
                      if (message.channel.type == "dm") {
                        var text9 = message.content.split(' ').slice(1).join(' ')
                        if (!text9) return message.reply("Please say /diamond-username followed with your ROBLOX name you purchased it with. :tada: ")
                        var embed70 = new Discord.RichEmbed()
                        .addField("User has purchased: ","Diamond", true)
                        .addField("ROBLOX Username:", text9)
                        .setColor("#f4426e")
                        .setFooter("This bot was made by NotJimbo via v3rm.")
                        client.channels.get("579377297476288512").sendMessage(message.author, "a")
                        client.channels.get("579377297476288512").sendMessage(embed70)
                        var embed71 = new Discord.RichEmbed()
                        .addField("Sucess!","A member of staff is now looking over your order. Please wait up to 24 hours.", true)
                        .setColor("#55d65c")
                        .setFooter("This bot was made by NotJimbo via v3rm.")
                        message.channel.sendMessage(embed71)
                      }
                      else{
                        message.reply("please use this command in DM's.")
                      }
                    break; 
                    case "/purchase-premium":
                        if (message.channel.type == "dm") {
                          var embed72 = new Discord.RichEmbed()
                          .addField("Hello!","To purchase premium, purchase this T-Shirt: https://www.roblox.com/catalog/3188195445/avatar-320060", true)
                          .setColor("#f4426e")
                          .setFooter("This bot was made by NotJimbo via v3rm.")
                          message.channel.sendMessage(embed72)
                          var embed73 = new Discord.RichEmbed()
                          .addField("Once bought","When you have bought it, type the command /premium-username followed along with your ROBLOX name you purchased it under.", true)
                          .setColor("#f4426e")
                          .setFooter("This bot was made by NotJimbo via v3rm.")
                          message.channel.sendMessage(embed73)
                        }
                        else{
                          message.reply("please use this command in DM's.")
                        }
                      break; 
                      case "/premium-username":
                          if (message.channel.type == "dm") {
                            var text10 = message.content.split(' ').slice(1).join(' ')
                            if (!text10) return message.reply("Please say /premium-username followed with your ROBLOX name you purchased it with. :tada: ")
                            var embed74 = new Discord.RichEmbed()
                            .addField("User has purchased: ","Premium", true)
                            .addField("ROBLOX Username:", text10)
                            .setColor("#f4426e")
                            .setFooter("This bot was made by NotJimbo via v3rm.")
                            client.channels.get("579377297476288512").sendMessage(message.author, "a")
                            client.channels.get("579377297476288512").sendMessage(embed74)
                            var embed76 = new Discord.RichEmbed()
                            .addField("Sucess!","A member of staff is now looking over your order. Please wait up to 24 hours.", true)
                            .setColor("#55d65c")
                            .setFooter("This bot was made by NotJimbo via v3rm.")
                            message.channel.sendMessage(embed76)
                          }
                          else{
                            message.reply("please use this command in DM's.")
                          }
                        break; 
                        case "/donate":
                            if (message.channel.type == "dm") {
                              var embed77 = new Discord.RichEmbed()
                              .addField("Hello!","How much would you like to donate?", true)
                              .setColor("#f4426e")
                              .setFooter("This bot was made by NotJimbo via v3rm.")
                              message.channel.sendMessage(embed77)
                              var embed78 = new Discord.RichEmbed()
                              .addField("/donate-10","This is the cheapest you can donate which will get you the donator role.", true)
                              .setColor("#8042f4")
                              .setFooter("This bot was made by NotJimbo via v3rm.")
                              message.channel.sendMessage(embed78)
                              var embed83 = new Discord.RichEmbed()
                              .addField("/donate-30","This donation also gives you donator role but it's more generous.", true)
                              .setColor("#e031c3")
                              .setFooter("This bot was made by NotJimbo via v3rm.")
                              message.channel.sendMessage(embed83)
                              var embed85 = new Discord.RichEmbed()
                              .addField("/donate-50","This donation gives you the donator role and the premium role if you don't have it.", true)
                              .setColor("#e07431")
                              .setFooter("This bot was made by NotJimbo via v3rm.")
                              message.channel.sendMessage(embed85)
                            }
                            else{
                              message.reply("please use this command in DM's.")
                            }
                          break;
                          case "/donate-username":
                              if (message.channel.type == "dm") {
                                var text11 = message.content.split(' ').slice(1).join(' ')
                                if (!text11) return message.reply("Please say /donate-username followed with your ROBLOX name you purchased it with. :tada: ")
                                var embed79 = new Discord.RichEmbed()
                                .addField("User has purchased: ","Donation", true)
                                .addField("ROBLOX Username:", text11)
                                .setColor("#f4426e")
                                .setFooter("This bot was made by NotJimbo via v3rm.")
                                client.channels.get("579377297476288512").sendMessage(message.author, "a")
                                client.channels.get("579377297476288512").sendMessage(embed79)
                                var embed80 = new Discord.RichEmbed()
                                .addField("Sucess!","A member of staff is now looking over your order. Please wait up to 24 hours.", true)
                                .setColor("#f442eb")
                                .setFooter("This bot was made by NotJimbo via v3rm.")
                                message.channel.sendMessage(embed80)
                              }
                              else{
                                message.reply("please use this command in DM's.")
                              }
                            break; 
                            case "/feedback-diamond":
                            message.delete(0)
                            if(message.member.roles.find("name", "Diamond")){
                              var text12 = message.content.split(' ').slice(1).join(' ')
                              if (!text12) return message.reply("please say /feedback-diamond followed with your feedback message.")
                              .then(msg => {
                              msg.delete(10000)
                              })
                              var embed75 = new Discord.RichEmbed()
                              .addField("Feedback Left:", text12, true)
                              .addField("Role Owned:", "Diamond")
                              .setColor("#42f44e")
                              client.channels.get("579688639919816704").sendMessage(message.author, "a")
                              client.channels.get("579688639919816704").sendMessage(embed75)
                              message.reply("your feedback has been sent!")
                              .then(msg => {
                              msg.delete(10000)
                              })                            
                            }else{
                              message.reply("you cannot use this command as you're not diamond.")
                            }
                            break;
                            case "/feedback-premium":
                                message.delete(0)
                                if(message.member.roles.find("name", "Premium")){
                                  var text13 = message.content.split(' ').slice(1).join(' ')
                                  if (!text13) return message.reply("please say /feedback-premium followed with your feedback message.")
                                  .then(msg => {
                                  msg.delete(10000)
                                  })
                                  var embed75 = new Discord.RichEmbed()
                                  .addField("Feedback Left:", text13, true)
                                  .addField("Role Owned:", "Premium")
                                  .setColor("#42f44e")
                                  client.channels.get("579688639919816704").sendMessage(message.author, "a")
                                  client.channels.get("579688639919816704").sendMessage(embed75)
                                  message.reply("your feedback has been sent!")
                                  .then(msg => {
                                  msg.delete(10000)
                                  })                            
                                }else{
                                  message.reply("you cannot use this command as you're not diamond.")
                                }
                                break;
                                case "/donate-10":
                                  if (message.channel.type == "dm") {
                                    var embed86 = new Discord.RichEmbed()
                                    .addField("Hello!","To donate 10 robux, purchase this T-Shirt: https://www.roblox.com/catalog/3196072695/Donation", true)
                                    .setColor("#d3214e")
                                    .setFooter("This bot was made by NotJimbo via v3rm.")
                                    message.channel.sendMessage(embed86)
                                    var embed87 = new Discord.RichEmbed()
                                    .addField("Once bought","When you have bought it, type the command /donate-username followed along with your ROBLOX name you purchased it under for the donater role. Example given: /donate-username NotJimbo", true)
                                    .setColor("#1fd184")
                                    .setFooter("This bot was made by NotJimbo via v3rm.")
                                    message.channel.sendMessage(embed87)
                                  }
                                  else{
                                    message.reply("please use this command in DM's.")
                                  }
                                break;
                                case "/donate-30":
                                  if (message.channel.type == "dm") {
                                    var embed88 = new Discord.RichEmbed()
                                    .addField("Hello!","To donate 30 robux, purchase this T-Shirt: https://www.roblox.com/catalog/3197197952/Donation-2", true)
                                    .setColor("#3128af")
                                    .setFooter("This bot was made by NotJimbo via v3rm.")
                                    message.channel.sendMessage(embed88)
                                    var embed89 = new Discord.RichEmbed()
                                    .addField("Once bought","When you have bought it, type the command /donate-username followed along with your ROBLOX name you purchased it under for the donater role. Example given: /donate-username NotJimbo", true)
                                    .setColor("#d6d624")
                                    .setFooter("This bot was made by NotJimbo via v3rm.")
                                    message.channel.sendMessage(embed89)
                                  }
                                  else{
                                    message.reply("please use this command in DM's.")
                                  }
                                break;
                                case "/donate-50":
                                  if (message.channel.type == "dm") {
                                    var embed90 = new Discord.RichEmbed()
                                    .addField("Hello!","To donate 50 robux, purchase this T-Shirt: https://www.roblox.com/catalog/3188195445/avatar-320060", true)
                                    .setColor("#b121ef")
                                    .setFooter("This bot was made by NotJimbo via v3rm.")
                                    message.channel.sendMessage(embed90)
                                    var embed91 = new Discord.RichEmbed()
                                    .addField("Once bought","When you have bought it, type the command /donate-username followed along with your ROBLOX name you purchased it under for the donater role. Example given: /donate-username NotJimbo", true)
                                    .setColor("#20c2ef")
                                    .setFooter("This bot was made by NotJimbo via v3rm.")
                                    message.channel.sendMessage(embed91)
                                  }
                                  else{
                                    message.reply("please use this command in DM's.")
                                  }
                                break;
                                case "/donation-sucessful":
                                    if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
                                    client.fetchUser('508625644792446986').then((user) => {
                                      var embed96 = new Discord.RichEmbed()
                                      .addField("Thanks for purchasing donation!","To obtain your role, please go to #bot-commands and type the command /username followed with your v3rm name.", true)
                                      .setColor("#42f450")
                                      .setFooter("This bot was made by NotJimbo via v3rm.")
                                      user.send(embed96)
                                      message.channel.sendMessage("Sucessfully sent DM!")
                                  });
                                  break;
                                  case "/premium-sucessful":
                                      if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
                                      client.fetchUser('465597930481385472').then((user) => {
                                        var embed97 = new Discord.RichEmbed()
                                        .addField("Thanks for purchasing premium!","To obtain your role, please go to #bot-commands and type the command /username followed with your v3rm name.", true)
                                        .setColor("#42f450")
                                        .setFooter("This bot was made by NotJimbo via v3rm.")
                                        user.send(embed97)
                                        message.channel.sendMessage("Sucessfully sent DM!")
                                    });
                                    break;
                                    case "/donation-sucessful-color":
                                        if (!message.member.permissions.has('ADMINISTRATOR') ) return message.reply('you cannot use this command.')
                                        client.fetchUser('508625644792446986').then((user) => {
                                          var embed98 = new Discord.RichEmbed()
                                          .addField("What color do you want your role to be?","Please DM NotJimbo saying a color.", true)
                                          .setColor("#42f450")
                                          .setFooter("This bot was made by NotJimbo via v3rm.")
                                          user.send(embed98)
                                          message.channel.sendMessage("Sucessfully sent DM!")
                                      });
                                      break;
              
              
              
              
              
              
              
              
              
              
              
              
              
              
            } 
        }); 

              client.login(TOKEN);