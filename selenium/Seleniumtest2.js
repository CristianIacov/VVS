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
driver.wait(webdriver.until.elementLocated(webdriver.By.name('stop')),1000);
driver.findElement(By.id('stop')).click();
driver.findElement(By.id('stop')).click();
driver.findElement(By.id('stop')).click();
driver.findElement(By.id('stop')).click();
driver.findElement(By.id('stop')).click();
driver.findElement(By.id('stop')).click();


console.log('success');

