import React, { createContext, ReactNode, useContext } from 'react';

interface SlantContextProps {
    apiKey: string;
    baseUrl: string;
}

const SlantContext = createContext<SlantContextProps | undefined>(undefined);

export const SlantProvider: React.FC<SlantContextProps & { children: ReactNode }> = ({ apiKey, baseUrl, children }) => {
    return (
        <SlantContext.Provider value={{ apiKey, baseUrl }}>
            {children}
        </SlantContext.Provider>
    );
};

export const useSlantContext = () => {
    const context = useContext(SlantContext);
    if (!context) {
        throw new Error('useSlantContext must be used within a SlantProvider');
    }
    return context;
};