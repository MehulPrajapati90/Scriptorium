import { onBoardUser } from '@/actions/auth';
import React from 'react'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    await onBoardUser();
    return (
        <div>{children}</div>
    )
}

export default RootLayout;