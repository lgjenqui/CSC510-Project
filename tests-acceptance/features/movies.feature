Feature: As an end user
         I want to fill out a form
         So that I can have a movie recommended to me

Scenario: Filling Out Form to get a movie recommended
Given I am at the home page
When I click the Suggest me movies button
Then I am prompted to answer the following question: "What is the occasion?"
And I see several possible occasions
When I select "Date Night" for the occasion
And I click the next button "1"
Then I am prompted to answer the following question: "How are you today?"
And I see a scale of faces ranging from a sad face to a happy face
When I select "Happy" from the faces
And I click the next button "2"
Then I am prompted to answer the following question: "How old would you like the movie to be?"
And I see two empty year inputs
When I select from "" to ""
And I click the next button "3"
Then I am prompted to answer the following question: "Do you have a preference for the age-appropriateness of the movie?"
And I see MPAA rating options
When I select a rating of "G"
And I click the submit button
Then I see "The Shaggy D.A." movie suggestion based on my answers
