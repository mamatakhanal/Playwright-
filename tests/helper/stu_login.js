import { expect, test } from "@playwright/test";

export async function login(page) {
  await page.goto("https://staging.advisebridge.com/login?tab=student");

  await page.click("text=Student");
  await page.fill("#email", "teamadvisebridge@gmail.com");
  await page.fill("#password", "teamadvisebridge@gmail.com");
  await page.click("//button[normalize-space()='Log in as student']");

  await expect(page).toHaveURL("https://staging.advisebridge.com/student");
  await page.waitForTimeout(3000);
  
};