# TensorFlow-Machine-Learning-Project
4th year emerging technologies machine learning project using TensorFlow, &amp; Flask

# Project specification

## Overview

In this project you will create a web application in Python to recognise digits in images. Users will be able to visit the web application through their browser, submit (or draw) an image containing a single digit, and the web application will respond with the digit contained in the image. You should use tensorflow and flask to do this. Note that accuracy of approximately 99% is considered excellent in recognising digits, so it is okay if your algorithm gets it wrong sometimes.

## Instructions

Create a git repository with a README.md and an appropriate gitignore file. The README should explain who you are, why you created the application, how you created it, how to download and run it, and summarise any references you have used.
In the repository, create a web application that serves a HTML page as the root resource. The page should contain an input where the user can upload (or draw) an image containing a digit, and an area to display the image and the digit.
Add a route to your application that accepts requests containing a user input image and responds with the digit.
Connect the HTML page to the route using AJAX.

# Introduction

## Requirements

To run this program we need the following installed on our system:
 1. [Python](https://www.python.org/downloads/)
 2. [NPM](https://www.npmjs.com/get-npm)
 3. [TensorFlow](https://www.tensorflow.org/install/)

Once NPM is installed, Install Angular: 
`npm install angular@1.6.6`

Once Python is installed, install Flask:
`pip install flask`

## Quick start
To begin we will need to launch an instance of CMD or Terminal etc.
Then run the following command :

`cd to/the/directory/TENSORFLOW-MACHINE-LEARNING-PROJECT/`

Once in our project directory we first do the following:

`python setup.py`

This will run all prequisits and setup any directories etc. required. 

Next We will run webapp.py:

`python webapp.py`

...

