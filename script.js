let settings = {
  backgroundColor: "#000000",
  textColor: "#FFFFFF",
  searchAutofocused: false,
  textOpacity: 1.0,
  backgroundOpacity: 1.0
};

const loadSettings = () => {
  const settingsJson = localStorage.getItem("settings");
  if (!settingsJson) {
    return;
  }

  settings = JSON.parse(settingsJson);
  applyTheme();
  applyOpacity();
};

const getFormattedTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const applyOpacity = () => {
  document.documentElement.style.setProperty("--text-opacity", settings.textOpacity);
  document.documentElement.style.setProperty("--background-opacity", settings.backgroundOpacity);

  const textOpacityPercentage = Math.ceil(settings.textOpacity * 100); 
  const backgroundOpacityPercentage = Math.ceil(settings.backgroundOpacity * 100); 

  const textOpacityRange = document.getElementById("textOpacityRange");
  textOpacityRange.value = textOpacityPercentage;
  const textOpacityLabel = document.getElementById("textOpacityLabel");
  textOpacityLabel.innerText = `Text opacity (${textOpacityPercentage}%)`;
  const backgroundOpacityRange = document.getElementById("backgroundOpacityRange");
  backgroundOpacityRange.value = backgroundOpacityPercentage;
  const backgroundOpacityLabel = document.getElementById("backgroundOpacityLabel");
  backgroundOpacityLabel.innerText = `Background opacity (${backgroundOpacityPercentage}%)`;
};

const applyTheme = () => {
  document.documentElement.style.setProperty("--text-color", settings.textColor);
  document.documentElement.style.setProperty("--background-color", settings.backgroundColor);
};

const persistSettings = () => {
  localStorage.setItem("settings", JSON.stringify(settings));
};

const handleClock = () => {
  const clock = document.getElementById("clock");
  clock.innerText = getFormattedTime();

  setInterval(() => {
    clock.innerText = getFormattedTime();
  }, 1000);
};

const handleSearch = () => {
  const search = document.getElementById("search");
  if (settings.searchAutofocused) {
    search.focus();
  }

  search.onkeydown = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    window.location.href = `https://www.google.com/search?q=${search.value}`;
  };
};

const handleSettings = () => {
  const settingsIcon = document.getElementById("settingsIcon");
  const settingsPanel = document.getElementById("settingsPanel");
  const settingsSectionTitleContainers = [...document.getElementsByClassName("settings-section-title-container")];
  const textOpacityRange = document.getElementById("textOpacityRange");
  const backgroundOpacityRange = document.getElementById("backgroundOpacityRange");
  const searchAutofocused = document.getElementById("searchAutofocused");
  searchAutofocused.checked = settings.searchAutofocused;

  settingsIcon.onclick = () => {
    settingsPanel.style.display = settingsPanel.style.display === "none" || settingsPanel.style.display === ""
      ? "block"
      : "none";
  };

  settingsSectionTitleContainers.forEach(container => {
    container.onclick = () => {
      const settingSection = container.parentElement;
      const contentElement = settingSection.children[1];
      
      const chevronIcon = container.children[0];
      const contentVisibility = contentElement.style.display;

      if (contentVisibility === "none" || contentElement.style.display === "") {
        contentElement.style.display = "block";
        chevronIcon.classList.remove("settings-chevron-right-icon");
        chevronIcon.classList.add("settings-chevron-down-icon");
      } else {
        contentElement.style.display = "none";
        chevronIcon.classList.remove("settings-chevron-right-icon");
        chevronIcon.classList.add("settings-chevron-right-icon");
      }
    };
  });

  searchAutofocused.onchange = () => {
    settings.searchAutofocused = searchAutofocused.checked;
    persistSettings(); 
  };

  textOpacityRange.oninput = () => {
    const newOpacity = textOpacityRange.value;
    settings.textOpacity = newOpacity / 100;
    persistSettings();
    applyOpacity();
  };

  backgroundOpacityRange.oninput = () => {
    const newOpacity = backgroundOpacityRange.value;
    settings.backgroundOpacity = newOpacity / 100;
    persistSettings();
    applyOpacity();
  };
};

const handleThemePresets = () => {
  const themePresets = [...document.getElementsByClassName("theme-preset")];
  const fgColorInput = document.getElementById("fg-color");
  const bgColorInput = document.getElementById("bg-color");

  const setColorByInput = (input, ground) => {
    if (ground === "fg") {
      settings.textColor = input.value;
    } else if (ground === "bg") {
      settings.backgroundColor = input.value;
    } else {
      return
    }
    persistSettings();
    applyTheme();
  };

  fgColorInput.addEventListener("input", event => {
    setColorByInput(event.target, "fg");
  });
  bgColorInput.addEventListener("input", event => {
    setColorByInput(event.target, "bg");
  });

  themePresets.forEach(preset => {
    preset.onclick = () => {
      settings.backgroundColor = preset.style.backgroundColor;
      settings.textColor = preset.children[0].style.color;
      persistSettings();
      applyTheme();
    };
  });
};

window.onload = () => {
  loadSettings();

  handleClock();
  handleSearch();
  handleSettings();
  handleThemePresets();
};