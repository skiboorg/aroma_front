
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'index', component: () => import('pages/Index.vue') },
      { path: 'about',name:'about', component: () => import('pages/About.vue') },
      { path: 'profit',name:'profit', component: () => import('pages/Profit.vue') },
      { path: 'gallery',name:'gallery', component: () => import('pages/Gallery.vue') },
      { path: 'item',name:'item', component: () => import('pages/Item.vue') },
      { path: 'login',name:'login', component: () => import('pages/Login.vue') },
      { path: 'register',name:'register', component: () => import('pages/Register.vue') },
       { path: 'cart',name:'cart',meta:{title:'Корзина'}, component: () => import('pages/Cart.vue') },
    ]
  },
  {
    path: '/lk',
    component: () => import('layouts/LkLayout.vue'),
    children: [
      { path: '',name:'lk-index',meta:{title:'Профиль'}, component: () => import('pages/Lk/Profile.vue') },

      { path: 'orders',name:'lk-orders',meta:{title:'Заказы'}, component: () => import('pages/Lk/Orders.vue') },
      { path: 'settings',name:'lk-settings',meta:{title:'Настройки'}, component: () => import('pages/Lk/Settings.vue') },
      { path: 'transactions',name:'lk-transactions',meta:{title:'Транзакции'}, component: () => import('pages/Lk/Transactions.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
