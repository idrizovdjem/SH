let settings = {
  backgroundColor: "#000000",
  textColor: "#FFFFFF",
  searchAutofocused: false,
  textOpacity: 1.0,
  backgroundOpacity: 1.0
};

const getFormattedTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const rgbStringToHex = (rgb) => {
  return "#" + rgb
    .substring(4, rgb.length-1)
    .split(", ")
    .map(val => parseInt(val).toString(16).padStart(2, '0'))
    .join('');
};

const persistSettings = () => {
  localStorage.setItem("settings", JSON.stringify(settings));
};

window.onload = () => {
  const clock = document.getElementById("clock");
  const search = document.getElementById("search");
  const settingsIcon = document.getElementById("settingsIcon");
  const settingsPanel = document.getElementById("settingsPanel");
  const textOpacityRange = document.getElementById("textOpacityRange");
  const textOpacityLabel = document.getElementById("textOpacityLabel");
  const backgroundOpacityLabel = document.getElementById("backgroundOpacityLabel");
  const backgroundOpacityRange = document.getElementById("backgroundOpacityRange");
  const settingsSectionTitleContainers = [...document.getElementsByClassName("settings-section-title-container")];
  const searchAutofocused = document.getElementById("searchAutofocused");
  const themePresets = [...document.getElementsByClassName("theme-preset")];
  const fgColorInput = document.getElementById("fg-color");
  const bgColorInput = document.getElementById("bg-color");
  
  const loadSettings = () => {
    const settingsJson = localStorage.getItem("settings");
    if (!settingsJson) {
      return;
    }
  
    settings = JSON.parse(settingsJson);
    applyTheme();
    applyOpacity();
  };

  const applyOpacity = () => {
    document.documentElement.style.setProperty("--text-opacity", settings.textOpacity);
    document.documentElement.style.setProperty("--background-opacity", settings.backgroundOpacity);
  
    const textOpacityPercentage = Math.ceil(settings.textOpacity * 100); 
    const backgroundOpacityPercentage = Math.ceil(settings.backgroundOpacity * 100); 
  
    textOpacityRange.value = textOpacityPercentage;
    textOpacityLabel.innerText = `Text opacity (${textOpacityPercentage}%)`;
    backgroundOpacityRange.value = backgroundOpacityPercentage;
    backgroundOpacityLabel.innerText = `Background opacity (${backgroundOpacityPercentage}%)`;
  };

  const applyTheme = () => {
    document.documentElement.style.setProperty("--text-color", settings.textColor);
    document.documentElement.style.setProperty("--background-color", settings.backgroundColor);
    
    const backgroundColorAsHex = settings.backgroundColor.startsWith('#')
      ? settings.backgroundColor
      : rgbStringToHex(settings.backgroundColor);
  
    const textColorAsHex = settings.textColor.startsWith('#')
      ? settings.textColor
      : rgbStringToHex(settings.textColor);
  
      bgColorInput.value = backgroundColorAsHex;
      fgColorInput.value = textColorAsHex;
  };

  const handleClock = () => {
    clock.innerText = getFormattedTime();
  
    setInterval(() => {
      clock.innerText = getFormattedTime();
    }, 1000);
  };

  const handleSearch = () => {
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
    searchAutofocused.checked = settings.searchAutofocused;
  
    settingsIcon.onclick = () => {
      settingsPanel.classList.toggle("settings-panel--expanded");
      settingsIcon.classList.toggle("spin");
      settingsSectionTitleContainers.forEach(container => {
        const contentElement = container.parentElement.children[1];
        const chevronIcon = container.children[0];
        chevronIcon.classList.remove("spin");
        contentElement.classList.remove("settings-section-content--expanded");
      });
    };
  
    settingsSectionTitleContainers.forEach(container => {
      container.onclick = () => {
        const settingSection = container.parentElement;
        const contentElement = settingSection.children[1];
        
        const chevronIcon = container.children[0];
  
        contentElement.classList.toggle("settings-section-content--expanded");
        chevronIcon.classList.toggle("spin");
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

  loadSettings();
  handleClock();
  handleSearch();
  handleSettings();
  handleThemePresets();
};
