import { createRouter, createWebHistory } from 'vue-router'
import ListIssue from '../views/ListIssue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListIssue
    },
    {
      path: '/usuari/:user/edit',
      name: 'perfil',
      component: () => import('../views/UsuariPerfil.vue')
    },
    {
      path: '/usuari/:user/info',
      name: 'user_info',
      component: () => import('../views/UsuariInfo.vue')
    },
    {
      path: '/create',
      name: 'create_issue',
      component: () => import('../views/CreateIssue.vue')
    },
    {
      path: '/edit/:issue',
      name: 'edit_issue',
      component: () => import('../views/EditIssue.vue')
    },
    {
      path: '/login',
      name: 'login_user',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/singup',
      name: 'singUP_user',
      component: () => import('../views/SingUp.vue')
    },
  ]
})

export default router
