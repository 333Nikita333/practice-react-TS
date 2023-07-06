import { FormEvent, ReactNode } from 'react';
import { Movie } from './types';

export interface MovieListProps {
  movies: Movie[];
}

export interface SearchBarProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface BackLinkProps {
  to: string;
  children: Readonly<ReactNode>;
}
