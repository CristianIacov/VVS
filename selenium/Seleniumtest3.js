var webdriver = require('selenium-webdriver'),

By = webdriver.By,
until = webdriver.until;


var driver = new webdriver.Builder()
.forBrowser('chrome')
.build();


driver.get('http://localhost:3000/');
driver.findElement(By.id('a')).sendKeys('admin');
driver.findElement(By.id('b')).sendKeys('admin');
driver.findElement(By.id('c')).click();
driver.findElement(By.id('maintenance')).click();
console.log('success');

