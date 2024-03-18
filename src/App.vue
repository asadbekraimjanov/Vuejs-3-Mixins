<template>
  <div class="container mt-2">
    <app-alert :item="item" v-for="item in 2"></app-alert>
  </div>
</template>

<script>

import AppAlert from "@/components/AppAlert.vue";
import alertMixin from "@/AlertMixin";

export default {
  components: {AppAlert},
  data(){
    return{

    }
  },
  mixins: [alertMixin]
}
</script>

<style>

</style>
