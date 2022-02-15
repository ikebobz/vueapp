<template>
<span>Firstname: {{firstname}}</span>
<span>Surname: {{lastname}}</span>
<span>Mobile: {{mobile}}</span>
<span>Address: {{address}}</span>
<span>Sex: {{sex}}</span>
<span>{{details}}</span>
</template>
<script lang = "ts">

import { Vue } from 'vue-class-component'
// import { Prop } from 'vue-property-decorator'

interface Iaccount {
  accNumber:number;
  accType:string;
  owningBank:string;
  maxdailyTransferLimit:number
}

export default class employee extends Vue {
  firstname: string = ''
  lastname: string = ''
  mobile: string = ''
  address: string = ''
  sex: string = ''
  count:Number = 0
  accountNumber?:Iaccount

  get details (): string {
    return `Details are ${this.firstname} ${this.lastname} is ${this.sex} and lives at ${this.address} `
  }
}
</script>
<style scoped>
span{
  display:block;
}
</style>
