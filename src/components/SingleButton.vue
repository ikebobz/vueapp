<template>
<table>
    <tbody>
        <tr>
            <td>
                <input type = "submit" v-bind:value = "label1" />
            </td>
            <td>
                <input type = "text" class = "noshow"/>
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
  name: 'SingleButton',
  props: {
    label1: String
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
    text-align:center;
    padding-top:20px;
}
.noshow
{
  visibility:hidden;
}

</style>
