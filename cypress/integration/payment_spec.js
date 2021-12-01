describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("johndoe");
    cy.findByLabelText(/password/i).type("s3cret");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();

    // check account balance
    // let oldBalance;
    // cy.get("[data-test=sidenav-user-balance]")
    //   .then(($balance) => (oldBalance = $balance.text()))
    //   .then((balance) => console.log(balance));
    let oldBalance;
    cy.get("[data-test=sidenav-user-balance]").then(($balance) => (oldBalance = $balance.text()));
    // cy.get("[data-test=sidenav-user-balance]").then(($balance) => console.log($balance.text()));

    // click on new button
    cy.findByRole("button", { name: /new/i, hidden: true }).click();

    // search for user
    cy.findByRole("textbox").type("devon becker");
    cy.findByText(/devon becker/i).click();

    // add amount and note and click pay
    // return to transactions
    // gof to personal payments
    // click in payment
    // verify if payment was made
    // verify if payment amount was deducted
  });
});
