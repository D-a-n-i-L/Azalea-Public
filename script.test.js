const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const scriptContent = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');

const dom = new JSDOM(`<!DOCTYPE html><html><body><input id="username"><input id="password"></body></html>`, {
    runScripts: "dangerously",
    resources: "usable"
});
const { window } = dom;
const { document } = window;

const scriptElement = document.createElement('script');
scriptElement.textContent = scriptContent;
document.body.appendChild(scriptElement);

describe('checkLogin', function() {
    let usernameInput, passwordInput, alertStub;

    beforeEach(function() {
        usernameInput = document.getElementById('username');
        passwordInput = document.getElementById('password');
        alertStub = sinon.stub(window, 'alert');
    });

    afterEach(function() {
        alertStub.restore();
    });
});
