# is120-hw10-Spencer-Kimball

**What specific loops did you use in this assignment and why?**

I used a for loop to iterate through the items that were in the weather temperature list since it would keep iterating as long as there were items that were inside of the list. I didn't need to use any other loop for this assignment.

**Why do you think it's important that your cards are generated dynamically based on the array length instead of hardcoded in HTML? How would you add a 6th or 7th day to your forecast?**

The second question of adding a 6th or 7th day shows why it is important to make it dynamic, because if everything was hardcoded in html you would have to change or create a bunch of divs, whereas with dynamic code all you would need to do is change the loop iteration from being i < 5 to i is less than the number of days that you want + 1 (due to the 0 indexing).

**What was the most difficult problem of this assignment and how did you work through it?**
Trying to inject CSS directly into the new div's that were being added. For example, adding border radius and styling a new div keep in a css file is not that hard, but having to learn the new syntax to do the same thing in javascript has been an interesting learning curve.

Also trying to get the button to only display the cards once the Check Weather button is selected was weird. I added the event listener, but at the beginning it would just show all of the cards right at the beginning on load. AI helped me to realize that I had to put the addEventListener into a function, even though the click event doesn't occur on load. 

Another hard part was trying to not just get the "check weather" button that I have to not add 5 more days to the forecast. I knew this was happening because of the push, but trying to pop them off was not working as easily as I had thought. I decided to just try and re-write over the ones already created by using an index weather_temps_curr[i] instead of weather_temps_curr.push(), and that fixed this problem.

**Notes:**

Currently the check weather button creates a new randomized group of 5 temperatures for the next 5 days, which for a true weather forecast is pretty confusing that the expected temperature for tomorrow could be 10 degrees and then 95 after just one click.
