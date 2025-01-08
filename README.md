<div align="center">
<a href="https://discord.gg/8srzuP97Rb"><img src="https://github.com/user-attachments/assets/13655837-78ba-4d0e-a97f-79a28ed60ec8" alt="US Army Logo" width="20%" height="20%"></a>
</div>

## Why?

This bot was made as a utility bot for [The US Army ArmA-3 Unit.](https://discord.gg/8srzuP97Rb)

- It has multiple types of commands. (Tag, fun, and useful)
- Tag commands are easy ways of pasting text
- The useful commands are stuff that is actually, yk, useful.
- Fun commands do stuff like nuke people.

1. Clone the repo
```bash
git clone https://github.com/a3-us-army/USA-Core
```

2. Download the dependencies
```bash
npm install
```

3. Deploy the bot
```bash
npm run deploy
```
4. Add your vars to the bot. (Base URL = your worker link, eg. https://main-bot.xanderxx.workers.dev)
```bash
npx wrangler secret put DEPLOY_SECRET
npx wrangler secret put DISCORD_CLIENT_ID
npx wrangler secret put DISCORD_PUBLIC_KEY
npx wrangler secret put DISCORD_BOT_TOKEN
npx wrangler secret put BASE_URL
npx wrangler secret put DISCORD_CLIENT_SECRET
```
5. Deploy the bot again
```bash
npm run deploy
```
6. Finally, deploy your commands. Go to https://{BASE_URL}/deploy?secret={DEPLOY_SECRET}

## More:

<details>
  <summary>Commands</summary>
  
## Useful Commands:
- /help - Show the help menu.
- /ping - Bot replies with "Pong"
- /update-modpack - Keep track of who has updated their modpack.
- /info - Information on this bot.
- /link list - List all of the shortened links.

## Tag Commands:
- /rules - Send the CAG Discord server rules.
- /event-times - The current op times.
- /server-info - All the server info needed to join.
- /socials - The CAG social media accounts.
- /mos-list - The MOS listings.
- /recruitment-message - The recruitment message. 
- /staff-list - The people who hold the power in CAG
- /list-links - List all of the shortened links.

## Fun Commands: 

- /nuke - Nuke a place
- /rate - Get a very real and 100% totally accurate rating of something.
  
</details>
