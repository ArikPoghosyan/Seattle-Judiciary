<template>
  <div class="lawsuit-wizard">
    <div class="container">
      <!-- Прогресс бар -->
      <div class="wizard-progress">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <div class="progress-steps">
          <div 
            v-for="(step, index) in steps" 
            :key="index"
            class="progress-step"
            :class="{ 
              active: currentStep === index,
              completed: currentStep > index 
            }"
          >
            <div class="step-circle">{{ index + 1 }}</div>
            <div class="step-label">{{ step }}</div>
          </div>
        </div>
      </div>

      <!-- Шаги -->
      <transition name="fade" mode="out-in">
        <div class="wizard-step" :key="currentStep">
          <!-- Шаг 1: Что это? (Новый иск или апелляция) -->
          <div v-if="currentStep === 0" class="step-content">
            <div class="step-icon">📋</div>
            <h2 class="step-title">Что ты хочешь подать?</h2>
            
            <div class="question-box">
              <p class="question">Выбери вариант:</p>
              <div class="button-group">
                <button @click="setLawsuitType('new')" class="btn btn-primary">Новый иск ⚖️</button>
                <button @click="setLawsuitType('appeal')" class="btn btn-outline">Апелляция на решение Окружного суда 🔄</button>
              </div>
            </div>
          </div>

          <!-- Шаг 1 (для апелляции): Проверка времени -->
          <div v-else-if="currentStep === 1 && isAppeal" class="step-content">
            <div class="step-icon">⏰</div>
            <h2 class="step-title">Шаг 1: Проверяем время для апелляции!</h2>
            
            <div class="warning-box">
              <div class="warning-icon">⚠️</div>
              <div class="warning-text">
                <strong>ВАЖНО ДЛЯ АПЕЛЛЯЦИИ!</strong>
                <p>С момента решения суда должно пройти НЕ БОЛЬШЕ 48 часов!</p>
                <p class="example">Решение суда вынесли вчера в 15:00 - у тебя время до завтра 15:00</p>
              </div>
            </div>

            <div class="info-box">
              <p><strong>Госпошлина для апелляции:</strong> 45,000$ на счет 25463</p>
            </div>

            <div class="question-box">
              <p class="question">Прошло меньше 48 часов с момента решения суда?</p>
              <div class="button-group">
                <button @click="goToStep(2)" class="btn btn-primary">Да, меньше 48 часов ✅</button>
                <button @click="showTimeoutMessage" class="btn btn-outline">Нет, прошло больше ⏰</button>
              </div>
            </div>
          </div>

          <!-- Шаг 1 (для нового иска): Проверка времени -->
          <div v-else-if="currentStep === 1 && !isAppeal" class="step-content">
            <div class="step-icon">⏰</div>
            <h2 class="step-title">Шаг 1: Проверяем время!</h2>
            
            <div class="warning-box">
              <div class="warning-icon">⚠️</div>
              <div class="warning-text">
                <strong>ОЧЕНЬ ВАЖНО!</strong>
                <p>С момента события должно пройти НЕ БОЛЬШЕ 48 часов!</p>
                <p class="example">Например: Если что-то случилось вчера в 15:00, то у тебя есть время до завтра 15:00 (Делопроизводства можно обжаловать в течении 120ч)</p>
              </div>
            </div>

            <div class="question-box">
              <p class="question">Прошло меньше 48 часов с того момента, как что-то случилось?</p>
              <div class="button-group">
                <button @click="goToStep(2)" class="btn btn-primary">Да, меньше 48 часов ✅</button>
                <button @click="showTimeoutMessage" class="btn btn-outline">Нет, прошло больше ⏰</button>
              </div>
            </div>
          </div>

          <!-- Шаг 2 (для апелляции): Выбор суда -->
          <div v-else-if="currentStep === 2 && isAppeal" class="step-content">
            <div class="step-icon">🔄</div>
            <h2 class="step-title">Апелляция подается в Апелляционный суд</h2>
            
            <div class="success-box">
              <p>Ты выбрал апелляцию - значит тебе в Апелляционный суд!</p>
            </div>

            <div class="rules-box">
              <h3>📋 Информация для апелляции:</h3>
              <ul>
                <li><strong>Госпошлина:</strong> 45,000$</li>
                <li><strong>Куда платить:</strong> На счет 25463</li>
                <li><strong>Срок подачи:</strong> 48 часов после решения суда</li>
              </ul>
            </div>

            <div class="next-steps">
              <h3>Что нужно сделать:</h3>
              <ol>
                <li>Ознакомься с <a :href="appealRulesLink" target="_blank" class="rules-link">правилами подачи апелляции</a></li>
                <li>Узнай номер предыдущего иска (он нужен для правильной нумерации)</li>
                <li>Заполни заявление по шаблону</li>
                <li>Оплати госпошлину 45,000$ на счет 25463</li>
                <li>Приложи доказательства</li>
              </ol>
            </div>

            <div class="button-group">
              <button @click="goToStep(4)" class="btn btn-primary">Дальше →</button>
            </div>
          </div>

          <!-- Шаг 2 (для нового иска): Кто ответчик? -->
          <div v-else-if="currentStep === 2 && !isAppeal" class="step-content">
            <div class="step-icon">👤</div>
            <h2 class="step-title">Шаг 2: Кто тебя обидел?</h2>
            
            <div class="info-box">
              <p>Сейчас мы узнаем, в какой суд тебе нужно писать.</p>
            </div>

            <div class="question-box">
              <p class="question">Тот, на кого ты хочешь подать в суд, есть в этом списке?</p>
              
              <div class="officials-list">
                <div class="list-header">
                  <span>⚖️ Важные начальники (Верховный суд):</span>
                </div>
                <div class="list-items">
                  <div v-for="official in supremeOfficials" :key="official" class="list-item">
                    • {{ official }}
                  </div>
                </div>
              </div>

              <div class="button-group">
                <button @click="goToStep(3, 'supreme')" class="btn btn-primary">Да, он есть в списке! 👑</button>
                <button @click="goToStep(3, 'district')" class="btn btn-outline">Нет, его тут нет 👤</button>
              </div>
            </div>
          </div>

          <!-- Шаг 3: Верховный суд (для нового иска) -->
          <div v-else-if="currentStep === 3 && courtType === 'supreme' && !isAppeal" class="step-content">
            <div class="step-icon">⚖️</div>
            <h2 class="step-title">Тебе нужно писать в ВЕРХОВНЫЙ СУД</h2>
            
            <div class="success-box">
              <p>Так как это важный начальник, твое дело будет рассматривать Верховный суд.</p>
            </div>

            <div class="rules-box">
              <h3>📋 Важная информация:</h3>
              <ul>
                <li><strong>Госпошлина:</strong> 45,000$</li>
                <li><strong>Куда платить:</strong> На счет 25463</li>
                <li><strong>Срок подачи:</strong> 48 часов с момента события</li>
              </ul>
            </div>

            <div class="button-group">
              <button @click="goToStep(4)" class="btn btn-primary">Дальше →</button>
            </div>
          </div>

          <!-- Шаг 3: Окружной суд (для нового иска) -->
          <div v-else-if="currentStep === 3 && courtType === 'district' && !isAppeal" class="step-content">
            <div class="step-icon">📋</div>
            <h2 class="step-title">Тебе нужно писать в ОКРУЖНОЙ СУД</h2>
            
            <div class="info-box">
              <p>Обычные люди и не очень важные начальники - это к окружному суду.</p>
            </div>

            <div class="rules-box">
              <h3>📋 Важная информация:</h3>
              <ul>
                <li><strong>Госпошлина:</strong> 35,000$</li>
                <li><strong>Куда платить:</strong> На счет 25463</li>
                <li><strong>Срок подачи:</strong> 48 часов с момента события</li>
              </ul>
            </div>

            <div class="button-group">
              <button @click="goToStep(4)" class="btn btn-primary">Дальше →</button>
            </div>
          </div>

          <!-- Шаг 4: Нумерация иска -->
          <div v-else-if="currentStep === 4" class="step-content">
            
            <h2 class="step-title">Правильная нумерация иска</h2>
            
            <div class="info-box">
              <p>Номер твоего иска должен идти по порядку за предыдущим!</p>
            </div>

            <div class="rules-box">
              <h3>Как узнать номер:</h3>
              <ol>
                <li>Зайди в раздел суда на форуме:
                  <a :href="getForumLink()" target="_blank" class="forum-link">перейти</a>
                </li>
                <li>Посмотри последний иск (он самый первый в списке)</li>
           
              </ol>
              <p class="example" style="margin-top: 10px;">Пример: Предыдущий иск №123 → Твой иск №124</p>
            </div>

            <div class="question-box">
              <p class="question">Ты узнал правильный номер?</p>
              <div class="button-group">
                <button @click="goToStep(5)" class="btn btn-primary">Да, номер знаю! ✅</button>
              </div>
            </div>
          </div>

          <!-- Шаг 5: Документы -->
          <div v-else-if="currentStep === 5" class="step-content">
            <div class="step-icon">📝</div>
            <h2 class="step-title">Собираем документы</h2>
            
            <div class="documents-list">
              <div class="document-item">
                <span class="doc-icon">📄</span>
                <div>
                  <strong>1. Заявление</strong>
                  <p>Заполни по шаблону из правил суда</p>
                  <a :href="getRulesLink()" target="_blank" class="rules-link">Смотреть правила и шаблон →</a>
                </div>
              </div>
              
              <div class="document-item">
                <span class="doc-icon">📸</span>
                <div>
                  <strong>2. Доказательства</strong>
                  <p>Скриншоты, видео. Если видео длиннее 3 минут - добавь тайм-коды!</p>
                  <p class="example">Тайм-коды: 1:23 - начало, 2:45 - главный момент</p>
                </div>
              </div>
              
              <div class="document-item">
                <span class="doc-icon">💰</span>
                <div>
                  <strong>3. Оплата госпошлины</strong>
                  <p>Переведи {{ getFee() }} на счет 25463</p>
                  <p>Сделай скриншот перевода</p>
                </div>
              </div>

              <div class="document-item">
                <span class="doc-icon">🆔</span>
                <div>
                  <strong>4. ID-card</strong>
                  <p>Скриншот паспорта</p>
                </div>
              </div>
            </div>

            <div class="rules-box">
              <h3>⚠️ Важно запомнить:</h3>
              <ul>
                <li>Номер иска должен быть правильным (например, №568)</li>
                <li>К видео длиннее 3 минут - тайм-коды обязательно!</li>
                <li>Видео нельзя редактировать или искажать</li>
                <li>Подпиши каждое доказательство - что это</li>
              </ul>
            </div>

            <div class="button-group">
              <button @click="goToStep(6)" class="btn btn-primary">Всё собрал, дальше!</button>
            </div>
          </div>

          <!-- Шаг 6: Подача -->
          <div v-else-if="currentStep === 6" class="step-content">
            <div class="step-icon">📨</div>
            <h2 class="step-title">Подача иска</h2>
            
            <div class="success-box">
              <p>Теперь нужно отправить всё на форум!</p>
            </div>

            <div class="rules-box">
              <h3>Как подать:</h3>
              <ol>
                <li>Зайди на форум: <a :href="getForumLink()" target="_blank" class="forum-link">{{ getForumName() }}</a></li>
                <li>Нажми кнопку "Создать тему"</li>
                <li>В названии укажи: "Иск №[твой номер] от [твое имя]"</li>
                <li>Вставь текст заявления</li>
                <li>Прикрепи ссылки на все доказательства</li>
                <li>Нажми "Опубликовать"</li>
              </ol>
            </div>

            <div class="simple-checklist">
              <h3>✅ Быстрая проверка:</h3>
              <div class="check-item" v-for="(item, index) in simpleChecklist" :key="index">
                <label>
                  <input type="checkbox" v-model="item.checked">
                  {{ item.text }}
                </label>
              </div>
            </div>

            <div class="button-group">
              <button @click="finish" class="btn btn-primary">Всё проверил, можно отправлять! ✉️</button>
              <button @click="restart" class="btn btn-outline">Начать заново 🔄</button>
            </div>
          </div>
        </div>
      </transition>

      <!-- Кнопки навигации -->
      <div class="wizard-nav">
        <button 
          v-if="currentStep > 0" 
          @click="prevStep" 
          class="btn btn-outline"
        >
          ← Назад
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LawsuitWizard',
  data() {
    return {
      currentStep: 0,
      isAppeal: false,
      courtType: null,
      steps: [
        'Тип иска',
        'Проверка времени',
        'Выбор суда',
        'Номер иска',
        'Документы',
        'Подача'
      ],
      supremeOfficials: [
        'Судья',
        'Министр/зам',
        'Директор USSS',
        'Губернатор/Вице-губернатор',
        'Шериф/Зам шерифа',
        'Шеф полиции/Зам шефа',
        'Главный врач/Зам',
        'Полковник/Подполковник Нацгвардии',
        'Директор/Зам Weazel News'
      ],
      supremeRulesLink: 'https://forum.majestic-rp.ru/threads/pravila-podachi-iskovykh-zayavlenii-v-verkhovnyi-sud.2931228/',
      districtRulesLink: 'https://forum.majestic-rp.ru/threads/pravila-podachi-iskovykh-zayavlenii-v-okruzhnoi-sud.2931171/',
      appealRulesLink: 'https://forum.majestic-rp.ru/threads/pravila-podachi-apellyatsionnykh-zayavlenii-v-apellyatsionnyi-sud.2931389/',
      supremeForumLink: 'https://forum.majestic-rp.ru/forums/verkhovnyi-sud.1179/',
      districtForumLink: 'https://forum.majestic-rp.ru/forums/okruzhnoi-sud.1185/',
      appealForumLink: 'https://forum.majestic-rp.ru/forums/apellyatsionnyi-sud.1181/',
      simpleChecklist: [
        { text: 'Прошло меньше 48 часов', checked: false },
        { text: 'Правильный номер иска', checked: false },
        { text: 'Госпошлина оплачена', checked: false },
        { text: 'Есть все доказательства', checked: false },
        { text: 'К видео есть тайм-коды', checked: false }
      ]
    }
  },
  computed: {
    progressPercentage() {
      return ((this.currentStep + 1) / this.steps.length) * 100
    }
  },
 methods: {
    setLawsuitType(type) {
      if (type === 'appeal') {
        this.isAppeal = true
        this.goToStep(1)
      } else {
        this.isAppeal = false
        this.goToStep(1)
      }
    },
    goToStep(step, court = null) {
      if (court) {
        this.courtType = court
      }
      this.currentStep = step
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--
      }
    },
    showTimeoutMessage() {
      alert('😢 Ой! Если прошло больше 48 часов, суд не сможет принять заявление. Попробуй в следующий раз побыстрее!')
    },
    getFee() {
      if (this.isAppeal) return '45,000$'
      if (this.courtType === 'supreme') return '45,000$'
      return '35,000$'
    },
    getRulesLink() {
      if (this.isAppeal) return this.appealRulesLink
      if (this.courtType === 'supreme') return this.supremeRulesLink
      return this.districtRulesLink
    },
    getForumLink() {
      if (this.isAppeal) return this.appealForumLink
      if (this.courtType === 'supreme') return this.supremeForumLink
      return this.districtForumLink
    },
    getForumName() {
      if (this.isAppeal) return 'Апелляционный суд'
      if (this.courtType === 'supreme') return 'Верховный суд'
      return 'Окружной суд'
    },
    finish() {
      // Проверяем, все ли пункты отмечены
      const allChecked = this.simpleChecklist.every(item => item.checked)
      
      if (!allChecked) {
        alert('❌ Отметь все пункты в чек-листе!')
        return
      }
      
      // Открываем форум в новой вкладке
      window.open(this.getForumLink(), '_blank')
      
      // Показываем сообщение
      alert('✅ Молодец! Форум открыт в новой вкладке. Можешь создавать тему!')
      
      // Перезапускаем
      this.restart()
    },
    restart() {
      this.currentStep = 0
      this.isAppeal = false
      this.courtType = null
      this.simpleChecklist.forEach(item => item.checked = false)
    }
}
}
</script>

