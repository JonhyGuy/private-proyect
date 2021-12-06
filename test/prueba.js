const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function searchTest(){
    let email="jona@mail.com";
    let password="Hola1234@";
    let search = "Lap";

    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://localhost:3000/login');
    
    await driver.findElement(By.name("emailBuyer")).sendKeys(email);
    await driver.findElement(By.name("passBuyer")).sendKeys(password);
    await driver.findElement(By.name("buttonBuyer")).click();
    await stop(2000);
    await driver.findElement(By.name("buscador")).sendKeys(search);
    await stop(2000);
    await driver.quit();
}

function stop(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


searchTest();