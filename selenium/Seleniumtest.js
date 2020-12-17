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
//driver.wait(check_title,1000);
console.log('success');

function check_title()
{

    var promise = driver.getTitle().then( function(title){
        if (title === 'wiki - Google Search' )
        {
            console.log('success');
            return true;
        }
        else
        {
            console.log('fail --'+ title);
        }
    });
    return promise;
}