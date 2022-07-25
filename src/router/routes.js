
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',name:'index', component: () => import('pages/Index.vue') },
      { path: 'about',name:'about', component: () => import('pages/About.vue') },
      { path: 'blog',name:'blog', component: () => import('pages/Blog.vue') },
      { path: 'blog/:title_slug',name:'blog_category', component: () => import('pages/BlogCategory.vue') },
      { path: 'blog/:title_slug/:item_slug',name:'blog_item', component: () => import('pages/BlogItem.vue') },
      { path: 'catalog',name:'catalog', component: () => import('pages/Catalog.vue') },
      { path: 'contacts',name:'contacts', component: () => import('pages/Contacts.vue') },
      { path: 'delivery',name:'delivery', component: () => import('pages/Delivery.vue') },
      { path: 'payment',name:'payment', component: () => import('pages/Payment.vue') },
      { path: 'return',name:'return', component: () => import('pages/Return.vue') },
      { path: 'checkout',name:'checkout', component: () => import('pages/Checkout.vue') },
      { path: 'item/:slug',name:'item', component: () => import('pages/Item.vue') },
      { path: 'login',name:'login', component: () => import('pages/Login.vue') },
      { path: 'register',name:'register', component: () => import('pages/Register.vue') },
       { path: 'cart',name:'cart',meta:{title:'Корзина'}, component: () => import('pages/Cart.vue') },
       { path: 'auth',name:'auth', component: () => import('pages/Auth.vue') },
    ]
  },
  {
    path: '/lk',
    component: () => import('layouts/LkLayout.vue'),
    children: [
      { path: '',name:'lk-index',meta:{title:'Профиль'}, component: () => import('pages/Lk/Settings.vue') },

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
