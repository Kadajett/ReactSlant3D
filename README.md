# Slant 3D React Library

A React library for interacting with the Slant 3D API, providing easy-to-use hooks for 3D printing services.

## Installation

Install the package using npm:

```bash
npm install react-slant-3d
```

Or using yarn:

```bash
yarn add react-slant-3d
```

## Usage

First, wrap your app with the `SlantProvider`:

```jsx
import { SlantProvider } from 'react-slant-3d';

function App() {
  return (
    <SlantProvider apiKey="your-api-key" baseUrl="https://api.slant3d.com">
      {/* Your app components */}
    </SlantProvider>
  );
}
```

Then, use the `useSlant` hook in your components:

```jsx
import { useSlant } from 'react-slant-3d';

function MyComponent() {
  const { sliceModel, loading, error } = useSlant();

  const handleSliceModel = async () => {
    const result = await sliceModel({ fileURL: 'http://example.com/model.stl' });
    if (result) {
      console.log('Sliced model price:', result.data.price);
    }
  };

  return (
    <div>
      <button onClick={handleSliceModel} disabled={loading}>
        Slice Model
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
```

## API

### `SlantProvider`

A context provider that should wrap your app to provide the Slant 3D API configuration.

Props:
- `apiKey` (string): Your Slant 3D API key
- `baseUrl` (string): The base URL for the Slant 3D API

### `useSlant`

A hook that provides access to all Slant 3D API functions.

Returns an object with the following properties:

- `sliceModel(request: SliceRequest): Promise<SliceResponse | null>`
- `getFilaments(): Promise<{ filaments?: Filament[] } | null>`
- `placeOrder(order: Order): Promise<{ orderId?: string } | null>`
- `estimateOrder(order: Order): Promise<{ totalPrice?: number } | null>`
- `getTracking(orderId: string): Promise<{ status?: OrderStatus; trackingNumbers?: any[] } | null>`
- `loading` (boolean): Indicates if any API call is in progress
- `error` (Error | null): Contains any error that occurred during the last API call

### Types

- `SliceRequest`
  ```typescript
  {
    fileURL: string;
  }
  ```

- `Order`
  ```typescript
  {
    email: string;
    phone: string;
    name: string;
    orderNumber: string;
    filename: string;
    fileURL: string;
    bill_to_street_1: string;
    bill_to_city: string;
    bill_to_state: string;
    bill_to_zip: string;
    ship_to_country_as_iso: string;
    order_quantity: string;
    order_item_color: string;
    // ... other optional fields
  }
  ```

- `Filament`
  ```typescript
  {
    filament: string;
    hexColor: string;
    colorTag: string;
    profile: string;
  }
  ```

- `OrderStatus`: `'awaiting_shipment' | 'shipped' | 'on_hold' | 'cancelled'`

## Error Handling

The `useSlant` hook provides built-in error handling. If an error occurs during an API call, it will be stored in the `error` property. You can check this property to display error messages to the user.

## Loading State

The `loading` property returned by `useSlant` indicates whether any API call is currently in progress. You can use this to show loading indicators in your UI.

## Examples

### Slicing a Model

```jsx
const { sliceModel, loading, error } = useSlant();

const handleSlice = async () => {
  const result = await sliceModel({ fileURL: 'http://example.com/model.stl' });
  if (result) {
    console.log('Price:', result.data.price);
  }
};
```

### Placing an Order

```jsx
const { placeOrder, loading, error } = useSlant();

const handleOrder = async () => {
  const order = {
    email: 'user@example.com',
    phone: '1234567890',
    name: 'John Doe',
    orderNumber: '12345',
    filename: 'model.stl',
    fileURL: 'http://example.com/model.stl',
    bill_to_street_1: '123 Main St',
    bill_to_city: 'Anytown',
    bill_to_state: 'CA',
    bill_to_zip: '12345',
    ship_to_country_as_iso: 'US',
    order_quantity: '1',
    order_item_color: 'Red'
  };

  const result = await placeOrder(order);
  if (result) {
    console.log('Order ID:', result.orderId);
  }
};
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.