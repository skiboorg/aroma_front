<template>
  <q-page class="page">
    <div class="container">
<!--      <q-breadcrumbs class="breadcrumbs">-->
<!--        <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />-->

<!--        <q-breadcrumbs-el label="Галерея" />-->
<!--      </q-breadcrumbs>-->

      <h1 class="title q-mb-lg q-mb-lg-xl text-center">Каталог</h1>
      <p class="text-fs18 text-avenir-450 q-mb-xl text-center">
        Следите за своим здоровьем с помощью наших масел
      </p>

      <!--      <p class="text-dark text-fs18 q-mb-sm">Оригиналы – <span class="text-grey-7">от 150 000 ₽</span></p>-->
      <!--      <p class="text-dark text-fs18 q-mb-xl">Репродукция – <span class="text-grey-7">от 50 000 ₽ до 140 000 ₽</span></p>-->

      <div class="gallery-grid">
        <router-link :to="{name:'item',params:{slug:item.name_slug}}" v-for="(item,index) in items" :key="index">
          <div class="gallery-item" >
            <!--              @click="modalImg = slide.image,modal=true"-->
            <div  >
              <q-img :ratio="1" fit="contain" :src="item.image_thumb" alt=""/>
            </div>
            <p class="q-mb-sm text-left gallery-item__title text-dark">{{item.name}}</p>
            <!--                  <p class="text-left gallery-item__subtitle text-dark">{{slide.subtitle}}</p>-->


            <p class="q-mb-none text-weight-light text-body2">{{item.description_short}}</p>

          </div>
        </router-link>

      </div>
      <p class="q-mb-none text-weight-light text-body2">Мы не просто производим масла: мы исследуем, пробуем и
        делимся с вами лучшими рецептами использования нашей
        продукции, даем советы и консультируем по каждому
        отдельному случаю. Мы не просто производим масла: мы исследуем, пробуем и
        делимся с вами лучшими рецептами использования нашей
        продукции, даем советы и консультируем по каждому
        отдельному случаю. Мы не просто производим масла: мы исследуем, пробуем и
        делимся с вами лучшими рецептами использования нашей
        продукции, даем советы и консультируем по каждому
        отдельному случаю. Мы не просто производим масла: мы исследуем, пробуем и
        делимся с вами лучшими рецептами использования нашей
        продукции, даем советы и консультируем по каждому
        отдельному случаю. Мы не просто производим масла: мы исследуем, пробуем и
        делимся с вами лучшими рецептами использования нашей
        продукции, даем советы и консультируем по каждому
        отдельному случаю. Мы не просто производим масла: мы исследуем, пробуем и
        делимся с вами лучшими рецептами использования нашей
        продукции, даем советы и консультируем по каждому
        отдельному случаю. Мы не просто производим масла: мы исследуем, пробуем и
        делимся с вами лучшими рецептами использования нашей
        продукции, даем советы и консультируем по каждому
        отдельному случаю. Мы не просто производим масла: мы исследуем, пробуем и
        делимся с вами лучшими рецептами использования нашей
        продукции, даем советы и консультируем по каждому
        отдельному случаю. </p>

    </div>



  </q-page>
  <q-dialog
    v-model="modal"
  >
    <q-card class="relative-position" style="width: 700px; max-width: 80vw; height: auto">
      <q-btn v-close-popup class="absolute-top-right z-max" icon="close" round flat/>
      <q-img :ratio="1" :src="modalImg"/>
    </q-card>
  </q-dialog>
</template>
<script>


export default {
  data() {
    return {
      modal:false,
      modalImg:'',
      checkBox:false,
      items:[],
    }

  },
  async beforeMount() {
    const resp = await this.$api.get('/api/item/get?type=all')
    console.log(resp.data)
    this.items = resp.data
  },
}
</script>
<style lang="sass" scoped>
.gallery-grid
  display: grid
  grid-template-columns: repeat(3,1fr)
  grid-column-gap: 20px
  grid-row-gap: 40px
  margin-bottom: 125px
@media (max-width: 1024px)
  .gallery-grid
    grid-template-columns: repeat(2, 1fr)
    grid-column-gap: 10px
</style>
