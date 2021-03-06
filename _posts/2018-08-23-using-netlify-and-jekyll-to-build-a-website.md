---
layout: blog
author: Tobias Barsnes
date: 18-08-2018
image: 'https://source.unsplash.com/1920x1080'
title: Using Netlify and Jekyll to build a website
---
Some months ago I looked into creating a website for my esports team. So, I searched up the best methods of doing it, and most articles told me to use Wordpress, well I did not want to do that, as I wanted to have control over everything, and for free. I had been using [Netlify](https://www.netlify.com/) and github to host a [test site](https://findingfutures.eu) I created with my friend. We were really happy with how their services worked, but wanted to be able to change things in a simple dashboard, and not having to code everything, bit by bit. The answer was right in front of us, to use Jekyll and Netlify CMS. You can find the finished code for this tutorial in [this github repo](https://github.com/Barsnes/fox_eternity), and contact me if you have any further questions.

## What can you do with Jekyll and Netlify CMS?

Well, good question, it's actually a quite simple one to answer. Jekyll is a static site builder, meaning that it will take different files, typically markdown or html, and put them together in one html file. This is useful for a single, or multi-page website, such as a blog or a portfolio. Using this with Netlify CMS (Content Management System), will make it easy to push any type of content to your website. It is kind of like baking a cake, you need 

I will not be covering how to install Jekyll, but I will be showing you how to install, and use Netlify CMS. If you have any further questions, you can either go to the [Jekyll docs](https://jekyllrb.com/docs/), [Netlify CMS docs](https://www.netlifycms.org/), or contact me.  

## Deploying your site with Netlify

To use Netlify's awesome CMS, you will need to host your website using their platform, and to implement their [Identity](https://www.netlify.com/docs/identity/). Identity will let you have a log in method to you CMS dashboard, and even have 5 invite only users, for free! 

We will start of by creating a new folder on our computer, with your fresh Jekyll website. I am using MacOS, but I will be showing both commands for installing and creating the Jekyll setup. Start by opening your terminal or Ruby terminal, then creating a new folder somewhere on your computer, and type the following commands;

To start of, we will create a new Jekyll site in the folder you just created,

```
jekyll new Desktop/fox_eternity
```

If you have any errors, make sure you have bundler installed, and that if you are on Windows, you are using the Ruby Terminal. On Mac, you might also have to write "sudo" before you execute the command.

Next, we will create a new folder in the root directory, called "admin". Inside this folder, you will place two files, and these are the ones that will make Netlify CMS work. The first file we will create is index.html , the code will be the following

```
<!doctype html>

<html>

<head>

  <meta charset="utf-8"/>

  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <title>Content Manager</title>

</head>

<body>

  <!-- Include the script that builds the page and powers Netlify CMS -->

  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>

</body>

</html>
```

Next, we need a config.yml file. This file is where you will create new fields, fields are the tabs where you can add or edit your content.

```
backend:

  name: git-gateway

  repo: Barsnes/fox_eternity

  branch: master

media_folder: "assets/uploads"
```

Where it says "repo", you will need to put you own github repo url, so if your github username is "Jekyll", and your repository name is "website", you link will be "Jekyll/website".

You media_folder, is where all the pictures you upload will be stored. In my case, I will create a new folder in my root directory, named "assets", and then another folder inside named "uploads". 

Next, we will be creating a way for us to login using Netlify, to use the login, you would need to deploy your site to Netlify. Simply go to [Netlify's website](https://www.netlify.com/), create a user using Github, and add your repo using the "Add new site from Git" button. Next, choose the correct repository that you want to be published, and add the correct build commands if Netlify does not automatically do this.

![Build commands in Netlify dashboard](/_assets/images/screen-shot-2018-09-08-at-11.21.16.png)

You can always change these build commands later, if you have any typos. Next, navigate over to the Identity tab on the dashboard of you newly added site. Here, you will need to press "Enable Identity", and then we will only need to add a small bit of code to our website. 

![Enable Identity](/_assets/images/screen-shot-2018-09-08-at-11.39.06.png)

Go to the settings and usage of Identity, and scroll until you find the subheading "Registration". I will enable Invite-Only, this will make sure that anyone who does not have the login information for your website, will not be able to create an account and edit your content. We will need to add one line of code in the head tag of both you index file, and your index file of your admin/index.html file. 

Before I do this, I will create a folder in my subdirectory named "_includes", so I can easily have the same footer and header on all my pages. Inside this folder, I will add a new file named "header.html", and I will add the following code

```
<!DOCTYPE html>

<html lang="en">

  <head>

    <meta charset="utf-8">

    <title>Fox Eternity - {{ page.title }}</title>

    <link rel="stylesheet" href="assets/css/master.css">

    <!-- Netlify Identity -->

    <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

  </head>

  <body>
```

You have to make sure you include the Netlify Identity script, as this is what makes your login work.
