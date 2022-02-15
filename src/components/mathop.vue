<template>
<label>First Number is : {{state.first}}</label>
<label>Second number is : {{state.second}}</label>
<label>Third number is : {{state.third}}</label>
<p>
<input type = "text" v-model = "input1" />
<input type = "text" v-model = "input2" />
<input type = "text" v-model = "input3" />
</p>
<p><button @click = "updateState(input1, input2, input3)">Update</button></p>
<p>Sum is : {{sum}}</p>
<p>Average is : {{average}}</p>
<p>Product is : {{product}}</p>
</template>
<script>
import { reactive, ref, computed } from 'vue'
export default {
  setup () {
    const state = reactive(
      {
        first: ref(1),
        second: ref(1),
        third: ref(1)
      }
    )
    const sum = computed(() => (~~state.first + ~~state.second + ~~state.third))
    const average = computed(() => ((~~state.first + ~~state.second + ~~state.third) / 3))
    const product = computed(() => (state.first * state.second * state.third))
    const updateState = function (f, s, t) {
      state.first = f
      state.second = s
      state.third = t
    }
    return { state, sum, average, product, updateState }
  },
  data: () => {
    return {
      input1: 0,
      input2: 0,
      input3: 0
    }
  }
}

</script>
<style scoped>
label, input[type = text]{
 margin-left: 50px
}
</style>
