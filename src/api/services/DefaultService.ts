/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Filament } from '../models/Filament';
import type { Order } from '../models/Order';
import type { OrderStatus } from '../models/OrderStatus';
import type { SliceRequest } from '../models/SliceRequest';
import type { SliceResponse } from '../models/SliceResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Slices a 3D model
     * Slices a 3D model and returns the price
     * @param requestBody
     * @returns SliceResponse Model sliced successfully
     * @throws ApiError
     */
    public static sliceModel(
        requestBody?: SliceRequest,
    ): CancelablePromise<SliceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/slicer',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input or unable to slice model`,
            },
        });
    }
    /**
     * Get filaments
     * @returns any Filaments retrieved successfully
     * @throws ApiError
     */
    public static getFilaments(): CancelablePromise<{
        filaments?: Array<Filament>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/filament',
        });
    }
    /**
     * Place an order
     * @param requestBody
     * @returns any Order placed successfully
     * @throws ApiError
     */
    public static placeOrder(
        requestBody?: Order,
    ): CancelablePromise<{
        orderId?: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input or unable to place order`,
            },
        });
    }
    /**
     * Estimate an order
     * Estimates the price of an order with shipping
     * @param requestBody
     * @returns any Order placed successfully
     * @throws ApiError
     */
    public static estimateOrder(
        requestBody?: Order,
    ): CancelablePromise<{
        totalPrice?: number;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/order/estimate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid input or unable to place order`,
            },
        });
    }
    /**
     * Get tracking
     * Gets the status of an order
     * @param orderId The order ID
     * @returns any Order status retrieved successfully
     * @throws ApiError
     */
    public static getTracking(
        orderId: string,
    ): CancelablePromise<{
        status?: OrderStatus;
        trackingNumbers?: any[];
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/order/{orderId}/get-tracking',
            path: {
                'orderId': orderId,
            },
            errors: {
                400: `Invalid input or unable to get order status`,
            },
        });
    }
}
