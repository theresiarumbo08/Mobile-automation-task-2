import { SplashScreen } from "../pageobjects/screen.page";
import { DataFormulir } from "../pageobjects/data.page";
import { HomePage } from "../pageobjects/home.page.js";

let screenSplash = new SplashScreen();
let dataFormulir = new DataFormulir();
let homePage = new HomePage();

describe("Open home Diet Meal application", () => {
  it("Open with valid data", async () => {
    await expect(screenSplash.initialPage).toHaveText(
      "Empat Sehat, Lima Sempurna"
    );
    await expect(dataFormulir.welcomeHeader).toHaveText("Welcome...");
    await dataFormulir.inputName.setValue("Theresia");
    await dataFormulir.inputWeight.setValue("54");
    await dataFormulir.inputHeight.setValue("156");
    await dataFormulir.selectGender.click();
    await dataFormulir.clickBtnNext.click();
    await dataFormulir.selectActivities.click();
    await dataFormulir.clickBtnSelesai.click();
    await expect(homePage.HomeScreen).toExist();
    await expect(homePage.HomeScreen).toHaveText("Hi,");
    await expect(homePage.HomeScreenDescription).toExist();
    await expect(homePage.HomeScreenDescription).toHaveText(
      "Ready to some calories today?"
    );
    await expect(homePage.buttonHome).toExist();
    await expect(homePage.buttonHome).toExist("Home");
    await driver.closeApp();
    await driver.launchApp();
  });

  it("Open with invalid data - Weight is empty", async () => {
    await expect(screenSplash.initialPage).toHaveText(
      "Empat Sehat, Lima Sempurna"
    );
    await expect(dataFormulir.welcomeHeader).toHaveText("Welcome...");
    await dataFormulir.inputName.setValue("Theresia");
    await dataFormulir.inputHeight.setValue("156");
    await dataFormulir.selectGender.click();
    await dataFormulir.clickBtnNext.click();
    await dataFormulir.errorMessageName.isDisplayed();
  });
});
