<template>
  <main class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <img src="../assets/background.jpg" alt="Courthouse background" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-content">
        <div class="hero-badge">Судебная власть Лос-Сантоса</div>
        <h1 class="hero-title">
          <span class="title-line">Los Santos</span>
          <span class="title-line gold">Court of Law</span>
        </h1>
        <p class="hero-description">
          Обеспечение справедливости, соблюдение закона и защита прав каждого гражданина.
        </p>
        <div class="hero-actions">
          <router-link to="/file-claim" class="btn btn-primary">
            <span>Подать заявление</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 5v14M5 12h14"/>
            </svg>
          </router-link>
          <router-link to="/judiciary" class="btn btn-outline">
            <span>Состав судебной власти</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>


    
  </main>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
/* Hero Section */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  padding: 120px 0 60px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-background img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(10, 12, 15, 0.4) 0%,    
    rgba(20, 25, 30, 0.2) 50%,    
    rgba(30, 35, 40, 0.1) 100%    
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  color: white;
  margin-left: 0;
  margin-right: auto;
  padding-left: 5%;
  animation: slideInFromLeft 1s ease-out;
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.hero-badge {
  display: inline-block;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: var(--color-accent-gold-light);
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 30px;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.hero-title {
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.title-line.gold {
  color: var(--color-accent-gold-light);
  font-size: 3.5rem;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.hero-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 550px;
  line-height: 1.8;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  text-decoration: none;
}

.btn-primary {
  background: var(--color-accent-gold);
  color: var(--color-text-dark);
}

.btn-primary:hover {
  background: var(--color-accent-gold-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
}

.btn-outline:hover {
  background: var(--color-accent-gold);
  border-color: var(--color-accent-gold);
  color: var(--color-text-dark);
  transform: translateY(-2px);
}

.btn-icon {
  width: 20px;
  height: 20px;
}

/* Judiciary Preview Section */
.judiciary-preview {
  padding: 80px 0;
  background: var(--color-bg-secondary);
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: var(--color-text-primary);
  position: relative;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: var(--color-accent-gold);
}

.judges-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
}

.judge-card {
  background: var(--color-bg-primary);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease;
}

.judge-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent-gold-light);
}

.judge-icon {
  font-size: 3rem;
  margin-bottom: 15px;
}

.judge-card h3 {
  font-size: 1.1rem;
  color: var(--color-accent-gold);
  margin-bottom: 15px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}

.judge-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 5px;
  font-family: 'Cormorant Garamond', serif;
}

.judge-id {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.judge-term {
  color: var(--color-accent-gold);
  font-size: 0.9rem;
  font-style: italic;
}

.text-center {
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .title-line {
    font-size: 2.8rem;
  }
  
  .title-line.gold {
    font-size: 2.3rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
  
  .judges-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .title-line {
    font-size: 2.2rem;
  }
  
  .title-line.gold {
    font-size: 1.8rem;
  }
}
</style>