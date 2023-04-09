const getFormattedTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

window.onload = () => {
  const clock = document.getElementById("clock");
  clock.innerText = getFormattedTime();

  setInterval(() => {
    clock.innerText = getFormattedTime();
  }, 1000);

  const search = document.getElementById("search");
  search.onkeydown = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    window.location.href = `https://www.google.com/search?q=${search.value}`;
  };
};