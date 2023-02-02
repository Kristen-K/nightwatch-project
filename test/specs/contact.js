
describe('Fill in Contact input fields, submit form & assert success message', () => {
    it('fill in name, email, phone & message', async () => {
        const contactPage = browser.page.contactPage()
        contactPage
        .navigate()
        .updateValue('@inputName', 'Simon Boot')
        .updateValue('@inputEmail', 'hshsh@hh.com')
        .updateValue('@inputPhoneNumber', '00904000000')
        .click('@btnSubmit')
        //try submit form .submitForm()
    })

    it('assert successs message', async () => {
        const contactPage = browser.page.contactPage()
        .assert.textEquals('@alertRole', 'Thanks for contacting us! We will be in touch with you shortly')
    })
})