import type { TypeFeatherIconNames } from '@/types/IconsType';
import type { TypeWebPaths } from '@/types/navigation.types';

export interface IMenuItem {
  icon: TypeFeatherIconNames;
  path: TypeWebPaths;
  title: string
}