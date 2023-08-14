export const generateToken = (availableDigits: string[]): string => {
  let result = "";
  if (availableDigits.length === 0) {
    return result;
  }

  const randomToken = Array.from(
    { length: 16 },
    () => availableDigits[Math.floor(Math.random() * availableDigits.length)]
  ).join("");

  result = formatToken(randomToken);

  return result;
};

const formatToken = (token: string) => {
  return token.replace(/(\d{4})/g, "$1-").slice(0, -1);
};
