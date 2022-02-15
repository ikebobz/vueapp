<template>
<div>
  <h3>Shopping items</h3>
  <widget1>
    <template v-slot:slot1>I love designing with Vue...an indeed progressive framework</template>
  </widget1>
  <shopitem v-for = "item in this.items" :item = "item" :key = "item.id"></shopitem>
</div>
</template>
<script>
import shopitem from '../components/shopitem.vue'
import widget1 from '../components/widget1.vue'
export default {
  name: 'ItemList',
  components: {
    shopitem,
    widget1
  },
  props: {
    address: {
      type: Object,
      default: () => {
        return {
          streetno: 12,
          StreetName: 'levatis',
          LGA: 'Oshodi-Isolo',
          State: 'Lagos'
        }
      }
    }
  },
  data () {
    return {
      items: [{ id: 101, name: 'banana', price: 20, description: 'fresh green', imagesrc: require('../assets/apple.jpeg') },
        { id: 102, name: 'apple', price: 40, description: 'pink freshies from Peru', imagesrc: require('../assets/banana.jpeg') },
        { id: 103, name: 'carrot', price: 35, description: 'crunchy and spicy', imagesrc: require('../assets/carrot.jpeg') }
      ]
    }
  }
}
</script>
<style></style>
