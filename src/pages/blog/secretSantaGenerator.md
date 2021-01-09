---
title: "Secret Santa Generator NodeJS"
date: "2020-12-28"
---

I've created a program to create my family secret santa for this year due to the current pandemic.
It takes a JSON file of people names and their email address, randomly select a person with another person, then send them an email of their secret santa.
The way it does the generating random secret connection through recursion of choosing random numbers and adding to an array.
Basically the array have numbers from 0 to the length of the JSON object that are in random position in the array besides the same number of the index of array.
Once the randomized array of numbers are created, each person within the JSON object will be sent an email to the number index of number within the array.
<br>
I also designed an HTML template for email, so the email the person receives will look pretty. It was a challenge to develop a good HTML email template because
each email service provider and different medias (ex: computer and phones), I had to create something that worked for every email. So, I had a basic green background with rounded border that was good for white and black text. Therefore, when someone had dark mode, the text still showed on the green background. The layout was
originally done with HTML tables, however I scraped that because I only had one text even though I wanted to bedazzle the email.
<br>
Overall, the program works smoothly with my family. Everyone got only one person giving them a present that wasn't from themselves.
My Christmas was very fun, as I got a lot of peanut butter and jelly for making tons of PB&ampJ sandwich :)
<br>
Link to my GitHub code if you would like to try out my <a href="https://github.com/owenbean400/secretSantaGenerator" rel="noreferrer">Secret Santa Generator</a>. You will need NodeJS to execute the javascript file.
<br>
<br>
<a href="https://github.com/owenbean400/secretSantaGenerator" rel="noreferrer">GitHub Secret Santa Generator</a>
