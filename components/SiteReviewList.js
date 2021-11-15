app.component('site-review',{
    template:
    /*html*/
    `<review-list v-if="reviews.length" :reviews="reviews"></review-list>`,

    data() {
        reviews: []

    },
    method: {
        addReview(review) {
            this.reviews.push(review)
        }
    }
})