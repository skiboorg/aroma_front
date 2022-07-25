<template>
  <q-page class="page">
    <div class="container">
      <!--      <q-breadcrumbs class="breadcrumbs">-->
      <!--        <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />-->

      <!--        <q-breadcrumbs-el label="Галерея" />-->
      <!--      </q-breadcrumbs>-->

      <h1 class="title q-mb-lg q-mb-lg-xl text-center">Наш Блог / {{category.title}}</h1>

            <q-breadcrumbs class="breadcrumbs">
              <q-breadcrumbs-el class="text-grey-6" :to="{name:'blog'}" label="Наш Блог" />

              <q-breadcrumbs-el :label="category.title" />
            </q-breadcrumbs>

      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-6 " v-for="item in category.items" :key="item">
          <router-link :to="`blog${category.title_slug}/${item.title_slug}`">
            <q-img class="q-mb-md" :src="item.image"/>
            <p class="text-h6">{{item.title}}</p>
          </router-link>

        </div>
      </div>

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
      category:[],
    }

  },
  async beforeMount() {
    console.log(this.$route)
    const resp = await this.$api.get(`/api/data/blog_category?title_slug=${this.$route.params.title_slug}`)
    console.log(resp.data)
    this.category = resp.data
  },
}
</script>
<style lang="sass" scoped>
.blog-categories
  display: grid
  grid-template-columns: 1fr
  grid-gap: 50px
.blog-category
  display: flex
  align-items: center
  position: relative
  cursor: pointer
  &-text
    position: relative
    background: #FCFAF7
    padding: 85px 110px 30px 110px
    flex-basis: 900px

    &.left
      left: -60px
    &.right
      right: -60px
      z-index: 10
    &.arrow
      padding: 0 0 85px 0 !important
.blog-category-text__wrapper
  background: #FCFAF7
  flex-basis: 900px
.container-p-left
  max-width: 1630px
  margin-left: auto
.container-p-right
  max-width: 1630px
  margin-right: auto
</style>
