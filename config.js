module.exports = {
  Admins: ["836410909122887721", "UserID"], //Admins of the bot
  ExpressServer: false,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/mWD8WJpJyR", //Support Server Link
  Token: process.env.Token || "ODQ3NDQ3NTA1NTk1MTM4MDQ5.YK-M_g.-b6dGJ3aBaZVZ-9u_ddvcpMozBY", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "847447505595138049", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://tenor.com/view/music-headphones-listeningtomusic-myjam-mysong-gif-5028745", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "13bf46a105b941c4aa2c58d15a30ce3b", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "292d2bcf17ff4365804f88ea55462388", //Spotify Client Secret
  },
};
