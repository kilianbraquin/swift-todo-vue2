import ShortUniqueId from "short-unique-id";

const uid = new ShortUniqueId({ length: 10 });

export const generateId = () => {
  return uid.rnd();
};
