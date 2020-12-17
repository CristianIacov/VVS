var webdriver = require('selenium-webdriver'),

By = webdriver.By,
until = webdriver.until;


var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();


driver.get('http://localhost:3000/');
driver.findElement(By.id('a')).sendKeys('cristi');
driver.findElement(By.id('b')).sendKeys('cristi');
driver.findElement(By.id('c')).click();
console.log('success');

