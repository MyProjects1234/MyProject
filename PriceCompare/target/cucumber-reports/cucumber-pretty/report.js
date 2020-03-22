$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PriceCompare.feature");
formatter.feature({
  "line": 1,
  "name": "iPhone XR (64GB) - Yellow price comparision",
  "description": "I want to comapre iPhone XR (64GB) - Yellow price in Amazon and Flipkart",
  "id": "iphone-xr-(64gb)---yellow-price-comparision",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "iPhone XR (64GB) - Yellow price comparision",
  "description": "",
  "id": "iphone-xr-(64gb)---yellow-price-comparision;iphone-xr-(64gb)---yellow-price-comparision",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@runTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "navigates to amazon",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "page is loaded, searches for iPhone XR 64GB Yellow in amazon",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Gets the price of the selected iPhone",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "navigates to flipkart",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "page is loaded, searches for iPhone XR 64GB Yellow in flipkart",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Gets the price of the selected iPhone",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "find which website has lesser value",
  "keyword": "And "
});
formatter.match({
  "location": "priceComp.user_opens_browser()"
});
formatter.result({
  "duration": 11487621299,
  "status": "passed"
});
formatter.match({
  "location": "priceComp.navigates_to_amazon()"
});
formatter.result({
  "duration": 2003874300,
  "status": "passed"
});
formatter.match({
  "location": "priceComp.page_is_loaded_search_for_iPhone_XR_64GB_Yellow_in_amazon()"
});
formatter.result({
  "duration": 2307865100,
  "status": "passed"
});
formatter.match({
  "location": "priceComp.gets_the_price_of_the_selected_iPhone()"
});
formatter.result({
  "duration": 3365898700,
  "status": "passed"
});
formatter.match({
  "location": "priceComp.navigates_to_https_www_flipkart_com()"
});
formatter.result({
  "duration": 15303448200,
  "status": "passed"
});
formatter.match({
  "location": "priceComp.page_is_loaded_search_for_iPhone_XR_64GB_Yellow_in_flipkart()"
});
formatter.result({
  "duration": 3801878000,
  "status": "passed"
});
formatter.match({
  "location": "priceComp.gets_the_price_of_the_selected_iPhone()"
});
formatter.result({
  "duration": 4498319500,
  "status": "passed"
});
formatter.match({
  "location": "priceComp.compares_the_price_on_both_the_website()"
});
formatter.result({
  "duration": 44900,
  "status": "passed"
});
});