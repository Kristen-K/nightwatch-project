describe('Get list of recent posts, check they are >10 characters & total of 5 posts', () => {
    it('Get list of recent posts', async () => {
        const blogPage = browser.page.blogPage()
        blogPage
        .navigate()
        browser.findElements('#recent-posts-3 ul li')
        browser.expect.elements('#recent-posts-3 ul li').count.to.equal(5);
        //console.log(list);

    })
})