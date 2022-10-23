export const IS_LOGIN = 'isLogin';

export const getItem = (key: string) => {
  const item = localStorage.getItem(key);

  return item ? JSON.parse(item) : undefined;
};

export const setItem = (key: string, value: any) => {
  localStorage.setItem(key, value);
};

export const deleteItem = (key: string) => {
  localStorage.removeItem(key);
};
