
var assert = require("assert");
const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

describe('Caso de prueba Barra de busquedas', function(){
    it('Mandar informacion a la barra de busqueda', async function(){
        let driver = await new Builder().forBrowser("chrome").build();
        let email="jona@mail.com";
        let password="Hola1234@";
        let search = "Lap";

        try{
            await driver.get("http://localhost:3000/login");
            
            await driver.findElement(By.name("emailBuyer")).sendKeys(email);
            await driver.findElement(By.name("passBuyer")).sendKeys(password);
            await driver.findElement(By.name("buttonBuyer")).click();
            await stop(10000);
            await driver.findElement(By.name("buscador")).sendKeys(search);
            

            const caso = driver.executor_.w3c; 
            assert.equal(caso, true);

        } finally{
            
        }
    });
})


function stop(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }