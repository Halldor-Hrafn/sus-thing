import puppeteer from "puppeteer";

const url = "https://app.demiplane.com/nexus/pathfinder2e/character-sheet/fe6edc03-ba99-4cfd-8d0b-4caff39c696a";

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await delay(30000);

    const elements = await page.$$eval('.attribute-row-modifier', elements => {
        return elements.map(element => element.textContent.trim());
    })

    console.log(elements);

    const elements2 = await page.$$eval('.attribute-row-title', elements => {
        return elements.map(element => element.textContent.trim());
    })

    console.log(elements2);

    const ac = await page.$$eval('.ac-value-component--mod', elements => {
        return elements.map(element => element.textContent.trim());
    })

    console.log(ac);

    const save = await page.$$eval('.sheet-save-component-mod', elements => {
        return elements.map(element => element.textContent.trim());
    })

    console.log(save);

    const skills = await page.$$eval('.sheet-skill-table-row-dice-roll', elements => {
        return elements.map(element => element.textContent.trim());
    })

    console.log(skills);

    await browser.close();
}

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

main();
