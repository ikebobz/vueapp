<template>
<table>
    <tbody>
        <tr>
            <td>
                <label class = "labels">{{label1}}</label>
                <input type = "text" />
            </td>
            <td>
                <label class = "labels">{{label2}}</label>
                <input type = "text" />
            </td>
            <td class>
                <input type = "text" class = "noshow" />
            </td>
        </tr>
    </tbody>
</table>
</template>
<script>
export default {
  name: 'TwoBoxes',
  props: {
    label1: String,
    label2: String
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
.noshow{
  visibility:hidden;
}

</style>
