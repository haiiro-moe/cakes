# Asuka

A Discord bot for a community. The currently active version features very basic moderation, user profiles and a couple fun features. At first I just wanted it to be a bot for very specific use cases, but it eventually became a relatively big project, especially with the current rewrite I am doing.

## The active version?

Right now the bot that is online is made using [nyx](https://github.com/nyx-discord/nyx), a simple but powerful framework for Typescript using [Discord.js](https://discord.js.org). This version uses MongoDB with [mongoose](https://mongoosejs.com/) for its database, and has quite a few (pretty scuffed) custom solutions for problems such as i18n, schedules and database abstractions. This version has a major problem with schedules, which caused me to pretty much lose interest in further developing it, thus the new rewrite that's in progress currently.

## The rewrite

With no commits as of writing this description, this version is the latest one. Using [barthofu's brilliant TSCord](https://github.com/barthofu/tscord) template, this version of Asuka uses the built-in plugin system to make everything modular. Under the hood it uses SQLite, since I don't particularly have a need for a fast database for just a handful of servers, the bot is pretty much private either way. The plans for this rewrite is to have the bot replace some of the large bots in the server, like Carl or Tatsu's XP system.

[Check out the repository on GitHub!](https://github.com/Kex1016/asuka)
