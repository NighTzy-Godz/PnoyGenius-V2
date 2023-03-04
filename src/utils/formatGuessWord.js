export const font_size_map = {
  mobile: {
    default: 280,
    short: 180,
    long: 400,
  },

  small_tablet: {
    default: 410,
    short: 230,
    long: 550,
  },

  big_tablet: {
    default: 510,
    short: 270,
    long: 750,
  },

  laptop: {
    default: 580,
    short: 320,
    long: 850,
  },

  desktop: {
    default: 700,
    short: 400,
    long: 1000,
  },
};

export const getScreenSize = (screenSize) => {
  if (screenSize < 576) return "mobile";
  if (screenSize > 576 && screenSize < 767) return "small_tablet";
  if (screenSize > 767 && screenSize < 992) return "big_tablet";
  if (screenSize > 992 && screenSize < 1200) return "laptop";
  if (screenSize >= 1199) return "desktop";
};