<style scoped>
.lawsuit-wizard {
  padding: 60px 0;
  min-height: 100vh;
  background: var(--color-bg-primary);
}

/* Прогресс бар */
.wizard-progress {
  margin-bottom: 50px;
}

.progress-bar {
  height: 4px;
  background: var(--color-border);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
}

.progress-fill {
  height: 100%;
  background: var(--color-accent-gold);
  transition: width 0.3s ease;
}

.progress-steps {
  display: flex;
  justify-content: space-between;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-bg-secondary);
  border: 2px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.progress-step.active .step-circle {
  background: var(--color-accent-gold);
  border-color: var(--color-accent-gold);
  color: white;
}

.progress-step.completed .step-circle {
  background: var(--color-accent-gold-light);
  border-color: var(--color-accent-gold);
  color: white;
}

.step-label {
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  text-align: center;
}

/* Шаги */
.wizard-step {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: var(--color-bg-secondary);
  border-radius: 16px;
  box-shadow: var(--card-shadow);
}

.step-content {
  text-align: center;
}

.step-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.step-title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--color-text-primary);
}

/* Боксы */
.warning-box {
  background: rgba(255, 193, 7, 0.1);
  border: 2px solid #ffc107;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  display: flex;
  gap: 15px;
  text-align: left;
}

