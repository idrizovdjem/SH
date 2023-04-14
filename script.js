// TODO: Backgrounds and Text Colors need to be adjusted
// TODO: Add animations to 'Next Page' and 'Previous Page' buttons

const SEARCH_ENGINE_QUERY_TEMPLATES = {
  Google: "https://www.google.com/search?q={{QUERY}}",
  DuckDuckGo: "https://duckduckgo.com/?q={{QUERY}}",
  Bing: "https://www.bing.com/search?q={{QUERY}}",
  Yahoo: "https://search.yahoo.com/search?p={{QUERY}}",
};

const QUOTES = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    author: "Kevin Kruse",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    author: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
    author: "Robert Frost",
  },
  {
    quote: "I attribute my success to this: I never gave or took any excuse.",
    author: "Florence Nightingale",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    quote:
      "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    quote: "Every strike brings me closer to the next home run.",
    author: "Babe Ruth",
  },
  {
    quote: "Definiteness of purpose is the starting point of all achievement.",
    author: "W. Clement Stone",
  },
  {
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    author: "Kevin Kruse",
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "We become what we think about.",
    author: "Earl Nightingale",
  },
  {
    quote: "Life is 10% what happens to me and 90% of how I react to it.",
    author: "Charles Swindoll",
  },
  {
    quote:
      "The most common way people give up their power is by thinking they don’t have any.",
    author: "Alice Walker",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote:
      "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "Winning isn’t everything, but wanting to win is.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    quote:
      "Every child is an artist.  The problem is how to remain an artist once he grows up.",
    author: "Pablo Picasso",
  },
  {
    quote:
      "You can never cross the ocean until you have the courage to lose sight of the shore.",
    author: "Christopher Columbus",
  },
  {
    quote:
      "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou",
  },
  {
    quote: "Either you run the day, or the day runs you.",
    author: "Jim Rohn",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote:
      "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "The best revenge is massive success.",
    author: "Frank Sinatra",
  },
  {
    quote:
      "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.",
    author: "Zig Ziglar",
  },
  {
    quote: "Life shrinks or expands in proportion to one’s courage.",
    author: "Anais Nin",
  },
  {
    quote:
      "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.",
    author: "Vincent Van Gogh",
  },
  {
    quote:
      "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",
    author: "Aristotle",
  },
  {
    quote:
      "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Go confidently in the direction of your dreams.  Live the life you have imagined.",
    author: "Henry David Thoreau",
  },
  {
    quote:
      "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.",
    author: "Booker T. Washington",
  },
  {
    quote:
      "Certain things catch your eye, but pursue only those that capture the heart.",
    author: " Ancient Indian Proverb",
  },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair",
  },
  {
    quote:
      "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
    author: "Plato",
  },
  {
    quote:
      "Teach thy tongue to say, “I do not know,” and thous shalt progress.",
    author: "Maimonides",
  },
  {
    quote: "Start where you are. Use what you have.  Do what you can.",
    author: "Arthur Ashe",
  },
  {
    quote: "Fall seven times and stand up eight.",
    author: "Japanese Proverb",
  },
  {
    quote: "Everything has beauty, but not everyone can see.",
    author: "Confucius",
  },
  {
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    author: "Anne Frank",
  },
  {
    quote: "When I let go of what I am, I become what I might be.",
    author: "Lao Tzu",
  },
  {
    quote:
      "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
    author: "Maya Angelou",
  },
  {
    quote:
      "Happiness is not something readymade.  It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote:
      "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",
    author: "Sheryl Sandberg",
  },
  {
    quote: "If the wind will not serve, take to the oars.",
    author: "Latin Proverb",
  },
  {
    quote:
      "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.",
    author: "Unknown",
  },
  {
    quote:
      "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "Marie Curie",
  },
  {
    quote:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "Les Brown",
  },
  {
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
    author: "Joshua J. Marine",
  },
  {
    quote: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    quote:
      "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
    author: "Leonardo da Vinci",
  },
  {
    quote:
      "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.",
    author: "Jamie Paolinetti",
  },
  {
    quote:
      "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
    author: "Erica Jong",
  },
  {
    quote:
      "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
    author: "Bob Dylan",
  },
  {
    quote: "I didn’t fail the test. I just found 100 ways to do it wrong.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "In order to succeed, your desire for success should be greater than your fear of failure.",
    author: "Bill Cosby",
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote:
      "The person who says it cannot be done should not interrupt the person who is doing it.",
    author: "Chinese Proverb",
  },
  {
    quote: "There are no traffic jams along the extra mile.",
    author: "Roger Staubach",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote: "You become what you believe.",
    author: "Oprah Winfrey",
  },
  {
    quote: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
  },
  {
    quote:
      "A truly rich man is one whose children run into his arms when his hands are empty.",
    author: "Unknown",
  },
  {
    quote:
      "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.",
    author: "Ann Landers",
  },
  {
    quote:
      "If you want your children to turn out well, spend twice as much time with them, and half as much money.",
    author: "Abigail Van Buren",
  },
  {
    quote:
      "Build your own dreams, or someone else will hire you to build theirs.",
    author: "Farrah Gray",
  },
  {
    quote:
      "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
    author: "Jesse Owens",
  },
  {
    quote: "Education costs money.  But then so does ignorance.",
    author: "Sir Claus Moser",
  },
  {
    quote:
      "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote:
      "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    quote:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    author: "Dalai Lama",
  },
  {
    quote: "You can’t use up creativity.  The more you use, the more you have.",
    author: "Maya Angelou",
  },
  {
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King Jr.",
  },
  {
    quote: "Do what you can, where you are, with what you have.",
    author: "Teddy Roosevelt",
  },
  {
    quote:
      "If you do what you’ve always done, you’ll get what you’ve always gotten.",
    author: "Tony Robbins",
  },
  {
    quote: "Dreaming, after all, is a form of planning.",
    author: "Gloria Steinem",
  },
  {
    quote:
      "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.",
    author: "Mae Jemison",
  },
  {
    quote:
      "You may be disappointed if you fail, but you are doomed if you don’t try.",
    author: "Beverly Sills",
  },
  {
    quote: "Remember no one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "Life is what we make it, always has been, always will be.",
    author: "Grandma Moses",
  },
  {
    quote:
      "The question isn’t who is going to let me; it’s who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.",
    author: "Henry Ford",
  },
  {
    quote:
      "It’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Change your thoughts and you change your world.",
    author: "Norman Vincent Peale",
  },
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Nothing is impossible, the word itself says, “I’m possible!”",
    author: "Audrey Hepburn",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "If you can dream it, you can achieve it.",
    author: "Zig Ziglar",
  },
];

