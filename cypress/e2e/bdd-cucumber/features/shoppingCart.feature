Feature: Shopping cart
Scenario: Adding and removing random items
Given I add four random items to my cart
When I view my cart
Then I find total four items listed in my cart
When I search for lowest price items
And I am able to remove the lowest price item from my cart
Then I am able to verify three items in my cart