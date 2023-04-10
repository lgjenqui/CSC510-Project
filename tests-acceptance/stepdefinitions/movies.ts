const importCwd = require('import-cwd');
const { Given, When, Then } = importCwd('@cucumber/cucumber');
const { browser, $, element, by } = require('protractor');
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
const request= require('request');
const axios = require('axios');

// your step definitions here



let sameID = ((elem, id) => elem.element(by.name('idlist')).getText().then(text => text === id));
let sameName = ((elem, name) => elem.element(by.name('namelist')).getText().then(text => text === name));

let pAND = ((p,q) => p.then(a => q.then(b => a && b)));

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


