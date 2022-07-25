<template>
  <q-page class="page">
    <div class="container">
      <q-breadcrumbs class="breadcrumbs">
        <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />
        <q-breadcrumbs-el label="Условия доставки" />
      </q-breadcrumbs>
      <section>
        <h1 class="title q-mb-lg ">Условия доставки</h1>
        <div class="" v-html="staticData.delivery_info"></div>
      </section>
    </div>
  </q-page>
</template>
<script>

import {mapGetters} from "vuex";

export default {
  data() {
    return {
    }
  },
  computed:{
    ...mapGetters('data',['staticData'])
  }
}
</script>
