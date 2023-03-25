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

// Given(/^I cannot see a student with ID "(\d*)" in the students list$/, async (id) => {
//     var allids = element.all(by.name('idlist'));
//     var sameids = allids.filter(elem =>
//                                   elem.getText().then(text => text === id));
//     await sameids.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));
// });

When(/^I click on Date Night$/, async () => {
  const radioButton = element(by.css('input[name="occasion"][value="date night"]'));
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

// Then(/^I can see "([^\"]*)" with ID "(\d*)" in the students list$/, async (name, id) => {
//     var allstudents = element.all(by.name('studentlist'));
//     await new Promise(f => setTimeout(f, 10));
//     await allstudents.filter(elem => pAND(sameID(elem,id),sameName(elem,name))).then
//                 (elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));    
//             });
// Given(/^I can see a student with ID "(\d*)" in the students list$/, async (id) => {
//     await $("input[name='namebox']").sendKeys('Clarissa');
//     await $("input[name='idbox']").sendKeys(id);
//     await element(by.buttonText('Add')).click();
//     //
//     await new Promise(f => setTimeout(f, 10));
 
//     var allids = element.all(by.name('idlist'));
//     var sameids = allids.filter(elem =>
//                                   elem.getText().then(text => text === id));
//     await sameids.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//     });

// Then(/^I cannot see "([^\"]*)" with ID "(\d*)" in the students list$/, async (name, id) => {
//     var allstudents = element.all(by.name('studentlist'));
//     await new Promise(f => setTimeout(f, 10));
//     await allstudents.filter(elem => pAND(sameID(elem,id),sameName(elem,name))).then
//                 (elems => expect(Promise.resolve(elems.length)).to.eventually.equal(0));    
//     });

// Then(/^I can see an error message$/, async () => {
//         var allmsgs = element.all(by.name('msgidexistente'));
//         //await assertTamanhoEqual(allmsgs,1);
//         await allmsgs.then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
//     });

// Given(/^the system has no student with ID "(\d*)"$/, async (id) => {
    
//                 try {
//                     const response = await axios.get(`${base_url}students`);
//                     expect(response.data.includes(`"id":"${id}"`)).to.equal(false);
//                   } catch (error) {
//                     console.error(error);
//                     throw error;
//                   }
//     });
// //--
// When(/^I register the student "([^\"]*)" with ID "(\d*)"$/, async (name, id) => {
      
//                        const student = {"Name": name, "ID": id, "email": ""};
//                        const options = {method: 'POST', url: `${base_url}student`, data: student};
//                        await new Promise(f => setTimeout(f, 10));
//                        console.log("printerror");
//                        console.log(student);
//                        try {
//                          const response = await axios(options);
//                          expect(response.data).to.deep.equal({"success":"Student successfully registered."});
//                        } catch (error) {
//                          console.error(error);
//                          throw error;
//                        }
//     });


