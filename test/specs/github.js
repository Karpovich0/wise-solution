import { expect } from "@wdio/globals";

describe("github", () => {
	xit("Should show error on typing wrong username and password", async () => {
		await browser.url("https://github.com/");
		const singInButton = await $(".HeaderMenu-link--sign-in");
		await browser.pause(1000);

		await singInButton.click();

		await expect(browser).toHaveUrl("https://github.com/login");

		const username = await $("#login_field");
		const password = await $("#password");
		const VALUE = "test";
		[username, password].forEach((item) => item.setValue(VALUE));
		await browser.pause(1000);

		const submitButton = await $("input[name='commit']");
		await submitButton.click();
		await browser.pause(1000);

		const errorAlert = await $(".js-flash-alert");
		await expect(errorAlert).toBeDisplayed();
	});
	xit("Registration page opens on click on 'Sign up' button.", async () => {
		await browser.url("https://github.com/");
		const singUnButton = await $(".HeaderMenu-link--sign-up");
		singUnButton.click();
		await browser.pause(1000);
		const signUpTitle = await $("//span[contains(text(), 'Welcome to GitHub!')]");

		await browser.waitUntil(async () => signUpTitle.isDisplayedInViewport(), 3000, "Title is not displayed");
		await browser.pause(1000);
	});
	xit("Registration page opens on click on 'Sign up' button.", async () => {
		await browser.url("https://github.com/");

		const singUnButton = await $(".HeaderMenu-link--sign-up");
		singUnButton.click();
		await browser.pause(1000);

		const signUpTitle = await $("//span[contains(text(), 'Welcome to GitHub!')]");
		await browser.waitUntil(async () => signUpTitle.isDisplayedInViewport(), 3000, "Title is not displayed");
		await browser.pause(1000);
	});
	xit("Get enterprise trial.", async () => {
		await browser.url("https://github.com/");

		const title = await $("//h2[contains(text(), 'The place for anyone')]");
		await title.scrollIntoView();
		await browser.pause(1000);
		await expect(title).toBeDisplayedInViewport();

		const startTrialButton = await $("//a[contains(text(), 'Start a free enterprise trial')]");
		await startTrialButton.click();
		await browser.pause(1000);

		const trialTitle = await $("//h1[contains(text(), 'Pick your trial plan')]");
		await expect(trialTitle).toHaveText("Pick your trial plan");

		const cloudLink = await $("/html/body/div[1]/div[4]/main/div/div[2]/div/div/div[1]/a");
		await cloudLink.click();
		await browser.pause(1000);

		const authTitle = await $(".auth-form-header>h1");
		await expect(authTitle).toHaveText("Sign in to GitHub");

		await browser.pause(1000);
	});
	xit("Search works correctly.", async () => {
		await browser.url("https://github.com/");

		const headerButtonSearch = await $(".header-search-button");
		await headerButtonSearch.click();
		await browser.pause(1000);

		const searchInput = await $("#query-builder-test");
		await expect(searchInput).toBeDisplayedInViewport();
		await browser.pause(1000);

		await searchInput.setValue("html");
		await browser.pause(1000);

		await browser.keys("Enter");
		await browser.pause(1000);
		await expect(browser).toHaveUrl("https://github.com/search?q=html&type=repositories");
		await browser.pause(1000);
	});
});