const SIMPLE_THEME_PRESETS = [
  { background: "#000000", textColor: "#ffffff" },
  { background: "#000000", textColor: "#a9a9a9" },
  { background: "#000000", textColor: "#36454f" },
  { background: "#000000", textColor: "#0096ff" },
  { background: "#000000", textColor: "#ff3131" },
  { background: "#000000", textColor: "#fc6c85" },
  { background: "#000000", textColor: "#6a0dad" },
  { background: "#000000", textColor: "#4cbb17" },
  { background: "#000000", textColor: "#ffa500" },
  { background: "#000000", textColor: "#ffdf00" },
  { background: "#36454f", textColor: "#ffffff" },
  { background: "#353935", textColor: "#ffffff" },
  { background: "#28282b", textColor: "#ffffff" },
];

const THEME_IMAGES_PER_PAGE = 4;
const MODERN_THEME_PRESETS = [
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/sand_black_beach_130680_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/dark_lines_background_65869_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/sea_waves_dark_865645_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/ice_cranny_surface_196663_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/sand_black_relief_133792_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/forest_fog_dark_152252_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/buildings_road_lights_902858_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/mountains_trees_landscape_902854_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/flowers_field_valley_883069_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/fields_valley_building_901779_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/mountains_desert_grass_901641_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/mountain_desert_sunset_866247_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/antelope_canyon_canyon_cave_898574_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/desert_sand_dunes_875628_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/desert_sand_dunes_734519_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
  {
    backgroundImageUrl:
      "https://images.wallpaperscraft.com/image/single/bridge_hills_evening_898533_1920x1080.jpg",
    background: "#000000",
    textColor: "#FFFFFF",
  },
];

let currentModernThemePageIndex = 0;
let settings = {
  backgroundImageUrl: "",
  backgroundColor: "#000000",
  textColor: "#FFFFFF",
  searchAutofocused: false,
  textOpacity: 1.0,
  backgroundOpacity: 1.0,
  searchEngine: "Google", // "Google" | "DuckDuckGo" | "Bing" | "Yahoo"
  layoutType: "Clock", // "{LeftTop}-{RightTop}-{Bottom}" | "{Left}-{Right}" | "{Whole Screen}"
  themeType: "Minimal", // "Minimal" | "Modern"
  quotesEnabled: false,
  quickLinksEnabled: false,
};

const getFormattedTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const rgbStringToHex = (rgb) => {
  return (
    "#" +
    rgb
      .substring(4, rgb.length - 1)
      .split(", ")
      .map((val) => parseInt(val).toString(16).padStart(2, "0"))
      .join("")
  );
};

const getRandomQuote = () => {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
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
  const backgroundOpacityLabel = document.getElementById(
    "backgroundOpacityLabel"
  );
  const backgroundOpacityRange = document.getElementById(
    "backgroundOpacityRange"
  );
  const settingsSectionTitleContainers = [
    ...document.getElementsByClassName("settings-section-title-container"),
  ];
  const searchAutofocused = document.getElementById("searchAutofocused");
  const themePresets = [...document.getElementsByClassName("theme-preset")];
  const textColorCustomInput = document.getElementById("textColorCustomInput");
  const backgroundColorCustomInput = document.getElementById(
    "backgroundColorCustomInput"
  );
  const searchEngineIcons = [
    ...document.getElementsByClassName("search-engine-icon"),
  ];
  const clockAndSearchSection = document.getElementById(
    "clockAndSearchSection"
  );
  const quoteSection = document.getElementById("quoteSection");
  const quote = document.getElementById("quote");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const quoteToggle = document.getElementById("quoteToggle");
  const quickLinksToggle = document.getElementById("quickLinksToggle");
  const quickLinksSection = document.getElementById("quickLinksSection");
  const layouts = [...document.getElementsByClassName("layout")];
  const layoutRadioInputs = [
    ...document.getElementsByClassName("layout-radio-input"),
  ];
  const themeContent = document.getElementById("themeContent");
  const themeTypeLayouts = [...document.getElementsByClassName("theme-layout")];

  const loadSettings = () => {
    const settingsJson = localStorage.getItem("settings");
    if (!settingsJson) {
      return;
    }

    settings = JSON.parse(settingsJson);
    applyTheme();
    applyOpacity();
  };

  const conditionallyRenderLayouts = () => {
    layouts.forEach((l) => {
      const quoteEnabled = l.getAttribute("data-quote-enabled") === "true";
      const quickLinksEnabled =
        l.getAttribute("data-quick-links-enaabled") === "true";
      l.style.display =
        quoteEnabled === settings.quotesEnabled &&
        quickLinksEnabled === settings.quickLinksEnabled
          ? "block"
          : "none";
    });
  };

  const applyOnlyClockLayout = () => {
    clockAndSearchSection.style.left = "0%";
    clockAndSearchSection.style.top = "0%";
    clockAndSearchSection.style.width = "100vw";
    clockAndSearchSection.style.height = "100vh";

    quoteSection.style.display = "none";
    quickLinksSection.style.display = "none";
  };

  const applyLeftQuoteAndRightClockLayout = () => {
    clockAndSearchSection.style.left = "50%";
    clockAndSearchSection.style.top = "0%";
    clockAndSearchSection.style.width = "50vw";
    clockAndSearchSection.style.height = "100vh";

    quoteSection.style.display = "block";
    quoteSection.style.left = "0%";
    quoteSection.style.top = "0%";
    quoteSection.style.width = "50vw";
    quoteSection.style.height = "100vh";
  };

  const applyLeftClockAndRightQuoteLayout = () => {
    clockAndSearchSection.style.left = "00%";
    clockAndSearchSection.style.top = "0%";
    clockAndSearchSection.style.width = "50vw";
    clockAndSearchSection.style.height = "100vh";

    quoteSection.style.display = "block";
    quoteSection.style.left = "50%";
    quoteSection.style.top = "0%";
    quoteSection.style.width = "50vw";
    quoteSection.style.height = "100vh";
  };

  const applyLeftQuickLinksAndRightClockLayout = () => {
    // TODO: IMPLEMENT LAYOUT
  };

  const applyLeftClockAndRightQuickLinksLayout = () => {
    // TODO: IMPLEMENT LAYOUT
  };

  const applyLeftQuoteAndRightClockAndBottomQuickLinksLayout = () => {
    // TODO: IMPLEMENT LAYOUT
  };

  const applyLeftClockAndRightQuoteAndBottomQuickLinksLayout = () => {
    // TODO: IMPLEMENT LAYOUT
  };

  const applyLayout = () => {
    conditionallyRenderLayouts();
    clockAndSearchSection.style.display = "block";

    switch (settings.layoutType) {
      case "Clock":
        applyOnlyClockLayout();
        break;
      case "Quote-Clock":
        applyLeftQuoteAndRightClockLayout();
        break;
      case "Clock-Quote":
        applyLeftClockAndRightQuoteLayout();
        break;
      case "Links-Clock":
        applyLeftQuickLinksAndRightClockLayout();
        break;
      case "Clock-Links":
        applyLeftClockAndRightQuickLinksLayout();
        break;
      case "Quote-Clock-Links":
        applyLeftQuoteAndRightClockAndBottomQuickLinksLayout();
        break;
      case "Clock-Quote-Links":
        applyLeftClockAndRightQuoteAndBottomQuickLinksLayout();
        break;
      default:
        applyOnlyClockLayout();
        break;
    }
  };

  const applyOpacity = () => {
    document.documentElement.style.setProperty(
      "--text-opacity",
      settings.textOpacity
    );
    document.documentElement.style.setProperty(
      "--background-opacity",
      settings.backgroundOpacity
    );

    const textOpacityPercentage = Math.ceil(settings.textOpacity * 100);
    const backgroundOpacityPercentage = Math.ceil(
      settings.backgroundOpacity * 100
    );

    textOpacityRange.value = textOpacityPercentage;
    textOpacityLabel.innerText = `Text opacity (${textOpacityPercentage}%)`;
    backgroundOpacityRange.value = backgroundOpacityPercentage;
    backgroundOpacityLabel.innerText = `Background opacity (${backgroundOpacityPercentage}%)`;
  };

  const applyTheme = () => {
    document.documentElement.style.setProperty(
      "--text-color",
      settings.textColor
    );
    document.documentElement.style.setProperty(
      "--background-color",
      settings.backgroundColor
    );
    document.documentElement.style.setProperty(
      "--background-image-url",
      `url(${settings.backgroundImageUrl})`
    );

    const backgroundColorAsHex = settings.backgroundColor.startsWith("#")
      ? settings.backgroundColor
      : rgbStringToHex(settings.backgroundColor);

    const textColorAsHex = settings.textColor.startsWith("#")
      ? settings.textColor
      : rgbStringToHex(settings.textColor);

    backgroundColorCustomInput.value = backgroundColorAsHex;
    textColorCustomInput.value = textColorAsHex;
  };

  const showQuote = () => {
    const randomQuote = getRandomQuote();
    quote.innerText = randomQuote.quote;
    quoteAuthor.innerHTML = `&mdash; ${randomQuote.author}`;
  };

  const determineDefaultLayout = () => {
    if (
      settings.quotesEnabled === false &&
      settings.quickLinksEnabled === false
    ) {
      settings.layoutType = "Clock";
    } else if (
      settings.quotesEnabled === true &&
      settings.quickLinksEnabled === false
    ) {
      settings.layoutType = "Quote-Clock";
    } else if (
      settings.quotesEnabled === false &&
      settings.quickLinksEnabled === true
    ) {
      settings.layoutType = "Links-Clock";
    } else {
      // All widgets are enabled (Quote and Quick Links)
      settings.layoutType = "Quote-Clock-Links";
    }

    let firstDisplayed = true;

    layouts.forEach((l) => {
      const quoteEnabled = l.getAttribute("data-quote-enabled") === "true";
      const quickLinksEnabled =
        l.getAttribute("data-quick-links-enaabled") === "true";

      if (
        quoteEnabled === settings.quotesEnabled &&
        quickLinksEnabled === settings.quickLinksEnabled &&
        firstDisplayed
      ) {
        firstDisplayed = false;
        const radionInput = l.children[0];
        radionInput.checked = true;
      }
    });

    persistSettings();
    applyLayout();
  };

  const renderModernThemePresets = () => {
    const pagesCount = Math.ceil(
      MODERN_THEME_PRESETS.length / THEME_IMAGES_PER_PAGE
    );
    const pageElements = [];
    for (let pageIndex = 0; pageIndex < pagesCount; pageIndex++) {
      const presets = [];
      for (
        let presetIndex = pageIndex * THEME_IMAGES_PER_PAGE;
        presetIndex < pageIndex * THEME_IMAGES_PER_PAGE + THEME_IMAGES_PER_PAGE;
        presetIndex++
      ) {
        if (presetIndex === MODERN_THEME_PRESETS.length) {
          break;
        }

        presets.push(MODERN_THEME_PRESETS[presetIndex]);
      }

      const pageElement = document.createElement("div");
      pageElement.classList.add("modern-theme-presets-page");
      if (pageIndex === 0) {
        pageElement.style.display = "flex";
      }

      presets.forEach((preset) => {
        const presetContainer = document.createElement("div");
        presetContainer.classList.add("modern-theme-preset");
        presetContainer.style.backgroundImage = `url(${preset.backgroundImageUrl})`;

        const presetRadioButton = document.createElement("input");
        presetRadioButton.setAttribute("type", "radio");
        presetRadioButton.classList.add("layout-radio-input");
        presetRadioButton.setAttribute("name", "modern-theme-preset");
        if (preset.backgroundImageUrl === settings.backgroundImageUrl) {
          presetRadioButton.checked = true;
        }

        presetContainer.appendChild(presetRadioButton);
        pageElement.appendChild(presetContainer);

        presetContainer.onclick = () => {
          presetContainer.children[0].checked = true;
          settings.backgroundImageUrl = preset.backgroundImageUrl;
          settings.backgroundColor = preset.background;
          settings.textColor = preset.textColor;
          settings.themeType = "Modern";
          persistSettings();
          applyTheme();
        };
      });

      pageElements.push(pageElement);
      themeContent.appendChild(pageElement);
    }

    const previousPageButton = document.createElement("button");
    previousPageButton.classList.add("previous-page-button");
    previousPageButton.innerText = "Previous Page";
    previousPageButton.style.display = "none";

    const nextPageButton = document.createElement("button");
    nextPageButton.classList.add("next-page-button");
    nextPageButton.innerText = "Next Page";
    if (pagesCount === 1) {
      nextPageButton.style.display = "none";
    }

    const pageButtonsContainer = document.createElement("div");
    pageButtonsContainer.classList.add("page-buttons-container");
    pageButtonsContainer.appendChild(previousPageButton);
    pageButtonsContainer.appendChild(nextPageButton);
    themeContent.appendChild(pageButtonsContainer);

    previousPageButton.onclick = () => {
      currentModernThemePageIndex--;

      if (currentModernThemePageIndex === 0) {
        previousPageButton.style.display = "none";
      }

      if (currentModernThemePageIndex < pagesCount) {
        nextPageButton.style.display = "block";
      }

      pageElements.forEach((pageElement, index) => {
        pageElement.style.display =
          index === currentModernThemePageIndex ? "flex" : "none";
      });
    };

    nextPageButton.onclick = () => {
      currentModernThemePageIndex++;

      if (currentModernThemePageIndex === pagesCount - 1) {
        nextPageButton.style.display = "none";
      }

      previousPageButton.style.display = "block";

      pageElements.forEach((pageElement, index) => {
        pageElement.style.display =
          index === currentModernThemePageIndex ? "flex" : "none";
      });
    };
  };

  const renderThemePresets = () => {
    themeContent.innerHTML = "";

    if (settings.themeType === "Minimal") {
      SIMPLE_THEME_PRESETS.forEach((preset) => {
        const presetText = document.createElement("p");
        presetText.classList.add("theme-preset-text");
        presetText.style.color = preset.textColor;
        presetText.innerText = "OK? OK!";

        const presetContainer = document.createElement("div");
        presetContainer.classList.add("theme-preset");
        presetContainer.style.backgroundColor = preset.background;
        presetContainer.style.borderColor = preset.textColor;
        presetContainer.appendChild(presetText);

        presetContainer.onclick = () => {
          settings.backgroundColor = preset.background;
          settings.textColor = preset.textColor;
          persistSettings();
          applyTheme();
        };

        themeContent.appendChild(presetContainer);
      });

      // Padding element so the presets can be stacked correct.
      // May need change if presets number change.
      // !FIX: Think of better way of doing this
      const paddingElement = document.createElement("div");
      paddingElement.style.width = "210px";
      themeContent.appendChild(paddingElement);
    } else {
      renderModernThemePresets();
    }
  };

  const handleClock = () => {
    clock.innerText = getFormattedTime();

    setInterval(() => {
      clock.innerText = getFormattedTime();
    }, 1000);
  };

  const handleSearch = () => {
    search.value = "";
    if (settings.searchAutofocused) {
      search.focus();
    }

    search.onkeydown = (event) => {
      if (event.key !== "Enter") {
        return;
      }

      const query = search.value;
      const queryUrl = SEARCH_ENGINE_QUERY_TEMPLATES[
        settings.searchEngine
      ].replace("{{QUERY}}", query);
      window.location.href = queryUrl;
    };
  };

  const handleSettings = () => {
    quoteToggle.checked = settings.quotesEnabled;
    quickLinksToggle.checked = settings.quickLinksEnabled;
    searchAutofocused.checked = settings.searchAutofocused;

    quoteToggle.onchange = () => {
      settings.quotesEnabled = quoteToggle.checked;
      determineDefaultLayout();
    };

    quickLinksToggle.onchange = () => {
      settings.quickLinksEnabled = quickLinksToggle.checked;
      determineDefaultLayout();
    };

    settingsIcon.onclick = () => {
      settingsPanel.classList.toggle("settings-panel--expanded");
      settingsIcon.classList.toggle("spin");
      settingsSectionTitleContainers.forEach((container) => {
        const contentElement = container.parentElement.children[1];
        const chevronIcon = container.children[0];
        chevronIcon.classList.remove("spin");
        contentElement.classList.remove("settings-section-content--expanded");
      });
    };

    settingsSectionTitleContainers.forEach((container) => {
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

    searchEngineIcons.forEach((engine) => {
      const engineName = engine.getAttribute("data-name");
      if (engineName == settings.searchEngine) {
        engine.classList.add("search-engine-icon-active");
      }

      engine.onclick = () => {
        searchEngineIcons.forEach((eng) =>
          eng.classList.remove("search-engine-icon-active")
        );
        engine.classList.add("search-engine-icon-active");
        settings.searchEngine = engineName;
        persistSettings();
      };
    });

    layoutRadioInputs.forEach((radioInput) => {
      const layoutType =
        radioInput.parentElement.getAttribute("data-layout-type");
      if (layoutType === settings.layoutType) {
        radioInput.checked = true;
      }

      radioInput.onchange = () => {
        settings.layoutType = layoutType;
        persistSettings();
        applyLayout();
      };
    });

    layouts.forEach((layout) => {
      const layoutType = layout.getAttribute("data-layout-type");
      layout.onclick = () => {
        settings.layoutType = layoutType;
        layout.children[0].checked = true;
        persistSettings();
        applyLayout();
      };
    });

    themeTypeLayouts.forEach((themeTypeLayout) => {
      const themeType = themeTypeLayout.getAttribute("data-theme-type");
      if (themeType === settings.themeType) {
        themeTypeLayout.children[0].checked = true;
      }

      themeTypeLayout.onclick = () => {
        if (themeType === "Minimal") {
          settings.backgroundImageUrl = "";
          settings.backgroundColor = SIMPLE_THEME_PRESETS[0].background;
          settings.textColor = SIMPLE_THEME_PRESETS[0].textColor;
        } else {
          settings.backgroundImageUrl =
            MODERN_THEME_PRESETS[0].backgroundImageUrl;
          settings.backgroundColor = MODERN_THEME_PRESETS[0].background;
          settings.textColor = MODERN_THEME_PRESETS[0].textColor;
        }

        settings.themeType = themeType;
        themeTypeLayout.children[0].checked = true;
        renderThemePresets();
        persistSettings();
        applyTheme();
      };
    });
  };

  const handleThemePresets = () => {
    const setColorByInput = (input, ground) => {
      if (ground === "fg") {
        settings.textColor = input.value;
      } else if (ground === "bg") {
        settings.backgroundColor = input.value;
      } else {
        return;
      }

      persistSettings();
      applyTheme();
    };

    textColorCustomInput.addEventListener("input", (event) => {
      setColorByInput(event.target, "fg");
    });
    backgroundColorCustomInput.addEventListener("input", (event) => {
      setColorByInput(event.target, "bg");
    });

    renderThemePresets();
  };

  loadSettings();

  applyLayout();
  applyTheme();
  applyOpacity();

  if (settings.quotesEnabled) {
    showQuote();
  }

  handleClock();
  handleSearch();
  handleSettings();
  handleThemePresets();
};
