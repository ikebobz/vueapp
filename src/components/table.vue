<template>
<table>
<tbody>
<tr>
<template v-for = "entry,index in headerlist" :key = "index">
<th>{{entry}}</th>
</template>
</tr>
<template v-for = "item,index in content" :key = "index" >
<tr><td>{{item.name}}</td><td>{{item.address}}</td><td>{{item.mobile}}</td><td>{{item.sex}}</td></tr>
</template>
</tbody>
</table>
</template>
<script>
export default {
  name: 'dtable',
  props: {
    headerlist: Array,
    content: {
      type: Array,
      required: false
    }
  }
}
</script>
<style scoped>
table{
 width:100%
}
td{
 padding: 5px;
 border: 1px solid rgb(0,100,150)
}
th{
    color:white;
    background: rgb(0,100,150);

}
</style>
