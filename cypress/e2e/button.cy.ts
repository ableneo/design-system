describe("The ButtonComponent", () => {
    it("Checks that the button element exists and is visible", () => {
        const selector = "ableneo-button";
        cy.visitComponentStory("button", "default-button");
        cy.get(selector).should("exist");
        cy.get(selector).should("be.visible");
    });
});
