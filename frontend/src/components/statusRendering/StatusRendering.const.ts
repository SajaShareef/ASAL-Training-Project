import { ReactNode } from 'react';

export const STATUS_RENDERING_TEST_ID = 'status-rendering';

export interface StatusRenderingProps {
    isPending: boolean;
    isError: boolean;
    errorMessage?: string | null;
    onRetry?: () => void;
    children: ReactNode;
}