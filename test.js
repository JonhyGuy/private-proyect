const {Builder, By, Key, until} = require('selenium-webdriver');

var assert =  require("assert");
const { doesNotMatch } = require('assert');
//var op = require('./ops')

describe('Prueba de Login', function (){
   
  
     it('Prueba de ingreso correcto', async function(){
      let driver = await new Builder().forBrowser('chrome').build();
      try {
        await driver.get('http://localhost:4200');
        await driver.findElement(By.id('user')).sendKeys('god@gmail.com', Key.RETURN);
        await driver.findElement(By.id('pass')).sendKeys('12345678', Key.RETURN);
        await driver.findElement(By.id('commit')).click()
        const caso = await driver.wait(until.urlIs('http://localhost:4200/home'), 25000);
        //const url = await driver.wait(until.getCurrentUrl(),10000)
       // const url =  await driver.getCurrentUrl();
        await assert.equal(caso,true);
      } finally {
        await driver.quit();
        
    }
    })  

    it('Prueba de correo correcto y contraseña incorrecta', async function(){
      let driver = await new Builder().forBrowser('chrome').build();
      try {
        
        await driver.get('http://localhost:4200');
        await driver.findElement(By.id('user')).sendKeys('god@gmail.com', Key.RETURN);
        await driver.findElement(By.id('pass')).sendKeys('1234', Key.RETURN);
        await driver.findElement(By.id('commit')).click()
        const caso = await driver.wait(until.urlIs('http://localhost:4200/login'), 13000);
     

        //const url = await driver.wait(until.getCurrentUrl(),10000)
       // const url =  await driver.getCurrentUrl();
        await assert.equal(caso,true);
      } finally {
       // await driver.quit();
        
    }
    })

    
    it('Prueba de buscador', async function(){
      let driver = await new Builder().forBrowser('chrome').build();
      let buscar = 'Juego';
      try {
        await driver.get('http://localhost:4200');
        await driver.findElement(By.id('user')).sendKeys('god@gmail.com', Key.RETURN);
        await driver.findElement(By.id('pass')).sendKeys('12345678', Key.RETURN);
        await driver.findElement(By.id('commit')).click()
        await sleep(13000);
        await driver.findElement(By.id('buscador')).sendKeys(buscar,Key.ENTER);
        const caso = await driver.wait(until.urlIs('http://localhost:4200/home?search=' + buscar), 25000);
        //const url = await driver.wait(until.getCurrentUrl(),10000)
       // const url =  await driver.getCurrentUrl();
        
       
       
       
       await assert.equal(caso,true);
      } finally {
        //await driver.quit();
        
          }
    })
 
    it('Prueba de info libro', async function(){
      let driver = await new Builder().forBrowser('chrome').build();
      let buscar = 'Juego';
      try {
        await driver.get('http://localhost:4200');
        await driver.findElement(By.id('user')).sendKeys('god@gmail.com', Key.RETURN);
        await driver.findElement(By.id('pass')).sendKeys('12345678', Key.RETURN);
        await driver.findElement(By.id('commit')).click()
        await sleep(13000);
        await driver.findElement(By.id('show')).click()
        await sleep(5000);
        //url.substring()
        const caso = await driver.wait(until.urlIs('http://localhost:4200/info/6'), 25000);
        //const url = await driver.wait(until.getCurrentUrl(),10000)
       // const url =  await driver.getCurrentUrl();
      
       
          await assert.equal(caso,true);
      } finally {
        await sleep(1000);
        await driver.quit();
        
    }
    })   
  
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}