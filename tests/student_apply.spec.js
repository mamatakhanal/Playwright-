// import { test, expect } from "@playwright/test";
// import { login } from "./helper/stu_login.js";

// test("Student Apply Now", async ({ page }) => {

//   await login(page);
//   await page.waitForTimeout(1000);
//   // Open New Page 
//   const popup = page.waitForEvent('popup');
//   await page.locator(".fi-btn-label", { hasText: 'Apply Now' }).click();
//   await page.waitForTimeout(3000);
//   const newPage = await popup;

//   /* ---Search Institution Name--- */
//   // await newPage.locator('button', { hasText: 'Search by college name...' }).click();
//   // const searchName = newPage.getByPlaceholder('Search by institution name...');
//   // await newPage.waitForTimeout(2000);
//   // await searchName.fill('Troy University');
//   // await newPage.waitForTimeout(2000);
//   // const dropdown = newPage.locator('ul.max-h-80');
//   // await dropdown.waitFor({ state: 'visible' });
//   // await dropdown.click();
//   // await expect(newPage).toHaveURL('https://staging.advisebridge.com/institutions/troy-university');
//   // await newPage.waitForTimeout(2000);
//   // await newPage.getByRole('link', { name: 'Search' }).nth(0).click();
//   // await expect(newPage).toHaveURL('https://staging.advisebridge.com/search');


//   /* ---Apply for Institution--- */
//   // Institution Types
//   await newPage.click("//button[normalize-space()='Institution Types']");
//   const searchInstitution = newPage.getByPlaceholder('Search...');
//   await searchInstitution.fill("University");
//   await newPage.waitForTimeout(1000);
//   await newPage.locator('li', { hasText: 'University' }).locator('input[type="checkbox"]').check();
//   await newPage.waitForTimeout(1000);
//   // Countries 
//   await newPage.click("//button[normalize-space()='Countries']");
//   const searchCountry = newPage.getByPlaceholder('Search...');
//   await searchCountry.fill("United States");
//   await newPage.locator('li', { hasText: 'United States' }).locator('input[type="checkbox"]').check();
//   // States 
//   await newPage.click("//button[normalize-space()='States']");
//   const searchStates = newPage.getByPlaceholder('Search...');
//   await searchStates.fill("Texas")
//   await newPage.waitForTimeout(1000);
//   await newPage.locator('li', { hasText: 'Texas' }).locator('input[type="checkbox"]').check();
//   // Education Levels 
//   await newPage.click("//button[normalize-space()='Education Levels *']");
//   const searchLevel = newPage.getByPlaceholder('Search...');
//   await searchLevel.fill("Bachelor")
//   await newPage.locator('li', { hasText: "Bachelor's Degree" }).click();
//   // Majors
//   await newPage.click("//button[normalize-space()='Majors *']");
//   const searchMajors = newPage.getByPlaceholder('Search...');
//   await searchMajors.fill("Agriculture");
//   await newPage.locator('li', { hasText: "Agriculture" }).nth(0).click();
//   await newPage.click("//button[normalize-space()='Apply']");
//   await newPage.click("//button[normalize-space()='Clear All']");


//   /* ---Find based on eligibility--- */
//   await newPage.click("//button[normalize-space()='Find based on eligibility']");
//   const showCollege = newPage.locator("//button[normalize-space()='Show colleges']");
//   await showCollege.waitFor({ state: 'visible' });
//   await showCollege.click();
//   await newPage.waitForTimeout(1000);
//   await newPage.click("//button[normalize-space()='Sort By']");
//   await newPage.waitForTimeout(1000);
//   await newPage.locator('input[type="radio"][value="az"]').click();
//   //Navigate to University 
//   const navigateUniversity = await newPage.locator('div.grid a').nth(0);
//   await navigateUniversity.waitFor({ state: 'visible' });
//   await navigateUniversity.click();
//   await this.page.getByRole('link', { name: 'Courses offered' }).click();
//   // Apply for Bachelor Degree
//   await newPage.getByRole('button', { name: "Bachelor's Degree" }).click();
//   const courseBachelor = newPage.locator('div.group').nth(0);
//   await courseBachelor.waitFor({ state: 'visible' });
//   await courseBachelor.getByRole('button', { name: 'Apply Now' }).click();
//   const saveBtn = newPage.locator("//button[normalize-space()='Save and Continue']");
//   await saveBtn.waitFor({ state: 'visible' });
//   await saveBtn.click();
//   // Apply for Master Degree
//   await newPage.getByRole('button', { name: "Master's Degree" }).click();
//   const courseMaster = newPage.locator('div.group').nth(0);
//   await courseMaster.waitFor({ state: 'visible' });
//   await courseMaster.getByRole('button', { name: 'Apply Now' }).click();
//   await saveBtn.waitFor({ state: 'visible' });
//   await saveBtn.click();
// });
