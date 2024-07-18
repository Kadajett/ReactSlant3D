import { useCallback, useState } from 'react';
import { useSlantContext } from './SlantContext';
import { OpenAPI } from './api/core/OpenAPI';
import { Order } from './api/models/Order';
import { SliceRequest } from './api/models/SliceRequest';
import { DefaultService } from './api/services/DefaultService';

export const useSlant = () => {
    const { apiKey, baseUrl } = useSlantContext();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    // Set the API key and base URL
    OpenAPI.BASE = baseUrl;
    OpenAPI.HEADERS = { 'api-key': apiKey };

    const handleApiCall = useCallback(async <T,>(apiFunction: () => Promise<T>): Promise<T | null> => {
        setLoading(true);
        setError(null);
        try {
            const result = await apiFunction();
            return result;
        } catch (err) {
            setError(err instanceof Error ? err : new Error('An unknown error occurred'));
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const sliceModel = useCallback((request: SliceRequest) => {
        return handleApiCall(() => DefaultService.sliceModel(request));
    }, [handleApiCall]);

    const getFilaments = useCallback(() => {
        return handleApiCall(() => DefaultService.getFilaments());
    }, [handleApiCall]);

    const placeOrder = useCallback((order: Order) => {
        return handleApiCall(() => DefaultService.placeOrder(order));
    }, [handleApiCall]);

    const estimateOrder = useCallback((order: Order) => {
        return handleApiCall(() => DefaultService.estimateOrder(order));
    }, [handleApiCall]);

    const getTracking = useCallback((orderId: string) => {
        return handleApiCall(() => DefaultService.getTracking(orderId));
    }, [handleApiCall]);

    return {
        sliceModel,
        getFilaments,
        placeOrder,
        estimateOrder,
        getTracking,
        loading,
        error,
    };
};