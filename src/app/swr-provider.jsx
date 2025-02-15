'use client';

import swr from '@/config/swr';
import { SWRConfig } from 'swr';

export const SWRProvider = ({ children }) => {
    return <SWRConfig value={swr.value}>{children}</SWRConfig>;
};
