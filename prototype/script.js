let settings = {
  backgroundColor: "#000000",
  textColor: "#FFFFFF",
  searchAutofocused: false
};

const loadSettings = () => {
  const settingsJson = localStorage.getItem("settings");
  if (!settingsJson) {
    return;
  }

  settings = JSON.parse(settingsJson);
  applyTheme();
};

const getFormattedTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
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
        contentElement.style.display = "flex";
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
};

const handleThemePresets = () => {
  const themePresets = [...document.getElementsByClassName("theme-preset")];
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