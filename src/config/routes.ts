export default [
  { path: '/', component: () => import('../views/shop/home-page.vue') },
  {
    path: '/account',
    children: [
      { path: 'userLogin', component: () => import('../views/login/user-login.vue') },
      { path: 'userRegister', component: () => import('../views/login/user-register.vue') },
      { path: 'merchantLogin', component: () => import('../views/login/merchant-login.vue') },
      { path: 'merchantRegister', component: () => import('../views/login/merchant-register.vue') }
    ]
  },
  { path: '/items/:id', component: () => import('../views/shop/item-info.vue') },
  {
    path: '/user',
    component: () => import('../views/user/user-center.vue'),
    children: [
      { path: 'info', component: () => import('../views/user/user-info.vue') },
      { path: 'order', component: () => import('../views/user/order-list.vue') },
      {
        path: 'orderNeedConfirm',
        component: () => import('../views/user/order-list-need-confirm.vue')
      },
      {
        path: 'orderWaitGoods',
        component: () => import('../views/user/order-list-wait-goods.vue')
      },
      {
        path: 'orderToComment',
        component: () => import('../views/user/order-list-to-comment.vue')
      },
      { path: 'service', component: () => import('../views/user/after-sale-service.vue') }
    ]
  },
  {
    path: '/merchant',
    component: () => import('../views/merchant/trade-center.vue'),
    children: [
      { path: 'info', component: () => import('../views/merchant/merchant-info.vue') },
      { path: 'goods', component: () => import('../views/merchant/goods-list.vue') },
      { path: 'order', component: () => import('../views/merchant/order-list.vue') },
      {
        path: 'service',
        component: () => import('../views/merchant/after-sale-service-request-list.vue')
      }
    ]
  }
]
