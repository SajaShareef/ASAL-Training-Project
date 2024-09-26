import { ReactNode } from 'react';

export const NAVBAR_TEST_ID = 'navbar-test';

export interface NavbarProps {
    className?: string;
}

export interface NavbarItem {
    key: string;
    label: ReactNode;
}
