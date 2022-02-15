<template>
<div>
<div>
<img :src = "item.imagesrc" :alt = "item.name"/>
</div>
<div>
    <p><strong>{{item.name}}</strong></p>
    <p><label>Price: </label><strong>N{{item.price}}</strong></p>
</div>
<Button @click = "addCart(item)">Add to Cart</Button>
</div>
</template>
<script>
export default {
  name: 'shopitem',
  props: {
    item: {
      type: Object,
      default: function () {
        return {
          id: 0,
          name: 'image',
          description: 'an image',
          price: 1,
          imagesrc: 'resource'
        }
      }
    }
  },
  methods: {
    addCart (item) {
      this.$emit('updatecart', item)
    }
  }
}
</script>
<style scoped>
img{
  width:100px
}
</style>
