app.component('product-display', {

    template: 
    /*html*/
    `<div class="col-lg-3 col-md-4 col-sm-6 mt-5">
    <div class="card" style=" background-color: #F9ED69;">
      <img v-bind:src="image" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{title}}</h5>
        <p v-for="detail in details" class="card-text">{{detail}}</p>
        <span v-for="(variant, index) in variants" 
        :key="variant.id" 
        @mouseover="updateVariant(index)" class="dot shadow p-3 my-2 mx-1  p-2" :style="{backgroundColor: variant.color} "></span>
        
        <div >
          <a  class="btn btn-primary m-1" @click="addToCart" style="background-color: #F08A5D;">Add to chart</a>
          <a  class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">View</a>
        </div>
      </div>
    </div>
  </div>`,
    data() {
      return {
          product: 'Card',
          brand: 'Anonymous',
          selectedVariant: 0,
          details: ['feels great in hand', 'cool looking'],
          variants: [
            { id: 2234, color: 'black', image: '../assets/img/kartu-remi.jpg', quantity: 50 },
            { id: 2235, color: 'white', image: '../assets/img/kartu-remi-white.jpg', quantity: 50 },
          ]

      }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart')
        },
        updateVariant(index) {
            this.selectedVariant = index
        }

    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        }

    }
  })