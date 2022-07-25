<template>
  <q-page >
        <div class="container">
          <div class="row">
            <div class="col-5">
               <h3 class="title">Войти</h3>
          <q-form @submit="userLoginAction" class="auth-form">
            <q-input
            outlined
            square
            bg-color="grey-2"
            :dense="!$q.screen.gt.md"
            v-model="userLogin.email"
            label="Ваш E-Mail *"

            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Это обязательное поле']"
          />
          <q-input
            :dense="!$q.screen.gt.md"
            outlined
            square
            bg-color="grey-2"
            :type="isPwd ? 'password' : 'text'"
            v-model="userLogin.password"
            label="Пароль *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Это обязательное поле' ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
            <div >
              <div class="">
                <q-btn  unelevated  no-caps  type="submit" color="primary" class="no-border-radius q-py-md q-px-md q-mb-lg" label="Авторизоваться"/>
              </div>

              <p class="text-body2 cursor-pointer q-mb-none q-mb-xs-md">Забыли пароль?</p>

            </div>
          </q-form>
            </div>
            <div class="col-5 offset-1">
                <h3 class="title">Регистрация</h3>
          <q-form @submit="completeRegistration" >
             <q-input
            outlined
            square
            bg-color="grey-2"
            :dense="!$q.screen.gt.md"
            v-model="userRegister.email"
            label="Ваш E-Mail *"
            lazy-rules
            :rules="[
              val => val && val.length > 0 || 'Это обязательное поле',
              val => email_re.test(String(val)) || 'Это не корректный адрес e-mail'
              ]"/><!--    email      -->
            <q-input
            outlined
            square
            bg-color="grey-2"
            :dense="!$q.screen.gt.md"
            v-model="userRegister.fio"
            label="Ф.И.О. *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Это обязательное поле']"
          />
             <q-input
            outlined
            square
            bg-color="grey-2"
            :dense="!$q.screen.gt.md"
            :type="isPwd ? 'password' : 'text'"
            v-model="userRegister.password1"
            label="Пароль *"
            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Это обязательное поле']"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            outlined
            square
            bg-color="grey-2"
            :dense="!$q.screen.gt.md"
            :type="isPwd ? 'password' : 'text'"
            v-model="userRegister.password2"
            label="Повторите пароль *"

            lazy-rules
            :rules="[val => val !== null && val !== '' || 'Это обязательное поле',
             val => val===userRegister.password1 || 'Пароли не совпадают' ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>




            <div class="q-mt-md-lg">
              <q-btn  unelevated  no-caps  type="submit" color="primary" class="no-border-radius q-py-md q-px-md q-mb-lg" label="Зарегистрироваться"/>
            </div>
          </q-form>
            </div>
          </div>

        </div>






  </q-page>
</template>
<script>

import { mapActions } from 'vuex'
export default {

  data () {
    return {
      email_re:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

      is_loading:false,
      isPwd:true,
      agree:false,
      userLogin:{
        email:null,
        password:null,
      },
      userRegister:{
        fio:null,
        email:null,
        password1:null,
        password2:null,
      },

    }
  },
  methods:{
    ... mapActions('auth',['loginUser']),
    userLoginAction() {
      this.loginUser(this.userLogin)

    },
     async completeRegistration(){
      this.is_loading = true
      try{
        await this.$api.post('/auth/users/', {
          email:this.userRegister.email,
          fio:this.userRegister.fio,
          password:this.userRegister.password2,
        })
        this.$q.notify({
          message: 'Аккаунт создан, Вы можете войти',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
          color:'positive',
          icon: 'announcement'
        })
        this.is_loading=false
      }catch (e) {
        this.$q.notify({
          message: 'Проверьте введеные данные',
          position: this.$q.screen.lt.sm ? 'bottom' : 'bottom-right',
           color:'red',
          icon: 'announcement'
        })
      }
      this.is_loading = false
    },
  }
}
</script>

<style lang="sass" scoped>

</style>