.warning-icon {
  font-size: 2rem;
}

.warning-text strong {
  color: #ffc107;
  display: block;
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.warning-text p {
  color: var(--color-text-secondary);
  margin-bottom: 10px;
}

.example {
  font-style: italic;
  background: rgba(255,255,255,0.1);
  padding: 10px;
  border-radius: 8px;
  font-size: 0.9rem;
}

.info-box {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  color: var(--color-text-secondary);
}

.success-box {
  background: rgba(40, 167, 69, 0.1);
  border: 2px solid #28a745;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  color: #28a745;
}

.rules-box {
  background: var(--color-bg-primary);
  border: 2px solid var(--color-accent-gold);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 30px;
  text-align: left;
}

.rules-box h3 {
  color: var(--color-accent-gold);
  margin-bottom: 15px;
}

.rules-box ul, .rules-box ol {
  padding-left: 20px;
}

.rules-box li {
  margin-bottom: 8px;
  color: var(--color-text-secondary);
}

/* Вопросы */
.question-box {
  padding: 20px;
  background: var(--color-bg-primary);
  border-radius: 12px;
}

.question {
  font-size: 1.3rem;
  color: var(--color-text-primary);
  margin-bottom: 25px;
}

/* Кнопки */
.button-group {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

.btn {
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  font-size: 1rem;
}

.btn-primary {
  background: var(--color-accent-gold);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-accent-gold-dark);
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
}

.btn-outline:hover {
  background: var(--color-accent-gold);
  color: white;
}

/* Список должностей */
.officials-list {
  text-align: left;
  margin: 20px 0;
  padding: 15px;
  background: var(--color-bg-primary);
  border-radius: 8px;
}

.list-header {
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--color-text-primary);
}

