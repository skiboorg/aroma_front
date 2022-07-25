<template>
  <p class="user-menu-item text-weight-medium no-margin">с возвращением GUEST</p>
     <router-link :to="{name:'lk-index'}" exact-active-class="active" exact class="user-menu-item">Учетная запись</router-link>
          <router-link :to="{name:'lk-orders'}" exact-active-class="active" exact class="user-menu-item ">История заказов</router-link>
          <router-link :to="{name:'lk-transactions'}" exact-active-class="active" exact class="user-menu-item ">Адрес доставки</router-link>


  <a href="#" @click.prevent="logoutUser" class="user-menu-item">Выйти</a>
</template>
<script>
import {mapActions} from "vuex";

export default {



  methods:{
    ... mapActions('auth',['logoutUser']),

  }
}
</script>
<style lang="sass" scoped>
.user-menu-item
  position: relative
  display: block
  padding: 20px 0 20px 30px
  font-weight: 300
  &:after
    position: absolute
    bottom: 0
    content: ''
    height: 1px
    left: 10px
    right: 10px
    background: #07737A
  &:last-child
    &::after
      content: none
  &.active
    color: #2A2B33

</style>
