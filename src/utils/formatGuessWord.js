export const font_size_map = {
  mobile: {
    default: 250,
    short: 180,
    long: 400,
  },

  desktop: {
    default: 800,
    short: 400,
    long: 1200,
  },
};

export const getScreenSize = (screenSize) => {
  if (screenSize < 576) return "mobile";
  if (screenSize > 1199) return "desktop";
};
