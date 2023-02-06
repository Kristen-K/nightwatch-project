describe('Iframe', () => {
    it('Working with Iframe', async () => {
        iframePage = browser.page.iframePage()
      const frameElement = '#advanced_iframe'
        iframePage
        .navigate()

        
        .assert.elementPresent(frameElement)
        
        // access the iframe
         .frame(frameElement)
         .assert.elementPresent('#site-logo')

         // switch to parent site
         .frameParent()
         // verify page title
         .assert.textEquals('h1.tg-page-header__title', 'IFrame Sample')
    })
})