<template>
  <q-page class="page ">
    <section class="">
      <div class="container">
        <q-breadcrumbs class="breadcrumbs">
          <q-breadcrumbs-el class="text-grey-6" :to="{name:'index'}" label="Главная" />

          <q-breadcrumbs-el label="О нас" />
        </q-breadcrumbs>

        <h1 class="title q-mb-lg q-mb-lg-xl">О нас</h1>
          <div class="row q-col-gutter-md-xl items-center">
          <div class=" col-12 col-md-6 q-mb-lg q-mb-md-none">
            <p class="text-lh-150">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto beatae culpa, cupiditate dolorem dolores, earum eveniet facere illum nam perferendis porro quam quasi quibusdam quod rerum sed veritatis voluptates?
            </p>
<!--            <router-link class="link" :to="{name:'about'}">Узнать больше</router-link>-->
          </div>
          <div class="col-12 col-md-6">
            <div class="row q-col-gutter-md-md ">
              <div class="col-12 text-center"><img class="img" style="width: 60%" src="~assets/about2.jpg" alt=""></div>


            </div>
          </div>
        </div>
      </div>
    </section>






  </q-page>

</template>
<script>

export default {

  data(){
    return{
      modal:false,
      modalImg:'',
      teamItems:[
        {img:'t1.png',name:'Ангелина Коптеева',work:'Искусствовед'},
        {img:'t2.png',name:'Петр Пономарев',work:'Юрист, директор фирмы'},
        {img:'t3.png',name:'Антон Сергеев',work:'Менеджер'},


      ]

    }
  }

}
</script>

<style lang="sass" scoped>
.about-img-med
  display: none
.about-img-mob
  display: none
.about-wrapper
  background: url(~assets/a_bg_1920.png) no-repeat left top
  height: 930px
  background-size: contain
  z-index: -1
  margin-top: -40px
  padding-top: 40px
.about-top
  margin-bottom: 375px

.team
  margin-bottom: 45px
  &-grid
    display: grid
    grid-template-columns: repeat(4,1fr)
    grid-gap: 60px
    margin-bottom: 45px
  .team-item
    img
      margin-bottom: 40px
    &:nth-child(even)
      margin-top: 50px
@media (max-width: 1024px)
  .about-img-med
    display: block

  .about-top
    margin-bottom: 0
  .team-grid
    grid-template-columns: repeat(2, 1fr)
    grid-column-gap: 15px
    grid-row-gap: 40px
    .team-item
      img
        margin-bottom: 20px
      &:nth-child(even)
        margin-top: 30px
.interier
  &-grid
    display: grid
    grid-template-columns: repeat(3,1fr)
    grid-column-gap: 20px
    grid-row-gap: 14px
    margin-bottom: 70px
@media (max-width: 1024px)
  .interier-grid
    grid-template-columns: repeat(1, 1fr)
    grid-column-gap: 4px
    grid-row-gap: 0px
@media (max-width: 768px)
  .about-img-med
    display: none
  .about-img-mob
    display: block
@media (max-width: 1365px)
  .about-wrapper
    background: unset
    height: unset

</style>
