export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://mybrigada.ru/api';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_API_URL) {
  console.warn('NEXT_PUBLIC_API_URL is not set in environment variables');
}