import puppeteer from "puppeteer";

/**
 * @license
 * Copyright 2017 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

("use strict");

export default defineEventHandler(async (event) => {
  const lang = await readBody(event);

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/", {
      waitUntil: "networkidle2",
    });
    await page.waitForSelector('#ready');
    await page.pdf({
      path: `cvs/Ali-Elsayed-Resumé-${lang}.pdf`,
      format: "letter",
    });

    await browser.close();
    console.log("✅ Done!");
  } catch (err) {
    console.error("❌ Error:", err);
  }


});
