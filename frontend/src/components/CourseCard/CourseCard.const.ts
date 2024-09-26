import { FC, ReactNode } from 'react';

export interface CourseCardProps {
    title: string;
    description: string;
    cardImg?:FC<{ className?: string }>;
    children?: ReactNode;
    className?:string;
}

export const CARD_TEST_ID = 'card';
export const CARD_IMG_TEST_ID = 'card-img';
export const CARD_DEFAULT_IMG_TEST_ID = 'default-img';