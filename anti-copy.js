<!-- 🔐 Модуль захисту від копіювання та контекстного меню -->
<style>
/* 🎨 Стиль для тост-повідомлення */
#copyToast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #222;
  color: #fff;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 9999;
}
#copyToast.show {
  opacity: 1;
}
</style>

<!-- 🔔 Контейнер для повідомлення -->
<div id="copyToast">Копіювання заборонено</div>

<script>
// 📋 Перехоплення спроби копіювання тексту
document.addEventListener('copy', function(e) {
  e.preventDefault(); // Скасувати стандартну дію
  const захист = 'Дана сторінка захищена від копіювання';
  
  // Для сучасних браузерів
  if (e.clipboardData) {
    e.clipboardData.setData('text/plain', захист);
  }
  // Для старих версій Internet Explorer
  else if (window.clipboardData) {
    window.clipboardData.setData('Text', захист);
  }

  // 🔔 Показати повідомлення
  showCopyToast();
});

// 🖱️ Блокування правої кнопки миші (контекстного меню)
document.addEventListener('contextmenu', function(e) {
  e.preventDefault(); // Скасувати відкриття меню
});

// 🔔 Функція показу тосту
function showCopyToast() {
  const toast = document.getElementById('copyToast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000); // Зникає через 2 секунди
}
</script>
