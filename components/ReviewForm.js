app.component('review-form', {
    template:
    /*html*/
    `<form class="offset-lg-2 col-lg-8" @submit.prevent="onSubmit">
    <div class="mb-3">
      <label for="nama" class="form-label">Nama</label>
      <input type="text" class="form-control" id="nama" autocomplete="off" v-model="nama">
    </div>

    <div class="mb-3">
      <label for="email">Email</label>
      <input type="email"  class="form-control" id="email" autocomplete="off" v-model="email">
    </div>

    <div class="mb-3">
      <label for="Review">Review</label>
      <textarea name="" class="form-control" id="Review" cols="30" rows="10" v-model="review"></textarea>
    </div>

    <div class="mb-3">
      <button class="btn btn-primary w-100" style="background-color: #B83B5E;">Send</button>
    </div>
  </form> `,

    
    data() {
      return {
        nama: '',
        email: '',
        review: '',


      }
    },
    methods: {
      onSubmit() {
        if (this.nama === '' || this.email === '' || this.review === '' ) {
          alert('Review is incomplete. Please fill out every field.')
          return
        }
  
        let productReview = {
          nama: this.nama,
          email: this.email,
          review: this.review
         
  
        }
        this.$emit('review-submitted', productReview)
  
        this.nama = ''
        this.email = ''
        this.review = ''

  
      },

    }

    
  })