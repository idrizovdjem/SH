const getFormattedTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  return`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

window.onload = () => {
  const clockElement = document.getElementById("clock");
  clockElement.innerText = getFormattedTime();

  const search = document.getElementById("search");
  search.onkeydown = (event) => {
    if (event.key === "Enter") {
      return;
    }
  };

  setInterval(() => {
    clockElement.innerText = getFormattedTime();
  }, 1000);
};