.list-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.list-item {
  padding: 8px 12px;
  background: var(--color-bg-secondary);
  border-radius: 6px;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

/* Документы */
.documents-list {
  display: grid;
  gap: 15px;
  margin-bottom: 30px;
}

.document-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: var(--color-bg-primary);
  border-radius: 8px;
  text-align: left;
}

.doc-icon {
  font-size: 2rem;
}

.document-item strong {
  display: block;
  margin-bottom: 5px;
  color: var(--color-text-primary);
}

.document-item p {
  color: var(--color-text-secondary);
  margin: 0;
}

/* Next steps */
.next-steps {
  text-align: left;
  padding: 20px;
  background: var(--color-bg-primary);
  border-radius: 12px;
  margin-bottom: 20px;
}

.next-steps h3 {
  margin-bottom: 15px;
  color: var(--color-text-primary);
}

.next-steps ol {
  padding-left: 20px;
}

.next-steps li {
  margin-bottom: 10px;
  color: var(--color-text-secondary);
}

.rules-link, .forum-link {
  color: var(--color-accent-gold);
  text-decoration: none;
  font-weight: 500;
}

.rules-link:hover, .forum-link:hover {
  text-decoration: underline;
}

/* Простой чеклист */
.simple-checklist {
  text-align: left;
  padding: 20px;
  background: var(--color-bg-primary);
  border-radius: 12px;
  margin-bottom: 20px;
}

.simple-checklist h3 {
  margin-bottom: 15px;
  color: var(--color-text-primary);
}

.check-item {
  padding: 10px;
  margin-bottom: 5px;
  background: var(--color-bg-secondary);
  border-radius: 6px;
}

.check-item label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: var(--color-text-secondary);
}

.check-item input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: var(--color-accent-gold);
}

/* Навигация */
.wizard-nav {
  max-width: 800px;
  margin: 20px auto 0;
  display: flex;
  justify-content: flex-start;
}

/* Анимации */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Адаптивность */
@media (max-width: 768px) {
  .step-title {
    font-size: 1.5rem;
  }
  
  .progress-steps {
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .progress-step {
    min-width: 60px;
  }
  
  .step-label {
    display: none;
  }
  
  .warning-box {
    flex-direction: column;
    text-align: center;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
  
  .document-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>