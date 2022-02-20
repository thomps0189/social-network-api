# social-network-api

# Table of Contents

- [Description](#description)

- [Installation](#installation)

- [Usage](#usage)

- [Links](#github)

# Description

This is the backend code for a social network api for a social media startup. All user information can be created, edited (put), added (post), and deleted. Additionally, users can add friends. Thoughts can also be added and delted with reactions that can be added to the thoughts. It uses a NoSQL database to allow for a large amount of unstructured data.

# Installation

express, mongoose, mongoDB

# Usage

WHEN I enter npm start the server is connected and the Mongoose models are synced to the MongoDB database.
WHEN I used GET routes for users or thoughts I am presented a list of all requested information.
WHEN I POST to Users, Thoughts, and Reactions I am able to add new items to the existing list
WHEN I PUT to User I am able to edit the User's information
WHEN I DELETE to User, Friend, or Reaction I am able to delete all information that was created based off the id of that item.

# Links

- GitHub Link: https://github.com/thomps0189/social-network-api
- Video Links:
  Video Part 1: https://www.youtube.com/watch?v=u_GAtVXeaKc
  Video Part 2: https://youtu.be/DASrFpdG8Qc
