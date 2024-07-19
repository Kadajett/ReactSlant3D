/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Order = {
    email: string;
    phone: string;
    name: string;
    orderNumber: string;
    filename: string;
    fileURL: string;
    bill_to_street_1: string;
    bill_to_street_2?: string;
    bill_to_street_3?: string;
    bill_to_city: string;
    bill_to_state: string;
    bill_to_zip: string;
    bill_to_country_as_iso?: string;
    bill_to_is_US_residential?: Order.bill_to_is_US_residential;
    ship_to_name: string;
    ship_to_street_1: string;
    ship_to_street_2?: string;
    ship_to_street_3?: string;
    ship_to_city: string;
    ship_to_state: string;
    ship_to_zip: string;
    ship_to_country_as_iso: string;
    ship_to_is_US_residential?: Order.ship_to_is_US_residential;
    order_item_name: string;
    order_quantity: string;
    order_image_url?: string;
    order_sku?: string;
    order_item_color: string;
};
export namespace Order {
    export enum bill_to_is_US_residential {
        TRUE = 'true',
        FALSE = 'false',
    }
    export enum ship_to_is_US_residential {
        TRUE = 'true',
        FALSE = 'false',
    }
}

