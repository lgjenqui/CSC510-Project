const importCwd = require('import-cwd');
const { Given, When, Then } = importCwd('@cucumber/cucumber');
const { browser, $, element, by } = require('protractor');
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const request = require('request');
const axios = require('axios');


// /////////
// Feature 1
// /////////

var base_url = "http://localhost:3000/";

Given(/^I am at the home page$/, async () => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal('Pick a movie for me please!');
    await $("button[name='Start now!']").click();
    


});



When(/^I click on Date Night$/, async () => {
  const radioButton = element(by.css('input[name="occasion"][value="Date Night"]'));
  await radioButton.click();
  await $("button[name='Next1']").click();
});

When(/^I click on Happy$/, async () => {
  const e= element(by.id('happy-image'));
  await browser.executeScript("arguments[0].click();", e.getWebElement());

  await $("button[name='Next2']").click();
});

When(/^I don't specify a range for how old I would like the movie to be$/, async () => {
  await $("button[name='Next3']").click();
});

When(/^I don't specify age appropriateness and submit$/, async () => {
  const e = element(by.id('no-preference-check'));
  await e.click();
  await $("button[name='Submit']").click();
});



// /////////
// Feature 2
// /////////

Given(/^I am on the home page$/, async () => {
  await browser.get('http://www.example.com');
  const pageTitle = await browser.getTitle();
  expect(pageTitle).to.equal('Example Domain');
});

var base_url = "http://localhost:3000/";

Given(/^I am at the Add or update a movie page$/, async () => {
  await browser.get("http://localhost:4200/");
  await expect(browser.getTitle()).to.eventually.equal('Pick a movie for me please!');
  await $("a.nav-link[href='/update-movies']").click();
});

Given(/^I see the form to add or update a movie$/, async () => {
  const form = element(by.css('#movie-update-form'));
  await expect(form.isPresent()).to.eventually.equal(true);
});

When(/^I click the field for ‘Movie title’$/, async () => {
  const movieTitleField = element(by.css('#movie-title-input'));
  await movieTitleField.click();
});

When(/^I enter the movie title: (.+)$/, async (title) => {
  const movieTitleField = element(by.css('#movie-title-input'));
  await movieTitleField.sendKeys(title);
});

When(/^I click the field for ‘Genre’$/, async () => {
  const genreField = element(by.css('#genre-input'));
  await genreField.click();
});

When(/^I enter the genre of the movie: (.+)$/, async (genre) => {
  const genreField = element(by.css('#genre-input'));
  await genreField.sendKeys(genre);
});

When(/^I click the field for ‘Top 3 Actors\/Actresses’$/, async () => {
  const actor1Field = element(by.css('#actor-1-input'));
  await actor1Field.click();
});

When(/^I enter the name of actor\/actress #1: (.+)$/, async (actor1) => {
  const actor1Field = element(by.css('#actor-1-input'));
  await actor1Field.sendKeys(actor1);
});

When(/^I enter the name of actor\/actress #2: (.+)$/, async (actor2) => {
  const actor2Field = element(by.css('#actor-2-input'));
  await actor2Field.sendKeys(actor2);
});

When(/^I enter the name of actor\/actress #3: (.+)$/, async (actor3) => {
  const actor3Field = element(by.css('#actor-3-input'));
  await actor3Field.sendKeys(actor3);
});

When(/^I click the field for ‘IMDB Rating’$/, async () => {
  const imdbRatingField = element(by.css('#imdb-rating'));
  await imdbRatingField.click();
});

When(/^I enter the IMDB rating of the movie: (.+)$/, async (imdbRating) => {
  const imdbRatingField = element(by.css('#imdb-rating'));
  await imdbRatingField.sendKeys(imdbRating);
});

When(/^I click the field for ‘Rotten Tomatoes Rating’$/, async () => {
  const rottenTomatoesRatingField = element(by.css('#rotten-tomatoes-rating'));
  await rottenTomatoesRatingField.click();
});

When(/^I enter the Rotten Tomatoes rating of the movie: (.+)$/, async (rottenTomatoesRating) => {
  const rottenTomatoesRatingField = element(by.css('#rotten-tomatoes-rating'));
  await rottenTomatoesRatingField.sendKeys(rottenTomatoesRating);
});
  
  When(/^I click the field for ‘Director’$/, async () => {
    const directorInput = element(by.id('movie-director-input'));
    await directorInput.click();
  });
  
  When(/^I enter ‘(.*)’ into the field for ‘Director’$/, async (directorName) => {
    const directorInput = element(by.id('movie-director-input'));
    await directorInput.sendKeys(directorName);
  });

  When(/^I click the field for ‘Year released’$/, async () => {
    const yearInput = element(by.id('year-released-input'));
  await yearInput.click();
    });
    
    When(/^I enter ‘(\d+)’ into the field for ‘Year released’$/, async (year) => {
      const yearInput = element(by.id('year-released-input'));
      await yearInput.sendKeys(year);
    });

    When(/^I click the field for ‘Runtime’$/, async () => {
      const runtimeInput = element(by.id('runtime-input'));
      await runtimeInput.click();
    });

    When(/^I enter ‘(.*)’ into the field for ‘Runtime’$/, async (runtime) => {
      const runtimeInput = element(by.id('runtime-input'));
      await runtimeInput.sendKeys(runtime);
    });

    When(/^I select ‘(.*)’ for the ‘MPAA Rating’ field$/, async (mpaaRating) => {
      const mpaaInput = element(by.id(`${mpaaRating.toLowerCase()}-mpaa-input`));
      await mpaaInput.click();
    });    
    
  
  
  When(/^I click the ‘Submit’ button$/, async () => {
      // const submitButton = element(by.id('submit-form'));
      // await browser.executeScript('arguments[0].scrollIntoView()', submitButton.getWebElement());
      // await submitButton.click();
      const submitButton = element(by.id('submit-form'));
      await browser.sleep(300);
      await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
      await browser.sleep(300);
    await browser.actions().mouseMove(submitButton).perform();
    await browser.sleep(300);
    await browser.actions().click().perform();
  });

  Then('I should see a success message on the page', async function () {
    let expectedMessage = "Success!\nThanks for the info - we'll take it from here."
    const successMessageElement = await element(by.css('.request-success .alert-success'));
    const successMessageText = await successMessageElement.getText();
    await expect(successMessageText).to.equal(expectedMessage);
  });




