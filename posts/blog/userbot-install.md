---
title: "How to Deploy a Telegram Userbot"
date: "2021-05-02"
desc: "Deploy your own userbot."
tag: "userbot"
---

# Introduction

A Telegram userbot is basically something that can help you manage stuffs here and there in Telegram such as groups etc. How it works is that you type the command, for example `.time`, then you send it anywhere in Telegram, the userbot will detect the command and edit your message to show you the output of current time in your local timezone in that message. Take some note that some commands do require specific conditions to be met in order to work properly. An userbot is not like usual Telegram bots which have their dedicated username on it but it acts as a session of your own account. An userbot is safe to use providing you don't use something that Telegram is probably having some sense of dislike to such as `.spam`. You can host, for example, [my Telegram userbot](https://github.com/irvanmalik48/Lappbot) in [Heroku](https://heroku.com/deploy?template=https://github.com/irvanmalik48/Lappbot/tree/master). Heroku gives you 550 hours of free monthly usage as well as 450 more if you add your credit card as your billing info. Don't worry as it's completely free and you would not have to pay any cents at all.

# Setting Up

1. API Hash and API ID

   - Login to [my.telegram.org](https://my.telegram.org) with your Telegram account.
   - Go to **API Development Tools**, fill out the form for creating an app. You'll get the required API Hash and API ID there.
     > Note: Nothing really matters, fill in anything that you want.

2. Generate a session string

   - Go to [here](http://sessiongen.irvanmalik48.repl.run/) and click on run button on top.
   - Enter the API Hash and API ID you've got from the previous step.
   - Enter your phone number with country code (example: +62896xxxxxxxx).
   - Follow further instructions then check your **Saved Messages** in Telegram, there will be your session string.
     > Note: Don't share your session string to anyone, anywhere, anytime. Imagine a key to your house, then imagine if it's in someone's hand.

3. Get BOTLOG_CHATID (Optional but recommended)

   - Create a group with you and add @MissRose_bot to your group.
   - Type `/id` and send it to the group. Rose will give you the group chat ID.
     > Note: Don't leave out the - in there. It is essential.

4. Get Heroku API key
   - Make a Heroku account [here](https://signup.heroku.com).
   - Head [here](https://dashboard.heroku.com/account) and get your Heroku API key.
     > Note: Heroku gives you free 550 hours of usage. Enter in your billing info to receive another free 450 hours.

# Deploying

1. Head to Lappbot's Github repo [here](https://github.com/irvanmalik48/Lappbot) or [use this link](https://heroku.com/deploy?template=https://github.com/irvanmalik48/Lappbot/tree/master) to directly deploy it to Heroku.
2. Fill your app name and choose which region is closest to your location.
3. Fill in the form with everything you got from previous section. Also read through the options of configuration and add/change them according to your own needs.
   > Note: You can change the values anytime you want later on.
4. Leave the logging options as they are (It's enabled by default).
5. Click on **Deploy App** option at the bottom of the page.
6. Click on the **View** button once it's successfully deployed.
7. Navigate to the **Resources** tab, click the pencil icon, and turn the worker on if it's not enabled yet.
8. Click on **More** button on the top right, and then click on **View logs**.
9. If it prints `Congratulations, the bot is up and running! Send .help in any chat for more info.`, then everything's good.
   > You can send `.help` in any chat for more info. If you want info on specific module, send `.help` followed by the name of module listed in the `.help` section you've opened before.

# Updates

Send `.update` in any chat. If there's any, send `.update deploy` to update the userbot.

# Wrapping up

There you go! That's all you need to deploy a userbot. As always, thank you for following this guide.
