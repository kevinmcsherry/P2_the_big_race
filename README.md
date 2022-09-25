# The Big Race!

The Big Race is a gaming website which offers the user an opportunity to play a race car game.  The instructions are simple, the user must pick a race winner with three cars to choose from.  Each time the user selects the correct car, they receive a point.  Each time a particular car wins, that colour of car receives a point.  If its a draw, no points are allocated.  The game continues until a car, the user or both get to 5 points.
The page is very clearly laid out with clear instructions to the user in order to carry out the game, and in order to complete the individual races and ultimately the game is really simple and requires only a mouse click by the user.
Its a fun game in which users of any age can enjoy and even compete among friends!

![Web Page view](assets/images/WebPage.png)


# Features 

As a one page WebSite, the 'features' are minimial.  Although I have added a number of subtle features to allow for the ease of use and enjoyment for the user.

- __Click on Car__

    - In order for the user to kick off the game (instructions added), the user can click on any of the cars.  This is the car they are choosing to win the race.  While the user mouses' over the cars, they enlarge.  Once the user clicks on the Car, the race begins.  Each time the race restarts, the user must then repeat this task.


- __Automatic race restart__ 

    - I originally had two buttons on the screen, one for rest race and another for reset game.  Reset race was to bring the cars back to the start line, reset game was to completely reset all scores and race. 
    I decided that it would be slicker, to make the resetting of the race automatic.  So when the race finishes (last car comes in) all cars will bring themselves back to the start line, in which the user must select another car.  I felt this was cleaner than asking the user to select a button every time a race ends. 

- __Reset Game__

    - There is a button to reset the game, which means the whole 'competition' will re-start.  Thi will reset all scores and also bring the cars back to the starting line.

- __Scoring__

    - This was probably the most complicated part of the project.  I had to try and determine which car won the race, and also whether the user had chosen the winner.  Based on the previous, that would determine the scores.  Scores are based on the individual cars plus the user.  If the car wins and the user selected correct then both the car and the user scores 1 point.  If the car wins and the user did not select, the car gets a point.  If the user selects the correct car, the car and the user gain a point. 

- __Scoring_Display__

    - There is a scores display area which displays each car plus the user scores.  These numbers increment automatically based on the results of each race.  These scores also go towards determining the overall winner. 

- __Determining the winner__

    - The first to five wins the overall competition.  The score has to be determined when taking into consideration wins, draws and individual collective results.  When a particular car and/or user wins, there will be a message which appears to display this winner in a flashing animation.  *bug - when two different winners happen, only one displays.  
    I also had to determine the winner due to random number of race duration rather than an image crossing the line.

- __Game Restart__

    - When the game ends (5 is reached), the screen will display the winner, and after a few seconds a reset of the race and the whole game, so the new 'game' can start again.


 ### Features Left to Implement

  - I would like to add a further car to the race and to allow a user to select a car for the full game...so they stick with the same car throughout.
  - Another idea is to allow the user to select a particular type of car.. so I could have offered different cars to race.
  - When a championship is won, perhaps a bigger (better) award presentation.  Maybe a trophy image presented on screen.

  ## Testing

  - The testing of this project was really deep.  I thought of an idea and went with it, and tried to get it to work through trial and error.  The bulk of my testing was carried out during the development period, rather than post development.  The majority of my testing was a natural stage of development and not documented.  Every single piece and version of my code was tested, as that was what is required to ensure that it actually does what one would hope.  

  - The deepest testing came from trying to distinguish the distance of the race in relation to the screen size.  This took quite a long time and changing of code.  *Bug - depending on the size of screen, the cars will travel beyond the finish line, and even screen. I added a function to allow for screen size and length of race.

  - The game I chose was particularly difficult when attempting to be responsive.. its generally a tough game to carry out in a small space which can become smaller.

  - I tested the product across Browsers without issue. [Browser Testing](https://drive.google.com/drive/folders/1EKGSoQa4eIWfCXsbogJ9xxnBe28wmN1-) 

  - All offical technical testing was carried out and passed in relation to good scores and without error (Lighthouse, Jshint, CSS validator). [Code Testing](https://drive.google.com/drive/folders/1tRKz-6E12cBpUkQMVV4lBziFoajAmrc6)
  **Bug - I was receiving a poor score on Best practise because of the size and ratio of images... I had smaller cars, but had to enlarge and use as original size to pass this.  I think the cars are a bit big.
  
  - User story and feature testing - My website is somewhat straight forward from an end user point of view, so the user stories are quite minimal, but I have still listed out and detailed the testing of these, the feature testing is much more comprehensive.  I still don't think the list of tests will do the amount of testing that was carried out justice, as it took 100s of tests of the same feature to accomplish what was required.  Please find USer Story and feature testing here - [User Story and Feature Testing](https://docs.google.com/spreadsheets/d/1KsQf9enNtaa6bZmAcmcCaRmnD_h3sid6H6iKpDpMRNc/edit#gid=0)



