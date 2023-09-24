import { expect } from "@wdio/globals";

describe("Wedriverio main page", () => {
	it("home work 1", async () => {
		await browser.setWindowSize(1440, 1000);
		await browser.url("https://webdriver.io/");
		await browser.pause(1000);

		// const burgerMenu = await $(".navbar__toggle"); //if browser opens in lower resolution e.g. mobile/tablet
		// await burgerMenu.click();
		// await browser.pause(500);
		//const apiLink = await $(".navbar-sidebar .menu__link[href='/docs/api']");

		const apiLink = await $(".navbar .navbar__link[href='/docs/api']");
		await apiLink.click();
		await browser.pause(1000);

		await expect(browser).toHaveUrl("https://webdriver.io/docs/api");

		const sectionTitle = await $("h1");
		await expect(sectionTitle).toHaveText("Introduction");

		console.log("------------------------------------", await sectionTitle.getText());
		const webDriverText = await $(".theme-doc-markdown a:first-child");
		await expect(webDriverText).toHaveAttribute("href", "/docs/api/webdriver");

		console.log("------------------------------------", await webDriverText.getAttribute("href"));

		const searchButton = await $(".DocSearch.DocSearch-Button");
		await searchButton.click();
		await browser.pause(1000);

		const searchInput = await $("#docsearch-input");
		await searchInput.setValue("all is done");
		await browser.pause(1000);
		await searchInput.clearValue();
		// const resetButton = await $(".DocSearch-Reset"); //if you want to use a reset button instead of .clearValue()
		// await resetButton.click();
		await browser.pause(1000);
	});

	xit("home work 2", async () => {
		await browser.setWindowSize(1440, 1000);
		await browser.url("https://webdriver.io/");
		await browser.pause(1000);

		// const burgerMenu = await $(".navbar__toggle"); //if browser opens in lower resolution e.g. mobile/tablet
		// await burgerMenu.click();
		// await browser.pause(500);
		//const apiLink = await $(".navbar-sidebar .menu__link[href='/docs/api']");

		const apiLink = await $(".navbar .navbar__link[href='/docs/api']");
		await apiLink.click();
		await browser.pause(1000);

		await expect(browser).toHaveUrl("https://webdriver.io/docs/api");

		const footerLinkStarted = await $(".footer__link-item[href='/docs/gettingstarted']");
		footerLinkStarted.scrollIntoView();
		await browser.pause(1000);

		const footerLinkBlog = await $(".footer__link-item[href='/blog']");
		await expect(footerLinkBlog).toBeDisplayedInViewport();

		const linkNext = await $(".pagination-nav__link--next");
		await expect(linkNext).toBeDisplayedInViewport();
		await expect(linkNext).toBeClickable();
		console.log("------------------------------------", await linkNext.getHTML(false));
		linkNext.click();

		await browser.waitUntil(async () => $("#webdriver-protocol").isDisplayed(), 3000, "Title is not displayed");
	});
});
