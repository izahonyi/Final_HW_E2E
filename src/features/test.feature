Feature: EPAM page

Scenario: EPAM page should work properly
    Given The window is set to max
    And I open the EPAM page

    Then Page title should "contain" "EPAM | Software Engineering & Product Development Services"
    And header logo is displayed
    And the magnifier is displayed

    When I click the magnifier
    Then the inputfield is displayed

   
    When I add "automation"
    And I click find
    Then the counter is displayed
    And the counter text should "contain" 'RESULTS FOR "AUTOMATION"'