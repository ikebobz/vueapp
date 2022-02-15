<template>
<table>
    <tbody>
        <tr>
            <td>
                <label class = "labels">{{label1}}</label>
                <input type = "text" v-model = "name" @input = "textChange"/>
                </td>
            <td>
                <input type = "text" class = "noshow"/>
                <slot name = "slot1"></slot>
            </td>
            <td>
                <input type = "text" class = "noshow"/>
            </td>
        </tr>
    </tbody>
</table>

</template>
<script>
export default {
  name: 'OneBox',
  props: {
    label1: String
  },
  data: function () {
    return {
      name: 'ikenna onyenuforo',
      sex: 'male',
      mobile: '08036165791',
      address: 'Oshodi/Isolo'
    }
  },
  methods: {
    textChange (e) {
      this.$emit('textUpdate', e.target.value)
    }
  }
}

</script>
<style scoped>
.labels
{
    display:block;
}
table{
    width:100%;
}
tr{
    width:33%;
}
.noshow
{
  visibility:hidden;
}

</style>
