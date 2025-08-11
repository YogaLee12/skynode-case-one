const categories = [
    { id: 'a51f4cf5-9b4f-4f4d-8436-9a5d4a9a7b01', name: 'Entrée' },
    { id: 'b1c54dbe-bd75-4e82-a1d7-befb4b79f920', name: 'Main' },
    { id: 'fcb6f4af-1e94-4e94-83a8-671eaa4b9862', name: 'Pasta' },
    { id: 'c3a2a5f3-f6d0-4a1d-8fc0-5c915b8b3f29', name: 'Side' }
];


const products = [
    { id: '6bb6b9f7-7f6c-4d2f-a4af-bb7c75c3f02a', name: 'Oysters', description: 'Freshly shucked sea oysters', category_id: 'a51f4cf5-9b4f-4f4d-8436-9a5d4a9a7b01' },
    { id: '1a5dbb71-d0da-4f12-b7a2-86d4a6a5bb51', name: 'Caesar Salad', description: 'Classic Caesar salad with parmesan and croutons', category_id: 'a51f4cf5-9b4f-4f4d-8436-9a5d4a9a7b01' },
    { id: 'b548f39a-d4b6-49c4-a2ff-6b177982a36c', name: 'Steak', description: 'Grilled premium beef steak', category_id: 'b1c54dbe-bd75-4e82-a1d7-befb4b79f920' },
    { id: 'c8cf8e59-8d65-4f1f-90b3-2d35a7c1af9c', name: 'Roast Chicken', description: 'Oven roasted whole chicken with herbs', category_id: 'b1c54dbe-bd75-4e82-a1d7-befb4b79f920' },
    { id: 'fe0a75a8-efb4-4c27-b6a4-2c5ab84c8134', name: 'Grilled Fish', description: 'Fresh fish grilled with lemon butter', category_id: 'b1c54dbe-bd75-4e82-a1d7-befb4b79f920' },
    { id: '26e36402-0046-4f37-b15f-60943f67aa4b', name: 'Carbonara Pasta', description: 'Creamy carbonara pasta with bacon', category_id: 'fcb6f4af-1e94-4e94-83a8-671eaa4b9862' },
    { id: '8a95d3b4-3097-4e13-93b2-47242131f9cf', name: 'Seafood Tomato Pasta', description: 'Pasta with tomato sauce and fresh seafood', category_id: 'fcb6f4af-1e94-4e94-83a8-671eaa4b9862' },
    { id: '5de26e1e-3b9b-4d19-96b1-420c6aef32d6', name: 'Creamy Mushroom Pasta', description: 'Pasta with creamy mushroom sauce', category_id: 'fcb6f4af-1e94-4e94-83a8-671eaa4b9862' },
    { id: '7b8c1f18-29b2-4c67-a8ff-3565a3766d71', name: 'French Fries', description: 'Crispy golden fries', category_id: 'c3a2a5f3-f6d0-4a1d-8fc0-5c915b8b3f29' },
    { id: '2c5f2c18-3d3e-4a4f-a4bb-9a647e6cde45', name: 'Grilled Vegetables', description: 'Seasonal vegetables grilled to perfection', category_id: 'c3a2a5f3-f6d0-4a1d-8fc0-5c915b8b3f29' },
    { id: '11fb9ed5-0806-4d0e-bf54-0db5c3ad2a0f', name: 'Mashed Potatoes', description: 'Creamy mashed potatoes with butter', category_id: 'c3a2a5f3-f6d0-4a1d-8fc0-5c915b8b3f29' }
];

const product_variants = [
    { id: 'fbb5a0cf-1c6d-4d93-b4e0-836b73f41e50', product_id: '6bb6b9f7-7f6c-4d2f-a4af-bb7c75c3f02a', name: 'Half Dozen', price: 19.99 },
    { id: '66b342e4-f079-4fa0-8b53-bb49f2b5df56', product_id: '6bb6b9f7-7f6c-4d2f-a4af-bb7c75c3f02a', name: 'Full Dozen', price: 36.99 },
    { id: '5b918c1d-10b2-4d91-8a42-9d46b617d1b2', product_id: '1a5dbb71-d0da-4f12-b7a2-86d4a6a5bb51', name: 'Standard', price: 12.99 },
    { id: '3c8a19d2-df87-4c8f-86ef-6354b9eacba0', product_id: 'b548f39a-d4b6-49c4-a2ff-6b177982a36c', name: 'Standard', price: 25.99 },
    { id: '1d89e65e-8bb3-46d8-b6b8-29d4a11c86af', product_id: 'c8cf8e59-8d65-4f1f-90b3-2d35a7c1af9c', name: 'Standard', price: 21.99 },
    { id: 'bf0a9055-a7f7-4cbb-85fc-48a79c8b3f02', product_id: 'fe0a75a8-efb4-4c27-b6a4-2c5ab84c8134', name: 'Standard', price: 23.99 },
    { id: 'cc1b13ef-61dc-4974-b1d8-d6e35c3b40f1', product_id: '26e36402-0046-4f37-b15f-60943f67aa4b', name: 'Standard', price: 15.99 },
    { id: 'a0c45bb6-a13d-4fd3-89c4-51e83a1868c6', product_id: '8a95d3b4-3097-4e13-93b2-47242131f9cf', name: 'Standard', price: 17.99 },
    { id: 'd4c73484-5354-4dbd-846b-f2857ab9f143', product_id: '5de26e1e-3b9b-4d19-96b1-420c6aef32d6', name: 'Standard', price: 16.99 },
    { id: 'c4a2bb02-301d-4cc2-b5dd-61d57305b0f7', product_id: '7b8c1f18-29b2-4c67-a8ff-3565a3766d71', name: 'Standard', price: 6.99 },
    { id: 'b68ff5ec-d0de-47a7-a0a0-3b38c6a4e084', product_id: '2c5f2c18-3d3e-4a4f-a4bb-9a647e6cde45', name: 'Standard', price: 7.99 },
    { id: '44597758-fd3e-4e34-a813-bbeac4cb59c6', product_id: '11fb9ed5-0806-4d0e-bf54-0db5c3ad2a0f', name: 'Standard', price: 5.99 }
];
