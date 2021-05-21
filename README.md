# LOCK STEEL

## INTRODUCTION

Check the strength of your password *simply* and *quickly*, and with optional UI indicators. Lock Steel is lightweight, has no dependencies and is connected with the UI elements. Just pure ```CSS``` and ```VanillaJS```.

## FEATURES

This is the most simple password strength checker you will see online today. It definitely has alot of room for improvement, but it is starting by checking for the 4 most basic requirements for a secure password which are:
1. 8 or more words
2. At least 1 uppercase letter
3. At least 1 number
4. At least 1 special character

The algorithm measures the password strength in terms of percentage. Meaning the most secure is 100% and the least secure is 0%. There are a few UI components that are in charge of displaying the percentage. The first one is the indicator bar and the other is a little circle with the actual percentage digit in it.
The indication bar has 4 sections, all splited into 25% each:
1. 25% - red: Weak
2. 50% - gold: Medium
3. 75% - gold: Still Medium
4. 100% - green: Strong


## SETUP

#### HTML
You must have created an input field width a unique class of 'password', as that is what the css and JS will attach to.

    <input type="password" class="password"> 

To display the indicator bar, which is optional, you must copy and paste the following code anywhere in your document:
   
    <div class="progress-bar">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

#### CSS
Copy the lslstrength.css file to your css directory and include it in your document <head>:

    <link rel="stylesheet" href="/css/lslstrength.css">

#### JavaScript
Copy the lslstrength.min.js file to your js directory and include it at the bottom of the bottom of the document <body>:
        
        <script src="/js/lslstrength.js"></script>
        



