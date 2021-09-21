import request from './request';

export const searchBooks = async (text: string) => {
  try {
    const response = await request.get('', text);
    return response;
  } catch {
    return null;
  }
};
