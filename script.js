document.addEventListener("DOMContentLoaded", () => {
  const progressCircle = document.getElementById("progressCircle");
  const valueInput = document.getElementById("valueInput");
  const animateToggle = document.getElementById("animateToggle");
  const hideToggle = document.getElementById("hideToggle");
  const animateBg = document.getElementById("animateBg");
  const hideBg = document.getElementById("hideBg");

  // обновление прогресса на индикаторе
  const updateProgress = (value) => {
    const percentage = Math.min(Math.max(value, 0), 100); //ограничиваем значение от 0 до 100
    const gradientValue = percentage * 3.6; //вычисляем угол градиента
    progressCircle.style.background = `conic-gradient(#007bff 0%, #007bff ${gradientValue}deg, #d3d3d3 ${gradientValue}deg)`; //заполняем фон конусным градиентом
  };

  valueInput.addEventListener("input", () => {
    updateProgress(valueInput.value);
  });

  animateToggle.addEventListener("change", () => {
    if (animateToggle.checked) {
      progressCircle.classList.add("animate");
      animateBg.classList.add("active");
    } else {
      animateBg.classList.remove("active");
      progressCircle.classList.remove("animate");
    }
  });

  hideToggle.addEventListener("change", () => {
    if (hideToggle.checked) {
      progressCircle.style.display = "none";
      hideBg.classList.add("active");
    } else {
      progressCircle.style.display = "block";
      hideBg.classList.remove("active");
    }
  });

  updateProgress(valueInput.value);
});
