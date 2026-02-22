<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container header-content">
      <router-link to="/" class="logo-area" style="text-decoration: none; display: flex; align-items: center; gap: 15px;">
        <img src="../assets/gov.png" alt="State Emblem" class="emblem" />
        <h1 class="title">Seattle | Judicial Authority <span>of Los Santos</span></h1>
      </router-link>
      
      <div class="nav">
        <a :href="judgeFormLink" target="_blank" class="judge-button">
          Подать заявление на судью
          <svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      isScrolled: false,
      judgeFormLink: 'https://forms.docossum.com/seattle-court-form'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 15px 0;
  background: rgba(213, 206, 188, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(180, 148, 92, 0.2);
  transition: all 0.3s ease;
}

.header.scrolled {
  padding: 10px 0;
  background: rgba(232, 226, 209, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Оставляем space-between */
  width: 100%;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
}

.emblem {
  width: 50px;
  height: auto;
  filter: drop-shadow(0 0 5px rgba(180, 148, 92, 0.3));
  transition: opacity 0.3s;
}

.emblem:hover {
  opacity: 0.9;
}

.title {
  font-size: 1.6rem;
  color: var(--color-text-primary);
  letter-spacing: -0.5px;
}

.title span {
  display: block;
  font-size: 0.7rem;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 1.5px;
  color: var(--color-accent-gold);
  text-transform: uppercase;
  margin-top: 2px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.judge-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: var(--color-accent-gold);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid var(--color-accent-gold);
}

.judge-button:hover {
  background: transparent;
  color: var(--color-accent-gold);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(180, 148, 92, 0.3);
}

.button-icon {
  width: 15px;
  height: 15px;
  transition: transform 0.3s ease;
}

.judge-button:hover .button-icon {
  transform: translate(2px, -2px);
}

/* Адаптивность */
@media (max-width: 768px) {
  .title {
    font-size: 1.2rem;
  }
  
  .title span {
    font-size: 0.6rem;
  }
  
  .emblem {
    width: 40px;
  }
  
  .judge-button {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .header-content {
    flex-direction: column;
    gap: 10px;
  }
  
  .judge-button {
    width: 100%;
    justify-content: center;
  }
}
</style>