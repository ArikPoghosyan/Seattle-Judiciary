<template>
  <div class="judiciary-page">
    <div class="container">
      <!-- Заголовок -->
      <div class="page-header">
        <h1 class="page-title">Судебная власть Лос-Сантоса</h1>
        <p class="page-description">Состав Верховного суда</p>
      </div>

      <!-- Лидер судебной власти -->
      <div class="leader-section">
        <div class="leader-card">
          <div class="leader-badge">Лидер судебной власти</div>
          <div class="leader-content">
            <div class="leader-photo">
              <img src="../assets/judges/arik-poghosyan.jpg" alt="Arik Poghosyan" />
            </div>
            <div class="leader-info">
              <h2 class="leader-name">Arik Poghosyan</h2>
              <p class="leader-position">Председатель Верховного суда</p>
              <div class="leader-details">
                <span class="leader-id">ID: 36528</span>
                <span class="leader-term">17.12.2025 - н.в.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Верховные судьи -->
      <div class="section-title-wrapper">
        <h2 class="section-title">Верховные судьи</h2>
      </div>

      <div class="judges-grid">
        <!-- Daniels Hall -->
        <div class="judge-card">
          <div class="judge-rank">Верховный судья</div>
          <h3 class="judge-name">Daniels Hall</h3>
          <div class="judge-id-badge">ID: 32103</div>
          <div class="judge-icon">👨‍⚖️</div>
        </div>

        <!-- Mikhail Karapetyan -->
        <div class="judge-card">
          <div class="judge-rank">Верховный судья</div>
          <h3 class="judge-name">Mikhail Karapetyan</h3>
          <div class="judge-id-badge">ID: 178496</div>
          <div class="judge-icon">👨‍⚖️</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JudiciaryPage'
}
</script>

<style scoped>
.judiciary-page {
  padding: 60px 0 100px;
  background: var(--color-bg-primary);
  min-height: 100vh;
}

/* Заголовок страницы */
.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 3rem;
  color: var(--color-text-primary);
  margin-bottom: 15px;
  font-family: 'Cormorant Garamond', serif;
  position: relative;
  display: inline-block;
}


.page-description {
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  margin-top: 25px;
}

/* Лидер секция */
.leader-section {
  margin-bottom: 80px;
}

.leader-card {
  background: var(--color-bg-secondary);
  border-radius: 20px;
  padding: 40px;
  position: relative;
  box-shadow: var(--card-shadow-hover);
  border: 2px solid var(--color-accent-gold);
  background: linear-gradient(135deg, var(--color-bg-secondary) 0%, #fff 100%);
}

.leader-badge {
  display: inline-block;
  background: var(--color-accent-gold);
  color: white;
  padding: 8px 25px;
  border-radius: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 25px;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.leader-content {
  display: flex;
  align-items: center;
  gap: 40px;
}

.leader-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--color-accent-gold);
  box-shadow: 0 10px 25px rgba(180, 148, 92, 0.3);
}

.leader-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.leader-name:after {
  display: none;
}

.leader-info {
  flex: 1;
}

.leader-name {
  font-size: 2.8rem;
  color: var(--color-text-primary);
  margin-bottom: 5px;
  font-family: 'Cormorant Garamond', serif;
}

.leader-position {
  font-size: 1.2rem;
  color: var(--color-accent-gold);
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: 500;
}

.leader-details {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.leader-id, .leader-term {
  background: var(--color-bg-primary);
  padding: 8px 20px;
  border-radius: 30px;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  border: 1px solid var(--color-border);
}

.leader-id {
  border-left: 3px solid var(--color-accent-gold);
}

.leader-term {
  border-right: 3px solid var(--color-accent-gold);
}

/* Заголовки секций */
.section-title-wrapper {
  text-align: center;
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.5rem;
  color: var(--color-text-primary);
  margin-bottom: 15px;
  font-family: 'Cormorant Garamond', serif;
}

.section-title:after {
  display: none;
}



/* Сетка судей */
.judges-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 80px;
}

.judge-card {
  background: var(--color-bg-secondary);
  border-radius: 16px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.judge-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--card-shadow-hover);
  border-color: var(--color-accent-gold);
}

.judge-card:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--color-accent-gold), var(--color-accent-gold-light));
}

.judge-rank {
  color: var(--color-accent-gold);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
  font-weight: 600;
}

.judge-name {
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: 15px;
  font-family: 'Cormorant Garamond', serif;
}

.judge-id-badge {
  display: inline-block;
  background: var(--color-accent-gold);
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.judge-icon {
  font-size: 3rem;
  opacity: 0.3;
  margin-top: 10px;
}

/* Информационная секция */
.info-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.info-card {
  background: var(--color-bg-secondary);
  border-radius: 12px;
  padding: 30px;
  border: 1px solid var(--color-border);
}

.info-card h3 {
  color: var(--color-accent-gold);
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.info-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 8px;
}

/* Адаптивность */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .leader-content {
    flex-direction: column;
    text-align: center;
  }
  
  .leader-name {
    font-size: 2.2rem;
  }
  
  .leader-details {
    justify-content: center;
  }
  
  .judges-grid {
    grid-template-columns: 1fr;
  }
  
  .info-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .leader-card {
    padding: 25px;
  }
  
  .leader-icon {
    width: 80px;
    height: 80px;
    font-size: 3rem;
  }
  
  .leader-name {
    font-size: 1.8rem;
  }
  
  .judge-name {
    font-size: 1.6rem;
  }
}
</style>