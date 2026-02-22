<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Логотип и название -->
        <div class="footer-brand">
          <img src="../assets/gov.png" alt="Emblem" class="footer-emblem" />
          <div class="footer-brand-text">
            <h3>Judicial Authority</h3>
            <p>of Los Santos</p>
          </div>
        </div>

        <!-- Навигация -->
        <div class="footer-links">
          <div class="footer-column">
            <h4>Навигация</h4>
            <ul>
              <li><router-link to="/">Главная</router-link></li>
              <li><router-link to="/judiciary">Состав суда</router-link></li>
              <li><router-link to="/file-claim">Подать заявление</router-link></li>
            </ul>
          </div>



        </div>
      </div>

      <!-- Нижняя часть -->
      <div class="footer-bottom">
        <div class="footer-divider"></div>
        <div class="footer-bottom-content">
          <p>© 2026 Судебная власть Лос-Сантоса. Все права защищены.</p>
          <p class="footer-made">Website managed by Arik Poghosyan ⚖️</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.footer {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  padding: 30px 0 20px;
  border-top: 3px solid var(--color-accent-gold);
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  margin-bottom: 10px;
}

/* Бренд */
.footer-brand {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-emblem {
  width: 60px;
  height: auto;
  opacity: 0.9;
}

.footer-brand-text h3 {
  font-size: 1.4rem;
  color: var(--color-text-primary);
  margin-bottom: 5px;
  font-family: 'Cormorant Garamond', serif;
}

.footer-brand-text p {
  color: var(--color-accent-gold);
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

/* Ссылки */
.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.footer-column h4 {
  color: var(--color-accent-gold);
  font-size: 1.1rem;
  margin-bottom: 20px;
  font-weight: 600;
  position: relative;
  padding-bottom: 10px;
}

.footer-column h4:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background: var(--color-accent-gold);
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column li {
  margin-bottom: 12px;
  color: var(--color-text-secondary);
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-column li a {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-column li a:hover {
  color: var(--color-accent-gold);
  padding-left: 5px;
}

/* Нижняя часть */
.footer-bottom {
  text-align: center;
}

.footer-divider {
  height: 1px;
  background: var(--color-border);
  margin: 30px 0 20px;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom p {
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin: 0;
}

.footer-made {
  color: var(--color-accent-gold);
  font-style: italic;
}

/* Адаптивность */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-brand {
    justify-content: center;
  }
  
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .footer-links {
    grid-template-columns: 1fr;
  }
  
  .footer {
    padding: 40px 0 20px;
  }
}
</style>