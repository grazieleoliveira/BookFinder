import request from './request';

export const searchBooks = async (text: string) => {
  try {
    const response = await request.get('', text);
    return response;
  } catch {
    return null;
  }
};

export const getBook = async (id: string) => {
  try {
    const response = await request.get('', '', id);
    console.tron.log('RESPONSE', response);
    return response;
  } catch {
    return null;
  }
};
