export default [
    { path: '/', component: () => import('../views/shop/home-page.vue') },
    { path: '/goods/:id', component: () => import('../views/shop/item-info.vue') },
    { path: '/login', component: () => import('../views/login/user-login.vue') },
    { path: '/register', component: () => import('../views/login/user-register.vue') },
    {
        path: '/user', component: () => import('../views/user/user-center.vue'),
        children: [
            { path: 'info', component: () => import('../views/user/order-list.vue') },
            { path: 'order', component: () => import('../views/user/order-list.vue') },
            { path: 'orderNeedConfirm', component: () => import('../views/user/order-list-need-confirm.vue') },
            { path: 'orderWaitGoods', component: () => import('../views/user/order-list-wait-goods.vue') },
            { path: 'orderToComment', component: () => import('../views/user/order-list-to-comment.vue') },
            { path: 'service', component: () => import('../views/user/after-sale-service.vue') },
        ]
    },
    {
        path: '/merchant', component: () => import('../views/merchant/trade-center.vue'),
        children: [
            { path: 'info', component: () => import('../views/user/order-list.vue') },
            { path: 'goods', component: () => import('../views/merchant/goods-info-edit.vue') },
            { path: 'order', component: () => import('../views/merchant/order-list.vue') },
            { path: 'service', component: () => import('../views/merchant/after-sale-service-request-list.vue') },
        ]
    }

]
