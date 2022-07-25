<template>
  <q-page class="page">
    <div class="container">
      <!--      <q-breadcrumbs class="breadcrumbs">-->
      <!--        <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />-->

      <!--        <q-breadcrumbs-el label="Галерея" />-->
      <!--      </q-breadcrumbs>-->

      <h1 class="title q-mb-lg q-mb-lg-xl text-center">Наш Блог / {{item.title}}}</h1>

      <q-breadcrumbs class="breadcrumbs">
        <q-breadcrumbs-el class="text-grey-6" :to="{name:'blog'}" label="Наш Блог" />
        <q-breadcrumbs-el class="text-grey-6" :to="{name:'blog',params:{title_slug:$route.params.title_slug}}" :label="$route.params.title_slug" />

        <q-breadcrumbs-el :label="item.title" />
      </q-breadcrumbs>



      <q-img class="top-img q-mb-lg"  fit="cover" :src="item.image_top">
        <p style="left: 25px" class="absolute-bottom-left text-white text-h6">{{item.title}}</p>
      </q-img>
        <div class="" v-html="item.text"></div>

    </div>









  </q-page>

</template>
<script>


export default {
  data() {
    return {
      modal:false,
      modalImg:'',
      checkBox:false,
      item:{},
    }

  },
  async beforeMount() {
    console.log(this.$route)
    const resp = await this.$api.get(`/api/data/blog_item?item_slug=${this.$route.params.item_slug}`)
    console.log(resp.data)
    this.item = resp.data
  },
}
</script>
<style lang="sass" scoped>
.top-img
  height: 300px
</style>
