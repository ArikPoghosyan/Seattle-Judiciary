import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LawsuitGuide from '../components/LawsuitGuide.vue' 
import JudiciaryPage from '../components/Judiciary.vue' 

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Главная - Судебная власть Лос-Сантоса',
      transition: 'fade',
      icon: '🏛️'
    }
  },
  { 
    path: '/file-claim', 
    name: 'file-claim',
    component: LawsuitGuide,
    meta: {
      title: 'Подать заявление - Судебная власть Лос-Сантоса',
      transition: 'slide-left',
      icon: '📝'
    }
  },
  { 
    path: '/judiciary', 
    name: 'judiciary',
    component: JudiciaryPage,
    meta: {
      title: 'Состав суда - Судебная власть Лос-Сантоса',
      transition: 'slide-right',
      icon: '⚖️'
    }
  },
  // 404 страница
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Динамическое изменение заголовка страницы
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Судебная власть Лос-Сантоса'
  next()
})

export default router