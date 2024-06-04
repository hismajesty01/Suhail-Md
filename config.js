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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349068644760";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_41_06_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICA5MixcbiAgICAgICAgMTI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDksXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg4LFxuICAgICAgICA2NyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjExLFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMyLFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUTW44d2t0ZFlmN2NXbGVJaXduYVIxTDJqTFY3Zm9HRnc2SktoK1ZiNUVvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsLUdXaURDZlEzU2lZLU1iMHV6a25nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjhlYzk2ZDVmLTIwZjEtNGQ0YS04YTUwLWUxYWFlY2M1ZjU1MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAxODgsXG4gICAgICAyNTQsXG4gICAgICAyMzcsXG4gICAgICAxNCxcbiAgICAgIDUwLFxuICAgICAgNTQsXG4gICAgICA4MCxcbiAgICAgIDIzNCxcbiAgICAgIDcwLFxuICAgICAgMTAyLFxuICAgICAgMTgzLFxuICAgICAgNzIsXG4gICAgICA2OSxcbiAgICAgIDEwNixcbiAgICAgIDk5LFxuICAgICAgMTg2LFxuICAgICAgMjI3LFxuICAgICAgMTE4LFxuICAgICAgMTM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMTM0LFxuICAgICAgMTcyLFxuICAgICAgNjAsXG4gICAgICAzNixcbiAgICAgIDQsXG4gICAgICA0NixcbiAgICAgIDEyMCxcbiAgICAgIDE3LFxuICAgICAgMTg3LFxuICAgICAgMTkwLFxuICAgICAgNTAsXG4gICAgICAyMyxcbiAgICAgIDEzMSxcbiAgICAgIDE1MixcbiAgICAgIDE2NyxcbiAgICAgIDExNixcbiAgICAgIDk1LFxuICAgICAgMjUsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJGRE1WREVEQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2ODY0NDc2MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWFqZXN0eSBIdWJcIixcbiAgICBcImxpZFwiOiBcIjkxNjkzMjkwMzYxMDU0OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5ZK0owSEVNbmIvYklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzN3dXMjJjeGFzZlZ0V25DTG9tSUUxZ1VDRWhlNDZtd2pGRmFtS1VsWmdNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFnUjlLWnFQUlZhTTB0TkhBMVpacFo5RXNuWlpPZTFqZ3NBbXA5VmtGU1MyK0hMaXZ4MWxVOWpOaVh3MXlVbUNEa0Q3bVY5eXBGcTlUSXdZODhINkRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktqaVhnbG9zOVloZTlKalM1K2hNVlNveXZjVUFLYlJONU5KSHFXNjFkMkc1TW9NRDhRbU8yczJidUlrUjVkRk5qVjhkVUxUeEVSVnVlOHRBUjNLTEN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjg2NDQ3NjA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzUzMDA2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhqa1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGprLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRzNFcjgxazJXdUFVbG9MS01RVXV4a3JCVW1rOFQxS3VqV2VYUTFQOFlRND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQxODQyOTY4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc1Mjk5NTg0MTZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
