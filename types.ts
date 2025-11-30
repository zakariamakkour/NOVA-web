
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

export type Language = 'en' | 'ar' | 'fr';
export type Currency = 'USD' | 'EUR' | 'MAD';
export type Theme = 'light' | 'dark';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price: number;
  category: 'Hydration' | 'Nutrition' | 'Well-Being' | 'Workspace' | 'Everyday Carry';
  imageUrl: string;
  gallery?: string[];
  features: string[];
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode; // Allowing JSX for rich formatting/poems
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'product', product: Product }
  | { type: 'journal', article: JournalArticle }
  | { type: 'checkout' };
