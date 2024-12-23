const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  constructor(page) {
    //Expertise drop-down
    this.page = page;
    this.expertiseLink = page.locator('role=link[name="Expertise"]');
    this.managedITServicesLink = page.getByRole("link", {
      name: "Managed IT Services Secure",
    });
    this.cybersecurityLink = page.getByRole("link", {
      name: "Cybersecurity Protect your",
    });
    this.cloudExpertsLink = page.getByRole("link", {
      name: "Cloud Experts Leverage the",
    });
    this.dataAnalyticsLink = page.getByRole("link", {
      name: "Data Analytics Unleash the",
    });

    // Locators for the Locations links
    this.locationsLink = page.getByRole("link", { name: "Locations" });
    this.baltimoreLink = page.getByRole("link", {
      name: "Baltimore, Maryland Baltimore",
    });
    this.miamiLink = page.getByRole("link", {
      name: "Miami, Florida Our new office",
    });
    this.austinLink = page.getByRole("link", {
      name: "Austin, Texas Our Austin",
    });
    this.kyivLink = page.getByRole("link", {
      name: "Kyiv, Ukraine Klik Support",
    });

    // Locators for Industries drop-down
    this.industriesLink = page.getByRole("link", { name: "Industries" });
    this.healthcareLink = page.getByRole("link", {
      name: "Healthcare Enhance patient",
    });
    this.accountingLink = page.getByRole("link", {
      name: "Accounting and Finance Boost",
    });
    this.realEstateLink = page.getByRole("link", {
      name: "Real Estate and Property",
    });
    this.legalLink = page.getByRole("link", {
      name: "Legal Improve billable hours",
    });
    this.nonprofitsLink = page.getByRole("link", {
      name: "Nonprofits Increase",
    });
    this.supplyChainLink = page.getByRole("link", {
      name: "Supply Chain Industry Klik",
    });
    this.constructionLink = page.getByRole("link", {
      name: "Construction Enhance project",
    });
    this.transportationLink = page.getByRole("link", {
      name: "Transportation and Logistics",
    });
    this.dentalPracticeLink = page.getByRole("link", {
      name: "Dental Practice Where",
    });

    // Locators for Insights drop-down
    this.insightsLink = page.getByRole("link", { name: "Insights" });
    this.newsBlogLink = page.getByRole("link", { name: "News & Blog" });
    this.videoBlogLink = page.getByRole("link", { name: "Video-Blog" });
    this.whitePapersLink = page.getByRole("link", {
      name: "White Papers & Ebooks",
    });
    this.caseStudiesLink = page.getByRole("link", {
      name: "Case Studies See how we’ve",
    });
    this.podcastLink = page.getByRole("link", { name: "Podcast Join Neil" });

    // Locators for Why Klik? drop-down
    this.whyKlikLink = page.getByRole("link", { name: "Why Klik?" });
    this.aboutKlikLink = page.getByRole("link", {
      name: "About Klik Discover why",
    });
    this.ourTeamLink = page.getByRole("link", {
      name: "Our Team Our team delivers",
    });
    this.awardsRatingsLink = page.getByRole("link", {
      name: "Awards and Ratings",
    });
    this.foundersStoryLink = page.getByRole("link", {
      name: "Founder’s Story Discover how",
    });
    this.weAreHiringLink = page.getByRole("link", {
      name: "We Are Hiring Discover why we",
    });

    // Locators for Contact us and Klik.solutions links
    this.contactUsLink = page
      .locator("#menu-item-24")
      .getByRole("link", { name: "Contact us" });

    this.klikSolutionsLink = page.locator("div.logo > a > img");

    // Locator for the "Fast Growing MSSP with a" text
    this.fastGrowingMSSPText = page.getByText("Fast Growing MSSP with a");

    // Locator for the "Book a Meeting" button
    this.bookMeetingButton = page.getByRole("button", {
      name: "Book a Meeting",
    });

    this.getStartedButton = page.getByRole("button", { name: "Get started" });
    this.getStartedButtonindustries = page
      .locator("#stickyBlock")
      .getByRole("link", { name: "Get started" });
    // Locators for the links "Managed IT Services", "Cloud experts", "Data analytics", Cybersecurity
    this.managedItServicesLink = page.getByRole("link", {
      name: "Managed IT Services",
    });
    this.cybersecurityLink = page
      .locator("#container")
      .getByRole("link", { name: "Cybersecurity" });
    this.cloudExpertsLink = page.getByRole("link", {
      name: "Cloud experts",
      exact: true,
    });
    this.dataAnalyticsLink = page.getByRole("link", {
      name: "Data analytics",
      exact: true,
    });

    // Locators for "Learn more" links
    this.learnMoreLinks = page.getByRole("link", { name: "Learn more" });

    // Locator for "Show more industries" button
    this.showMoreIndustriesButton = page.getByRole("button", {
      name: "Show more industries",
    });

    // Locators for industry items
    this.nonprofitsText = page.getByText("Nonprofits", { exact: true });
    this.transportationText = page.getByText("Transportation and logistics", {
      exact: true,
    });
    this.realEstateText = page.getByText(
      "Real Estate and Property Management",
      { exact: true }
    );
    this.supplyChainText = page.getByText("Supply Chain Industry", {
      exact: true,
    });
    this.dentalPracticeText = page.getByText("Dental Practice", {
      exact: true,
    });
    this.nonprofitsText = page.getByText("Nonprofits", { exact: true });
    this.transportationText = page.getByText("Transportation and logistics", {
      exact: true,
    });
    this.realEstateText = page.getByText(
      "Real Estate and Property Management",
      { exact: true }
    );
    this.supplyChainText = page.getByText("Supply Chain Industry", {
      exact: true,
    });
    this.dentalPracticeText = page.getByText("Dental Practice", {
      exact: true,
    });

    // Locator for "Show more industries" button
    this.showMoreIndustriesButton = page.getByRole("button", {
      name: "Show more industries",
    });

    // Locator for the "Klik to support" link
    this.klikToSupportLink = page.getByRole("link", {
      name: "Klik to support",
    });
  }

  // Methods

  // Methods for Expertise drop-down
  async hoverOverExpertise() {
    await this.expertiseLink.hover();
  }

  async verifyLinksVisibility() {
    await expect(this.managedITServicesLink).toBeVisible();
    await expect(this.cybersecurityLink).toBeVisible();
    await expect(this.cloudExpertsLink).toBeVisible();
    await expect(this.dataAnalyticsLink).toBeVisible();
  }

  // Methods for the Locations links
  async hoverOverLocations() {
    await this.locationsLink.hover();
  }

  async verifyLocationLinksVisibility() {
    await expect(this.baltimoreLink).toBeVisible();
    await expect(this.miamiLink).toBeVisible();
    await expect(this.austinLink).toBeVisible();
    await expect(this.kyivLink).toBeVisible();
  }

  // Methods for Industries drop-down
  async hoverOverIndustries() {
    await this.industriesLink.hover();
  }

  async verifyIndustryLinksVisibility() {
    await expect(this.healthcareLink).toBeVisible();
    await expect(this.accountingLink).toBeVisible();
    await expect(this.realEstateLink).toBeVisible();
    await expect(this.legalLink).toBeVisible();
    await expect(this.nonprofitsLink).toBeVisible();
    await expect(this.supplyChainLink).toBeVisible();
    await expect(this.constructionLink).toBeVisible();
    await expect(this.transportationLink).toBeVisible();
    await expect(this.dentalPracticeLink).toBeVisible();
  }

  // Methods for Insights drop-down
  async hoverOverInsights() {
    await this.insightsLink.hover();
  }

  async verifyInsightsLinksVisibility() {
    await expect(this.newsBlogLink).toBeVisible();
    await expect(this.videoBlogLink).toBeVisible();
    await expect(this.whitePapersLink).toBeVisible();
    await expect(this.caseStudiesLink).toBeVisible();
    await expect(this.podcastLink).toBeVisible();
  }

  // Methods for Why Klik? drop-down
  async hoverOverWhyKlik() {
    await this.whyKlikLink.hover();
  }

  async verifyWhyKlikLinksVisibility() {
    await expect(this.aboutKlikLink).toBeVisible();
    await expect(this.ourTeamLink).toBeVisible();
    await expect(this.awardsRatingsLink).toBeVisible();
    await expect(this.foundersStoryLink).toBeVisible();
    await expect(this.weAreHiringLink).toBeVisible();
  }

  // Method to click on the "Contact us" link
  async clickContactUs() {
    await this.contactUsLink.click();
  }

  // Method to click on the "Klik.solutions" link
  async clickKlikSolutionsLink() {
    await this.klikSolutionsLink.dblclick();
  }

  // Method to verify visibility of the text
  async verifyFastGrowingMSSPTextVisibility() {
    await expect(this.fastGrowingMSSPText).toBeVisible();
  }

  // Method to click the 'Book a Meeting' button
  async clickBookMeetingButton() {
    await this.bookMeetingButton.click();
  }
  // Method to check if the 'Book a Meeting' button is visible
  async isBookMeetingButtonVisible() {
    return await this.bookMeetingButton.isVisible();
  }

  // Method to check if the "Get started" button is visible
  async clickGetStartedButton() {
    return await this.getStartedButton.click();
  }

  // Method to click the "Managed IT Services" link and wait for the navigation
  async clickManagedItServices() {
    await this.managedItServicesLink.click();
    await this.page.waitForURL(/.*managed-it-services/);
  }

  // Method to click the "Cybersecurity" link and wait for the navigation
  async clickCybersecurity() {
    await this.cybersecurityLink.click();
    await this.page.waitForURL(/.*it-security/);
  }

  // Method to click the "Cloud experts" link and wait for the navigation
  async clickCloudExperts() {
    await this.cloudExpertsLink.click();
    await this.page.waitForURL(/.*cloud-services/);
  }

  // Method to click the "Data analytics" link and wait for the navigation
  async clickDataAnalytics() {
    await this.dataAnalyticsLink.click();
    await this.page.waitForURL(/.*klikanalytics.co/);
  }

  // Method to navigate back to the home page
  async goBackToHome() {
    await this.page.goBack();
    await this.page.waitForURL("https://klik.solutions");
  }

  // Method to click a specific "Learn more" link by index and verify the new tab's URL
  async verifyLearnMoreLink(index, expectedURL) {
    const [newTab] = await Promise.all([
      this.page.context().waitForEvent("page"), // Wait for a new page (tab) to open
      this.learnMoreLinks.nth(index).click(), // Click the "Learn more" link at the specified index
    ]);

    // Wait for the new tab to load and verify its URL
    await newTab.waitForURL(expectedURL);
    await newTab.close(); // Close the tab after verification
  }

  // Method to click on "Show more industries"
  async showMoreIndustries() {
    await this.showMoreIndustriesButton.click();
  }

  // Method to verify the visibility of industry items
  async verifyIndustriesVisibility() {
    await expect(this.nonprofitsText).toBeVisible();
    await expect(this.transportationText).toBeVisible();
    await expect(this.realEstateText).toBeVisible();
    await expect(this.supplyChainText).toBeVisible();
    await expect(this.dentalPracticeText).toBeVisible();
  }

  // Method to click the "Klik to support" link and wait for navigation
  async clickSupportLink() {
    await this.klikToSupportLink.click();
    await this.page.waitForURL(/.*contact-us/); // Wait for the URL to match the expected pattern
  }
};