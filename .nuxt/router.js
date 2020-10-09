import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _667ab8ac = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2adf7b4c = () => interopDefault(import('../pages/Advice/index.vue' /* webpackChunkName: "pages/Advice/index" */))
const _389bdf92 = () => interopDefault(import('../pages/Advice/_id/index.vue' /* webpackChunkName: "pages/Advice/_id/index" */))
const _f39ad91e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _667ab8ac,
    name: "about"
  }, {
    path: "/Advice",
    component: _2adf7b4c,
    name: "Advice"
  }, {
    path: "/Advice/:id",
    component: _389bdf92,
    name: "Advice-id"
  }, {
    path: "/",
    component: _f39ad91e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
