import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4cf1e096 = () => interopDefault(import('..\\pages\\no-access.vue' /* webpackChunkName: "pages/no-access" */))
const _7bcf409b = () => interopDefault(import('..\\pages\\admin\\accounts.vue' /* webpackChunkName: "pages/admin/accounts" */))
const _531df5b3 = () => interopDefault(import('..\\pages\\admin\\category.vue' /* webpackChunkName: "pages/admin/category" */))
const _553cbca2 = () => interopDefault(import('..\\pages\\admin\\dashboard.vue' /* webpackChunkName: "pages/admin/dashboard" */))
const _b7bba712 = () => interopDefault(import('..\\pages\\admin\\inventory.vue' /* webpackChunkName: "pages/admin/inventory" */))
const _4f6bf35a = () => interopDefault(import('..\\pages\\admin\\orders.vue' /* webpackChunkName: "pages/admin/orders" */))
const _1d229862 = () => interopDefault(import('..\\pages\\admin\\payments.vue' /* webpackChunkName: "pages/admin/payments" */))
const _5903bf64 = () => interopDefault(import('..\\pages\\admin\\price.vue' /* webpackChunkName: "pages/admin/price" */))
const _773a6719 = () => interopDefault(import('..\\pages\\admin\\products.vue' /* webpackChunkName: "pages/admin/products" */))
const _4d876b58 = () => interopDefault(import('..\\pages\\admin\\qrscanner.vue' /* webpackChunkName: "pages/admin/qrscanner" */))
const _77391dbc = () => interopDefault(import('..\\pages\\dispatch\\dmodule.vue' /* webpackChunkName: "pages/dispatch/dmodule" */))
const _744b625e = () => interopDefault(import('..\\pages\\driver\\ddmodule.vue' /* webpackChunkName: "pages/driver/ddmodule" */))
const _cd5e8f10 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/no-access",
    component: _4cf1e096,
    name: "no-access"
  }, {
    path: "/admin/accounts",
    component: _7bcf409b,
    name: "admin-accounts"
  }, {
    path: "/admin/category",
    component: _531df5b3,
    name: "admin-category"
  }, {
    path: "/admin/dashboard",
    component: _553cbca2,
    name: "admin-dashboard"
  }, {
    path: "/admin/inventory",
    component: _b7bba712,
    name: "admin-inventory"
  }, {
    path: "/admin/orders",
    component: _4f6bf35a,
    name: "admin-orders"
  }, {
    path: "/admin/payments",
    component: _1d229862,
    name: "admin-payments"
  }, {
    path: "/admin/price",
    component: _5903bf64,
    name: "admin-price"
  }, {
    path: "/admin/products",
    component: _773a6719,
    name: "admin-products"
  }, {
    path: "/admin/qrscanner",
    component: _4d876b58,
    name: "admin-qrscanner"
  }, {
    path: "/dispatch/dmodule",
    component: _77391dbc,
    name: "dispatch-dmodule"
  }, {
    path: "/driver/ddmodule",
    component: _744b625e,
    name: "driver-ddmodule"
  }, {
    path: "/",
    component: _cd5e8f10,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
