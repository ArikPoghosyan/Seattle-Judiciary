<template>
  <div id="app">
    <HeaderSection />
    <router-view />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection
  }
}
</script>

<style>
/* Импорт шрифтов Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

/* CSS Variables для богатой, но светлой цветовой схемы */
:root {
  --color-bg-primary: #e8e2d1;  /* Теплый беж с глубиной */
  --color-bg-secondary: #faf7f0; /* Светлый кремовый для карточек */
  --color-accent-gold: #b4945c;  /* Благородное золото */
  --color-accent-gold-light: #d4b68a; /* Светлое золото */
  --color-accent-gold-dark: #8b6f42; /* Темное золото */
  --color-accent-burgundy: #8b3a3a; /* Глубокий бордовый */
  --color-accent-navy: #2c4a5c;  /* Благородный темно-синий */
  --color-text-primary: #2c2c2c; /* Темно-серый для текста */
  --color-text-secondary: #5a5a5a; /* Серый для второстепенного текста */
  --color-border: #d8cfbc; /* Темно-бежевая граница */
  --glass-bg: rgba(250, 247, 240, 0.8);
  --glass-border: rgba(180, 148, 92, 0.3);
  --card-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  --card-shadow-hover: 0 25px 45px rgba(0, 0, 0, 0.15);
  --transition: all 0.3s ease;
}

/* Базовые сбросы */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(180, 148, 92, 0.03) 0%, transparent 20%),
    radial-gradient(circle at 90% 70%, rgba(139, 58, 58, 0.03) 0%, transparent 25%),
    radial-gradient(circle at 30% 80%, rgba(44, 74, 92, 0.03) 0%, transparent 30%);
}

/* Типографика */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
  font-weight: 600;
  line-height: 1.2;
  color: var(--color-text-primary);
}

h1 {
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

h2 {
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
}

h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--color-accent-gold);
}

h3 {
  font-size: 1.8rem;
  font-weight: 600;
}

/* Контейнер для центрирования контента */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
}

/* Утилитарные классы */
.text-gold {
  color: var(--color-accent-gold);
}

.text-gold-dark {
  color: var(--color-accent-gold-dark);
}

.text-burgundy {
  color: var(--color-accent-burgundy);
}

.text-navy {
  color: var(--color-accent-navy);
}

.bg-primary {
  background-color: var(--color-bg-primary);
}

.bg-secondary {
  background-color: var(--color-bg-secondary);
}

.bg-glass {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes goldShimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.fade-enter-active {
  animation: fadeIn 0.5s ease;
}

.slide-up-enter-active {
  animation: slideUp 0.6s ease;
}

/* Стили для scrollbar */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--color-accent-gold);
  border: 3px solid var(--color-bg-primary);
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent-gold-light);
}

/* Стили для выделения текста */
::selection {
  background: var(--color-accent-gold);
  color: white;
}

/* Основной контейнер приложения */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Контент между хедером и футером */
#app > :nth-child(2) {
  flex: 1;
}

/* Адаптивные изображения */
img {
  max-width: 100%;
  height: auto;
}

/* Базовые стили для ссылок */
a {
  color: var(--color-accent-navy);
  text-decoration: none;
  transition: var(--transition);
  position: relative;
}

a:hover {
  color: var(--color-accent-gold);
}

/* Базовые стили для кнопок */
button {
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  font-family: inherit;
}

/* Стили для карточек */
.card {
  background: var(--color-bg-secondary);
  border-radius: 12px;
  padding: 30px;
  box-shadow: var(--card-shadow);
  transition: var(--transition);
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
}

.card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(180, 148, 92, 0.02) 0%, transparent 50%);
  pointer-events: none;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--color-accent-gold);
}

/* Стили для фокуса (доступность) */
:focus-visible {
  outline: 2px solid var(--color-accent-gold);
  outline-offset: 2px;
}

/* Декоративные элементы */
.divider {
  width: 60px;
  height: 2px;
  background: var(--color-accent-gold);
  margin: 20px 0;
}

.divider-center {
  margin: 20px auto;
}

/* Стили для списков */
ul, ol {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

/* Градиентные акценты */
.gold-gradient {
  background: linear-gradient(135deg, var(--color-accent-gold) 0%, var(--color-accent-gold-light) 100%);
}

.gold-shimmer {
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(180, 148, 92, 0.1) 25%, 
    rgba(180, 148, 92, 0.2) 50%, 
    rgba(180, 148, 92, 0.1) 75%, 
    transparent 100%);
  background-size: 200% 100%;
  animation: goldShimmer 3s infinite;
}

/* Стили для цитат */
blockquote {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-style: italic;
  border-left: 4px solid var(--color-accent-gold);
  padding-left: 20px;
  margin: 20px 0;
  color: var(--color-text-secondary);
}

/* Дополнительные текстурные элементы */
.texture-overlay {
  position: relative;
}

.texture-overlay:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b4945c' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.3;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Можно добавить и другие анимации */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
  transform: translateX(30px);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}


</style>