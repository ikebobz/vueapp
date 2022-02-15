<template>
<table>
    <tbody>
        <tr>
            <td>
                <label class = "labels">{{label1}}</label>
                <input type = "text" v-model = "field1"/>
            </td>
            <td>
                <label class = "labels">{{label2}}</label>
                <input type = "text" v-model = "field2"/>
            </td>
            <td>
                <label class = "labels">{{label3}}</label>
                <input type = "text" v-model = "field3"/>
            </td>
        </tr>
    </tbody>
</table>
<span>{{field1}}</span><span>{{field2}}</span><span>{{field3}}</span>
</template>
<script>
export default {
  name: 'Threeboxes',
  props: {
    label1: String,
    label2: String,
    label3: String,
    text: String
  },
  data: function () {
    return {
      field1: '',
      field2: '',
      field3: ''
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
td{
    width:33%;
}

</style>
