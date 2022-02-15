<template>
<table>
  <tr>
    <td>
      <label>{{label1}}: </label>
      <select :value = "choice" @change = "this.$emit('update:choice',$event.target.value)">
        <option>{{option1}}</option>
        <option>{{option2}}</option>
      </select>
    </td>
    <td><input type = "text" class = "noshow"/></td>
    <td><input type = "text" class = "noshow"/></td>
  </tr>
</table>
</template>
<script type = "text/javascript">
export default {
  name: 'sex',
  props: {
    label1: String,
    option1: String,
    option2: String,
    choice: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
<style scoped>
table{
    width:100%;
}
td{
    width:33%;
    padding-top:20px;
}
.noshow
{
  visibility: hidden;
}
</style>
