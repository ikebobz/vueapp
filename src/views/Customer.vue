<template>
 <div>
  <!--<Threeboxes label1 = "FirstName" label2 = "LastName" label3 = "OtherNames" />
  <Threeboxes label1 = "Email" label2 = "Address" label3 = "Mobile" />-->
  <ThreeBoxEx :label1Value = "label1" :label2Value = "label2" :label3Value = "label3" :value = "parameter">
  </ThreeBoxEx>
  <TwoBoxes label1 = "Sex" label2 = "Zip Code" />
  <sex label1 = "Choose your sex" option1 = "male" option2 = "female" />
  <SingleButton label1 = "Store Data" />
  <OneBox label1 = "Location" @textUpdate = "ontextChange"></OneBox>
  <mathop></mathop>
  <dtable :headerlist="labels" :content="set"></dtable>
  <!--<AppTabs :tablist = "list">
    <template v-slot:tabPanel1>Content1</template>
    <template v-slot:tabPanel2>Content2</template>
    <template v-slot:tabPanel3>Content3</template>
    <template v-slot:tabPanel4>Content4</template>
  </AppTabs>-->
  </div>
</template>
<script>
// import Threeboxes from '../components/Threeboxes.vue'
import TwoBoxes from '../components/TwoBoxes.vue'
import SingleButton from '../components/SingleButton.vue'
import sex from '../components/sex.vue'
import OneBox from '../components/OneBox.vue'
import mathop from '../components/mathop.vue'
import dtable from '../components/table.vue'
import ThreeBoxEx from '../components/ThreeBoxEx.vue'
// import AppTabs from '../components/AppTabs.vue'

export default {
  name: 'Customer',
  components: {
    TwoBoxes,
    SingleButton,
    sex,
    mathop,
    dtable,
    OneBox,
    ThreeBoxEx
  },
  data: function () {
    return {
      list: ['Tab1', 'Tab2', 'Tab3', 'Tab4'],
      labels: ['NAME', 'ADDRESS', 'MOBILE', 'SEX'],
      set: [{
        name: 'ikenna onyenuforo',
        address: 'Isolo Ejigbo',
        mobile: '08036165791',
        sex: 'male'
      }, {
        name: 'ijeoma james',
        address: 'Lekki',
        mobile: '08035896835',
        sex: 'female'
      }, {
        name: 'scott presley',
        address: 'NY',
        mobile: '+2317689',
        sex: 'male'
      }],
      label1: 'Firstname',
      label2: 'Lastname',
      label3: 'Othername',
      parameter: 10
    }
  },
  methods: {
    ontextChange: function (e) {
      alert(e)
    }
  }
}

</script>
