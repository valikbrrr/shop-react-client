import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/app/store'; // ⚠️ ЕЩЁ ОДНО ЕДИНСТВЕННОЕ НАРУШЕНИЕ!

export const useAppDispatch = () => useDispatch<AppDispatch>();