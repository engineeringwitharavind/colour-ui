export const greeting = () => {
  const time = new Date().getHours();
  if (time < 12) return 'Good Morning';
  else if (time >= 12 && time <= 17) return 'Good Afternoon';
  else return 'Good Evening';
};
