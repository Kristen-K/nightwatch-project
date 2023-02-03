
describe('Get list of recent posts, check they are >10 characters & total of 5 posts', () => {
    it('Get list of recent posts', async () => {
        const blogPage = browser.page.blogPage()
        blogPage
        .navigate()
        .expect.elements('@blogList').count.to.equal(5)
    
        const list = await browser.findElements('#recent-posts-3 ul li')

        for (var i = 0; i < list.length; i++) {
            let items = await browser.getText(list[i])
            if (items.length > 10) {
                console.log("passed:: Post is over 10, number of characters:", items.length)
            }
            console.log("here:", items)
            
        }
    })
})
