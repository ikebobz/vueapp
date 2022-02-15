<template>
<div id = "wid">
<h1>{{state.count}}</h1>
<p><button @click = "updateCount">Press me</button></p>
<label>{{area}}</label>
<p><slot name = "slot1"></slot></p>
</div>
</template>
<script>
import { reactive, ref, computed } from 'vue'
export default {
  setup () {
    const state = reactive({
      len: ref(1),
      breadth: ref(1),
      count: ref(0)
    })
    const updateCount = function () {
      state.count += 1
      state.len += 1
      state.breadth += 2
    }
    const area = computed(() => (state.len * state.breadth))
    return {
      state, updateCount, area
    }
  }
}
</script>
<style scoped>
#wid{
text-align: right
}
#wid button{
    background-color:green;
    color:white;

}
</style>
