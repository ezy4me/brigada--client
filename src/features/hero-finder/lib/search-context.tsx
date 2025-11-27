"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { SearchParams, UserRole } from './types';

interface SearchState extends SearchParams {
  recentSearches: string[];
}

type SearchAction = 
  | { type: 'SET_QUERY'; payload: string }
  | { type: 'SET_CITY'; payload: string }
  | { type: 'SET_ROLE'; payload: UserRole }
  | { type: 'ADD_RECENT_SEARCH'; payload: string };

const SearchContext = createContext<{
  state: SearchState;
  dispatch: React.Dispatch<SearchAction>;
} | null>(null);

const searchReducer = (state: SearchState, action: SearchAction): SearchState => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };
    case 'SET_CITY':
      return { ...state, city: action.payload };
    case 'SET_ROLE':
      return { ...state, role: action.payload };
    case 'ADD_RECENT_SEARCH':
      const newSearches = [action.payload, ...state.recentSearches.filter(s => s !== action.payload)].slice(0, 5);
      return { ...state, recentSearches: newSearches };
    default:
      return state;
  }
};

interface SearchProviderProps {
  children: ReactNode;
  initialParams?: Partial<SearchParams>;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ 
  children, 
  initialParams = {} 
}) => {
  const [state, dispatch] = useReducer(searchReducer, {
    query: '',
    city: 'Москва',
    role: 'guest',
    recentSearches: [],
    ...initialParams,
  });

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};