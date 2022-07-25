import {Cookies, LocalStorage} from 'quasar'
import api from 'axios'
import { uid } from 'quasar'

export default async ({ app, router, Vue, store, ssrContext }) => {
  console.info('boot: init entered')

  const cookies = process.env.SERVER
    ? Cookies.parseSSR(ssrContext)
    : Cookies

  let token = cookies.get('auth_token')

  app.config.globalProperties.$cookies = cookies
  let session_id = cookies.get('session_id')
  let uid = Date.now().toString(36) + Math.random().toString(36).substring(2)
  if(session_id){
    store.dispatch('data/setSessionID',session_id)
  }else{
    cookies.set('session_id',uid)
    store.dispatch('data/setSessionID',uid)
  }

  if (token) {
   await store.dispatch('auth/getUser')

  }
  await store.dispatch('data/fetchCart')
  await store.dispatch('data/fetchStaticData')



  app.config.globalProperties.$auth = store.state.auth
  console.info('boot: init exited')
}


