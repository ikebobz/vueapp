<template>
<table>
    <tbody>
        <tr>
            <td>
                <label class = "labels">{{label1}}</label>
                <input type = "text"/>
            </td>
            <td>
                <label class = "labels">{{label2}}</label>
                <input type = "text"/>
            </td>
            <td>
                <label class = "labels">{{label3}}</label>
                <input type = "text"/>
            </td>
            <td>
              <span>{{getText}}</span>
            </td>
        </tr>
    </tbody>
</table>
<span>{{fname}}</span><span>{{lname}}</span><span>{{mname}}</span>
<p><Button @click = "getProduct(value1, value2)">Evaluate</Button></p>
</template>
<script lang = "ts">
import { Vue } from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'
import { logMethod } from '../Decorators'
export default class ThreeBoxEx extends Vue {
    label1:string = ''
    label2:string = ''
    label3:string = ''
    text:string = ''

    @Prop(String) readonly label1Value?:string
    @Prop(String) readonly label2Value?:string
    @Prop(String) readonly label3Value?:string
    @Prop(String) readonly textValue?:string
    @Prop(Number) value?:number

    @Watch('label1Value', { immediate: true })
    onlabel1ValueChange (value:string) {
      this.label1 = value
    }

    @Watch('label2Value', { immediate: true })
    onlabel2ValueChange (value:string) {
      this.label2 = value
    }

    @Watch('label3Value', { immediate: true })
    onlabel3ValueChange (value:string) {
      this.label3 = value
    }

    @Watch('value', { immediate: true })
    onValueChange (val:number) {
      this.text = val.toString()
    }

    data () {
      return {
        fname: '',
        lname: '',
        mname: '',
        value1: 2,
        value2: 3
      }
    }

    get getText (): string {
      return `${this.text}`
    }

    @logMethod
    public getSquare () {
      const val = parseInt(this.text)
      alert(`${val * val}`)
    }

    @logMethod
    public getProduct (x: number, y: number) {
      alert(`${x * y}`)
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
span
{
 margin-left:30px
}
p{
  text-align:center
}
</style>
