const { faker } = require('@faker-js/faker');

describe('Fill in Contact input fields, submit form & assert success message', () => {
    it('fill in name, email, phone & message', async () => {
    


        const  name = faker.name.fullName();
        const email = faker.internet.email();
        const phoneNumber = faker.phone.number();
        const message = faker.lorem.paragraphs(2);
        console.log("here:", name, email, phoneNumber, message)
    
        const contactPage = browser.page.contactPage()
        contactPage
        .navigate()
        .updateValue('@inputName', name)
        .updateValue('@inputEmail', email)
        .updateValue('@inputPhoneNumber', phoneNumber)
        .updateValue('@textAreaMessage', message)
        .click('@btnSubmit')
    })

    it('assert successs message', async () => {
        const contactPage = browser.page.contactPage()
        contactPage
        .assert.textEquals('@alertRole', 'Thanks for contacting us! We will be in touch with you shortly')
    })
})

