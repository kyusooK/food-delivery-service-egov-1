
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OrderManagementOrderManager from "./components/listers/OrderManagementOrderCards"
import OrderManagementOrderDetail from "./components/listers/OrderManagementOrderDetail"

import RiderManagementRiderManager from "./components/listers/RiderManagementRiderCards"
import RiderManagementRiderDetail from "./components/listers/RiderManagementRiderDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/orderManagements/orders',
                name: 'OrderManagementOrderManager',
                component: OrderManagementOrderManager
            },
            {
                path: '/orderManagements/orders/:id',
                name: 'OrderManagementOrderDetail',
                component: OrderManagementOrderDetail
            },

            {
                path: '/riderManagements/riders',
                name: 'RiderManagementRiderManager',
                component: RiderManagementRiderManager
            },
            {
                path: '/riderManagements/riders/:id',
                name: 'RiderManagementRiderDetail',
                component: RiderManagementRiderDetail
            },



    ]
})
