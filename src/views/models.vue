<template>
<employee :firstname = 'ikenna' :lastname = 'onyenuforo' :address = 'Isolo' :sex = 'male' :mobile = '8036165791'></employee>
</template>
<script lang = "ts">
import employee from '../components/employee.vue'
import { Vue, Options } from 'vue-class-component'
import { Router } from 'vue-router'

Vue.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate'])

@Options({
  components: { employee }
})

export default class Model extends Vue {
  beforeRouteEnter (to: Router, from: Router, next: Function) {
    const password = 'vendetta'
    const secure = prompt('Please enter passphrase')
    if (password === secure) next()
    else next(false)
  }
}
</script>
<style scoped></style>
