import { createRouter, createWebHistory } from 'vue-router'
 //import HomeView from '../pages/Negocio/Inicio.vue'

const routes = [
   {
     path: '/',
     name: 'home',
     component: () => import(/* webpackChunkName: "Inicio" */ '@/pages/Negocio/Inicio.vue')
   },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "AboutView" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "Login" */ '@/pages/Login.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import(/* webpackChunkName: "UsuarioRegistrar" */ '@/pages/Negocio/UsuarioRegistrar.vue'),
    meta: {
      requiresAuth: false,
      roles: ['ADMIN']
    }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
/*
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token')
  const requiredAuth = to.matched.some(record => record.meta.requiresAuth)
  const rolesRequired = to.meta.roles
  const estado = localStorage.getItem('estado') // Agregamos el estado

  if (requiredAuth && !isAuthenticated) {
    next('/login')
  } else if (to.path === '/login') { // Agregamos una verificación adicional para evitar la redirección infinita
    next()
  } else if (isAuthenticated && rolesRequired && !getRoles().some(role => rolesRequired.includes(role))) {
    next('/') // redirigir a la página principal si no tiene el rol necesario
  } else if (!estado) { // Agregamos la verificación del estado
    next('/login')
  } else {
    next()
  }
})


function getRoles() {
  return JSON.parse(localStorage.getItem('roles'))
}*/

export default router
