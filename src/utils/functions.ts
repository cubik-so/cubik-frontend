import { nanoid } from 'nanoid';
import { v4 as uuidv4 } from 'uuid';
export const genrateNanoId = (size: number | undefined): string => {
  const id = nanoid(22);
  return id;
};
export const generateUuid = (): string => {
  const id = uuidv4();
  return id;
};
