export const COLORS = {
  primary: 'hsl(245deg, 100%, 85%)',
  secondary: 'hsl(333deg 100% 55%)',
  decorative: 'hsl(60deg, 100%, 80%)',
  background: 'hsl(210deg, 40%, 10%)',
  text: 'hsl(0deg, 0%, 100%)',
  black: 'hsl(0deg, 0%, 0%)',
  hover: 'hsl(240deg, 100%, 70%)',
  disabled: 'hsl(0deg, 0%, 30%)',
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}px)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}px)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin}px)`,
};
