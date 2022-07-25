<template>
  <q-page class="page">
    <div class="container">
      <!--      <q-breadcrumbs class="breadcrumbs">-->
      <!--        <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />-->

      <!--        <q-breadcrumbs-el label="Галерея" />-->
      <!--      </q-breadcrumbs>-->

      <h1 class="title q-mb-lg q-mb-lg-xl text-center">Наш Блог</h1>

    </div>
<div class="blog-categories" >
  <div :class="[category.id % 2 !== 0 ? 'container-p-left' : 'container-p-right']" v-for="(category,index) in categories" :key="category.id">
    <div v-if="category.id % 2 !== 0" class="blog-category" @click="$router.push({name:'blog_category',params:{title_slug:category.title_slug}})">

      <q-img :src="category.image"/>
      <div class="blog-category-text__wrapper">
        <div class="blog-category-text left" v-html="category.text"></div>
        <div class="blog-category-text left text-center arrow">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9998 34.252C27.3645 34.252 34.9582 26.7977 34.9582 17.6009C34.9582 8.40598 27.3645 0.949921 17.9998 0.949921C8.63517 0.949921 1.0415 8.40598 1.0415 17.6009C1.0415 26.7977 8.63517 34.252 17.9998 34.252Z" stroke="#07737A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.3555 23.8494L21.7465 17.6012L15.3555 11.353" stroke="#07737A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
      </div>

    </div>
    <div v-else class="blog-category" @click="$router.push({name:'blog_category',params:{title_slug:category.title_slug}})">
      <div class="blog-category-text__wrapper">
        <div class="blog-category-text right" v-html="category.text"></div>
        <div class="blog-category-text right text-center arrow">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9998 34.252C27.3645 34.252 34.9582 26.7977 34.9582 17.6009C34.9582 8.40598 27.3645 0.949921 17.9998 0.949921C8.63517 0.949921 1.0415 8.40598 1.0415 17.6009C1.0415 26.7977 8.63517 34.252 17.9998 34.252Z" stroke="#07737A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.3555 23.8494L21.7465 17.6012L15.3555 11.353" stroke="#07737A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </div>
      </div>
      <q-img :src="category.image"/>
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
      categories:[],
    }

  },
  async beforeMount() {
    const resp = await this.$api.get('/api/data/blog_categories')
    console.log(resp.data)
    this.categories = resp.data
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
