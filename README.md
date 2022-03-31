# Note Taker

# Purpose
A service that you can keep track of notes for personal or business matters.

## Built with
* Express.js


AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete


GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

Thank you for the submission Tyler, you have a solid foundation for your Note Taker. When I went to try and create a note I receive an error in the console log regarding the POST route and there was also an error regarding the GET route.  Please see below: 


index.js:37          POST https://desolate-reaches-35174.herokuapp.com/api/notes 404 (Not Found)
saveNote @ index.js:37
handleNoteSave @ index.js:74


GET https://desolate-reaches-35174.herokuapp.com/api/notes 500 (Internal Server Error)

Thus, I was unable to create or save my notes, which in turn affects the ability of the front-end to connect to the backend, to create the unique IDs. 

As you continue to work and develop this application, remember to commit often and be descriptive about what you are working on. Also, your README needs a screenshot or two and the link to your deployed application. Don't get discouraged Tyler, you can do this!! --Central Grader Shelby