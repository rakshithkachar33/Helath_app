import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { ReactNode } from 'react';

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <MantineProvider>{children}</MantineProvider>
    )
}

export default AppProvider