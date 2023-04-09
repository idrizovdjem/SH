let SETTINGS = {
  backgroundColor: "#000000",
  textColor: "#FFFFFF"
};

const loadSettings = () => {
  const settingsJson = localStorage.getItem("SETTINGS");
  if (!settingsJson) {
    return;
  }

  SETTINGS = JSON.parse(settingsJson);
};

const getFormattedTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const applyTheme = () => {
  document.body.style.backgroundColor = SETTINGS.backgroundColor;

  const clock = document.getElementById("clock");
  clock.style.color = SETTINGS.textColor;

  const search = document.getElementById("search");
  search.style.color = SETTINGS.textColor;
  search.style.borderColor = SETTINGS.textColor;

  const settingsPanel = document.getElementById("settingsPanel");
  settingsPanel.style.background = SETTINGS.backgroundColor;
  settingsPanel.style.borderColor = SETTINGS.textColor;

  const settingsLabel = document.getElementById("settingsLabel");
  settingsLabel.style.color = SETTINGS.textColor;

  const settingsSectionTitle = [...document.getElementsByClassName("settings-section-title")];
  settingsSectionTitle.forEach(title => title.style.color = SETTINGS.textColor);

  const settingsSections = [...document.getElementsByClassName("settings-section")];
  settingsSections.forEach(section => section.style.borderColor = SETTINGS.textColor);

  const settingsChevrons = [...document.getElementsByClassName("settings-chevron")];
  settingsChevrons.forEach(chevron => chevron.style.fill = SETTINGS.textColor);

  const settingsIcon = document.getElementById("settingsIcon");
  settingsIcon.style.fill = SETTINGS.textColor;
};

const changeTheme = (backgroundColor, textColor) => {
  SETTINGS.backgroundColor = backgroundColor;
  SETTINGS.textColor = textColor;
  localStorage.setItem("SETTINGS", JSON.stringify(SETTINGS));
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
};

const handleThemePresets = () => {
  const themePresets = [...document.getElementsByClassName("theme-preset")];
  themePresets.forEach(preset => {
    preset.onclick = () => {
      changeTheme(preset.style.backgroundColor, preset.children[0].style.color);
      applyTheme();
    };
  });
};

window.onload = () => {
  loadSettings();
  applyTheme();

  handleClock();
  handleSearch();
  handleSettings();
  handleThemePresets();
};