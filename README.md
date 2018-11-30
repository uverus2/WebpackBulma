# kr-portfolio
This is a Portfolio Website which looks at my Education Experience and Skills and it is a part of my Website Design Assigment 

To VIEW THE WEBSITE PLEASE USE THE DEVELOPING SERVER with the command npm run build 
## Set up local files 
  
## Get File 
  git clone https://github.com/uverus2/kr-portfolio.git

## Set Up Webpack 
  install npm https://www.npmjs.com/get-npm
  
  npm init
  
  npm install 
  
  *you may need npm install -g win-node-env if you are using a windows machine 
  
  npm run build    use it when developing, it is a developing server which has a watch function and allows live preview of website on 
  localhost:8080.
  
  npm run build:prod  to create a dist folder after you finish editing 

## import format 
  
  SASS - @import 'file location';  use in main.scss and app.js
      
      
  JS  export function
      import { function  }  from './file location ';
      


## This project is a responsive portfolio website which follows this style guidline 

## HTML Coding Style
  
 HTML

  1. Indent by 2 spaces at a time
  2. HTML elements, attributes and their values to be lowercase 
  3. Use html5 doctype which is <!DOCTYPE html>
  4. Use valid HTML code – W3C HTML validator
  5. Use semantics tags instead of divs
  6. Provide alternative alt for multimedia
  7. Use a new line for every block, list, or table element and indent every child element
  

## Coding Style	SASS Coding 
 
  SASS
 
   1. Use predefined sizes for font 


   2. @include font-size-small = 12  and etc


   3. @charset ‘utf-8’ to be used in the main style sheet 


   4. Strings should be wrapped with a single quote 


## JS Coding Style
 
 JavaScript
 
  1. Braces () to be used to control structures
  
  
  2. The first statement of a non-empty block must begin on its own line
  
  
  3. Use clang-format
  
  
  4. Empty blocks should be concise 
  
  
  5. Each new block or block-like construct is opened the indent should be increases by two spaces
  
  
  6. One variable per declaration so no let a=1, b=2; 
  
  
  7. Exported functions should be defined directly on the exports object or else declared locally and exported separately
  


## Coding Style	CSS 

CSS

  1. Use valid CSS - W3C CSS validator
  
  
  2. ID’s and classes need to define their purpose with their name
  
  
  3. IDs’s and class names need to be short
  
  
  4. Use shorthand properties – background: - instead of background-color etc
  
  
  5. Do not use units after 0 values unless they are required
  
  
  6. Do not use 0s in front of values or lengths between -1 and 1. Not 0.8em but .8em
  
  
  7. For colour use hexadecimal notation 
  
  
  8. Multiple words in ID’s and class names to be separate by a hyphen. .test-sample {}
  
  
  9. Indent all rules within rules
  

10. @media screen, projection {

  html {
      background: #fff;
       color: #444;
  }
}  


11. Always have blank space line between rules


12. Use ‘ ’ instead of “ “



## Style	Naming Convention and Commenting
  
  CSS  
  
    The structure and role of file. Furthermore, every complex line should be commented as to what it does  

  SASS  
  
    Every variable and function need to be commented
    
  JS  
  
    1. Filenames can contain _ at the front and – between names 
    2. Package names should be named with lowerCamelCase
    3. Class, interface, and record names should be written in UpperCamelCase
    4. Methods in lowerCamelCase

  HTML Commenting 


    1. Coments can be used: 
    2. To Isolate problem code
    3. Large chunks of code are beginning and ending 
    4. Do not add too much comments 
    5. Do not comment everything
    6. Make sure comment tag is closed 
    7. <!—Correct Syntax 

  
