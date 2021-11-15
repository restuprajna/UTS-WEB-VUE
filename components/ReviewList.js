app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
   
    <figure class="text-end" v-for="(review, index) in reviews" :key="index">
      <blockquote class="blockquote">
        <p>"{{ review.review }}".</p>
      </blockquote>
      <figcaption class="blockquote-footer">
        {{ review.nama }}
      </figcaption>
    </figure>

 
  `
  })