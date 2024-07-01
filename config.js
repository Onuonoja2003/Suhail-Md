const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347062886232";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_13_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNixcbiAgICAgICAgODgsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODgsXG4gICAgICAgIDcxLFxuICAgICAgICA2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDcxLFxuICAgICAgICA4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQzLFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODgsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMCxcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrTHcwME1vUFhQYU1STlRuVitSK05hWnNtd3NkekxGNnNPS1V0WHdYVEdjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJneEJDODM2LVFyLVBSZzlsYlFqRmdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiNjgxNDk2LTAxNGQtNGJkYi05MWQ1LWU0MmIyNGI0ZTIxOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAxOTgsXG4gICAgICAyMjcsXG4gICAgICAxNzQsXG4gICAgICAxNTIsXG4gICAgICAxMDksXG4gICAgICAyMjMsXG4gICAgICAyNDYsXG4gICAgICAyNDEsXG4gICAgICAxNCxcbiAgICAgIDYwLFxuICAgICAgOTQsXG4gICAgICA2MCxcbiAgICAgIDE4MSxcbiAgICAgIDIyLFxuICAgICAgODAsXG4gICAgICA3OSxcbiAgICAgIDEsXG4gICAgICAxMCxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAyNDEsXG4gICAgICAxMTYsXG4gICAgICAxNCxcbiAgICAgIDkzLFxuICAgICAgMTE5LFxuICAgICAgOCxcbiAgICAgIDIwNCxcbiAgICAgIDYxLFxuICAgICAgMTMwLFxuICAgICAgMjUsXG4gICAgICA5NSxcbiAgICAgIDExNCxcbiAgICAgIDExMCxcbiAgICAgIDEwNyxcbiAgICAgIDIyNSxcbiAgICAgIDExOCxcbiAgICAgIDI1MixcbiAgICAgIDIyNyxcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5VjY0ODI5SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2Mjg4NjIzMjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQwODc1MzYzNTIwNTIzOjE4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfp7hCQURCT1kgVklDVE9S8J+nuFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pYMHU4OElFSVB3akxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQXhJZlFyWjlXZVZuSkkwT1l5TC90cWNiMFcyV3Zna1hVTkROK0tKNURWYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlRjBIMUhuVXloWEJ2cnpmR2F3Y3ZLSHhUOGxNMmhEYkdLdWFFNUxQTEdWM2xLWlVzb01TdENEMUVoTTBSWXZmaUIrY2x5WTR2czVtcUhUVlljOE5BQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5aHRkWkI3RWtrVEFSaTRBMTFwQ0dud1J6RkdhMkYvTjlnU3NuL1lQZEYxQXJVUDN1V2ovOXVuMm90eDNZeFh3VXlFdGxnZHZybGNZNnVUbVFsSG1Bdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDYyODg2MjMyOjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODc1NTg5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFh0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMWHQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ2RTdoaHdzOUEvNWtPM0JwRXdVeElsRGpPaHd3ZnROR2ovOTVMQS9hcGlzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzMTQxNDAxODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTg3NTU5Mjc2MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
