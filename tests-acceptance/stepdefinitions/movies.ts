const importCwd = require('import-cwd');
const { Given, When, Then } = importCwd('@cucumber/cucumber');
const { browser, $, element, by } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
const request= require('request');
const axios = require('axios');

var base_url = "http://localhost:3000/";

Given(/^I am at the home page$/, async () => {
    await browser.get("http://localhost:4200/");
    await expect(browser.getTitle()).to.eventually.equal('Pick a movie for me please!');
});

When(/^I click the Suggest me movies button$/, async () => {
  await $("button[name='Start now!']").click();
  await browser.sleep(300);
});

Then(/^I am prompted to answer the following question: "([^\"]*)"$/, async (question) => {
  await expect(element(by.id('prompt-header')).getText()).to.eventually.equal(question);
});

When(/^I click the next button "([^\"]*)"$/, async(value) => {
  await $("button[name='Next" + value + "']").click();
  await browser.sleep(300);
});

Then(/^I see a scale of faces ranging from a sad face to a happy face$/, async() => {
  await expect(element(by.id('sad-image')).getAttribute("value")).to.eventually.equal("Sad");
  await expect(element(by.id('neutral-image')).getAttribute("value")).to.eventually.equal("Neutral");
  await expect(element(by.id('happy-image')).getAttribute("value")).to.eventually.equal("Happy");
});

When(/^I select "([^\"]*)" from the faces$/, async (emotion) => {
  const e= element(by.id(emotion.toLowerCase() + '-image'));
  await browser.executeScript("arguments[0].click();", e.getWebElement());
});

Then(/^I see several possible occasions$/, async() => {
  await expect(element(by.id('radioButton1')).getAttribute("value")).to.eventually.equal("Date Night");
  await expect(element(by.id('radioButton2')).getAttribute("value")).to.eventually.equal("Family Movie Night");
  await expect(element(by.id('radioButton3')).getAttribute("value")).to.eventually.equal("Movie With Friends");
  await expect(element(by.id('radioButton4')).getAttribute("value")).to.eventually.equal("Bored and Alone");
  await expect(element(by.id('radioButton5')).getAttribute("value")).to.eventually.equal("other");
});

When(/^I select "([^\"]*)" for the occasion$/, async(occasion) => {
  const radioButton = element(by.css('input[name="occasion"][value=\"' + occasion + '\"]'));
  await radioButton.click();
});

Then(/^I see two empty year inputs$/, async() => {
  await expect(element(by.id('start_release_year')).getAttribute("value")).to.eventually.equal("");
  await expect(element(by.id('last_release_year')).getAttribute("value")).to.eventually.equal("");
});

When(/^I select from "([^\"]*)" to "([^\"]*)"$/, async (from, to) => {
  await element(by.id('start_release_year')).sendKeys(from);
  await element(by.id('last_release_year')).sendKeys(to);
});

Then(/^I see MPAA rating options$/, async() => {
  await expect(element(by.id('no-preference-check')).getAttribute("value")).to.eventually.equal("none");
  await expect(element(by.id('g-check')).getAttribute("value")).to.eventually.equal("G");
  await expect(element(by.id('pg-check')).getAttribute("value")).to.eventually.equal("PG");
  await expect(element(by.id('pg-13-check')).getAttribute("value")).to.eventually.equal("PG-13");
  await expect(element(by.id('r-check')).getAttribute("value")).to.eventually.equal("R");
});

When(/^I select a rating of "([^\"]*)"$/, async (ageRating) => {
  const e = element(by.id(ageRating.toLowerCase() + '-check'));
  await e.click();
});

When(/^I click the submit button$/, async() => {
  await $("button[name='Submit']").click();
  await browser.sleep(3000);
});

Then(/^I see "([^\"]*)" movie suggestion based on my answers$/, async (name) => {
  await expect(element(by.id('movie-title')).getText()).to.eventually.equal(name);
});
