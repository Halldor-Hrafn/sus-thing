import puppeteer from "puppeteer";

const url = "https://secured.heritage.org/the-heritage-doge-survey/";

async function nuke() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        await delay(500);

        // await page.waitForNetworkIdle({ idleTime: 100 });

        await page.waitForSelector('#environmental_protection_agency__5');
        await page.click('#environmental_protection_agency__5');
        await page.click('#federal_bureau_of_investigation__5');
        await page.click('#department_of_education__5');
        await page.click('#department_of_housing_and_urban_development__5');
        await page.click('#department_of_state__5');

        await page.waitForSelector('[id="45_million_for_a_diversity_and_inclusion_scholarship_in_burma__very_supportive"]');
        await page.click('[id="45_million_for_a_diversity_and_inclusion_scholarship_in_burma__very_supportive"]');
        await page.click('[id="3_million_for_girlcentered_climate_action_in_brazil__very_supportive"]');
        await page.click('[id="125_million_to_push_critical_race_theory_in_public_health_policy__very_supportive"]');
        await page.click('[id="280000_for_diverse_bird_watcher_groups__very_supportive"]');
        await page.click('[id="3267000_to_build_a_transgender_health_guide_website_meant_to_increase_access_to_genderaffirming_care_also_known_as_mutilation___very_supportive"]');
        
        await page.waitForSelector('#do_you_believe_the_federal_government_needs_to_be_responsible_with_taxpayer_dollars_and_not_spend_more_money_than_it_takes_in_undecided');
        await page.click('#do_you_believe_the_federal_government_needs_to_be_responsible_with_taxpayer_dollars_and_not_spend_more_money_than_it_takes_in_undecided');
        await page.click('#do_you_support_significant_cuts_to_the_federal_budget_to_eliminate_budget_deficits_and_pay_down_the_national_debt_undecided');
        await page.click('#do_you_believe_the_department_of_government_efficiency_doge_will_be_an_effective_tool_for_eliminating_excessive_government_spending__no');

        await page.type('#first_name', 'Elon');
        await page.type('#last_name', 'Musk');
        await page.type('#email', 'elon@stupid.com');

        await page.click('#lp-pom-button-122');

        console.log('Submitted');

        await browser.close();
    } catch (error) {
        console.error(error);
    }
}

function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    });
}

async function main() {
    while (true) {
        console.log("Payload sent");
        await nuke();
    }
}

main();
