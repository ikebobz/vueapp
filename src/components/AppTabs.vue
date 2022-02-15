<template>
<div :class = "{ flex: variant === 'horizontal'}">
<ul :class = "{ flex: variant === 'vertical'}">
  <li v-for = "(tab, index) in tablist" :key = "index">
        <label :for = "`${_uid}${index}`" v-text = "tab" />
        <input
          :id = "`${_uid}${index}`"
          type = "radio"
          :name = "`${_uid}-tab`"
          :value = "index + 1"
          v-model = "activetab"
        />
  </li>
</ul>
<template v-for = "(tab,index) in tablist">
<div :key = "index" v-if = "index + 1 === activetab">
        <slot :name="`tabPanel-${index + 1}`" />
  </div>
</template>
</div>
</template>
<script>
export default {
  name: 'AppTabs',
  props: {
    tablist: {
      type: Array,
      required: true
    },
    variant: {
      type: String,
      required: false,
      default: () => 'vertical',
      validator: (val) => ['vertical', 'horizonatal'].includes(val)
    }
  },
  data: function () {
    return {
      activetab: 1
    }
  }

}
</script>
<style>
.flex
{
 display: flex
}
li{
  list-style:none
}
</style>
