const getItem = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(`${process.env.NEXT_PUBLIC_APP_NAME}:${key}`);
  }
};

const setItem = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(
      `${process.env.NEXT_PUBLIC_APP_NAME}:${key}`,
      value
    );
  }
};

export { getItem, setItem };
