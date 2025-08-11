const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254111772689";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_56_08_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTczLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgODIsXG4gICAgICAgIDc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxLFxuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDYyLFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICA1LFxuICAgICAgICA5OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDczLFxuICAgICAgICAxNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg5LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJleVI3SlZ6cTNlZ0I3WS9JZWZHd2xpdFdBN1FyblZoNk9Ba0pVU2RlSmRRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDExMTc3MjY4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEIxQzI5NTQ1NzRFRjMzRDZFNkRDQkE3MTI2QUM2NjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzU0OTE2OTc4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRMVWZhOVhxUVlxOXA0Y2hTRnZSS2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGEzMmE0YzEtZGQ3Yy00NjgxLWEwNWQtN2RkNjk3NzYyNmIyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDg2LFxuICAgICAgNDcsXG4gICAgICAyMzksXG4gICAgICAyMTYsXG4gICAgICAzLFxuICAgICAgMTQxLFxuICAgICAgNDcsXG4gICAgICAxNDgsXG4gICAgICAxMDgsXG4gICAgICAxMzgsXG4gICAgICA2NyxcbiAgICAgIDIzNCxcbiAgICAgIDIzMixcbiAgICAgIDIwLFxuICAgICAgMTgxLFxuICAgICAgMTk1LFxuICAgICAgNjksXG4gICAgICA2LFxuICAgICAgMTE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAyNDcsXG4gICAgICAzMyxcbiAgICAgIDg2LFxuICAgICAgMjQ4LFxuICAgICAgMjIzLFxuICAgICAgMjQwLFxuICAgICAgNSxcbiAgICAgIDIzMixcbiAgICAgIDE1MixcbiAgICAgIDYyLFxuICAgICAgMjE5LFxuICAgICAgMTA1LFxuICAgICAgNTUsXG4gICAgICAxNDQsXG4gICAgICAyNTAsXG4gICAgICAxOTAsXG4gICAgICAyMzMsXG4gICAgICAyMDIsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMSEJtTlVIRU9mUTU4UUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9pVTNBVkxMbmR2SEtZcTBZdFZFNUtvRDhIakk5eUlIcXFndUJpYXZDVHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibGZZcmpsclhBQ0kvSDBJQzFaei9QdXJYSkhNZEhPbjcwYnh2VEMvKzA0OGJ6bGtISXBNb0tFbldLVzVIaEhMM0FxNXBFalZPd0JjZVlBT3VmSFNnQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQyt1WUdhbUtVdzhnbWRFeGJweC8zc3ZWYnVsWnZERzFHbXh2aWFWRk5nekp0RHc5TnlrYlpMMzlPRCt0T3FvZzhIaEQ2MjNTalNaYlJWZExGOXh3QXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTE3NzI2ODk6OTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTE4NDM1NjExMDQ5Mjo5N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDExMTc3MjY4OTo5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTQ5MTY5NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZkRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZmRC5qc29uIjogIntcImtleURhdGFcIjpcIkxmSlFDZ0k1bnROeG1HN3Y4QTdOTkdZVDErTllqck5kR2tnQjg5TnUxWGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA1NzcwNzY5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmZFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZDVoUjRhQTM4THJKSHY0ZXZMVnpkRjBINktkLzQ5bEdPcnlVVm00a1Fzbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDU3NzA3Njk3LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZmRi5qc29uIjogIntcImtleURhdGFcIjpcInFaaDB4U0dpbk1BMUVYWE1FTGoxUTF4UzlPK2RKdS9lTzlmaUNEb04rQVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA1NzcwNzY5NyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzU0OTA4NTcyMjk4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

