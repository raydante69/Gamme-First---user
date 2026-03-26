
// Import React to resolve the 'React' namespace for types
import React from 'react';

export interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  color: string;
  className?: string;
  linkText?: string;
  isMain?: boolean;
  badge?: string;
  onClick?: () => void;
}

export enum SectionId {
  LEGAL = 'legal',
  VENTES = 'ventes',
  ACHATS = 'achats',
  MOBILE = 'mobile'
}