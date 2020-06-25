/* eslint-disable */
// generated by free-swagger

// Returns pet inventories by status
export const getInventory = (params) =>
  axios.request({
    url: `/store/inventory`,
    method: "get",
    params: {},
    data: {}
  });

// Find purchase order by ID
export const getOrderById = (params, { orderId }) =>
  axios.request({
    url: `/store/order/${orderId}`,
    method: "get",
    params: {},
    data: {}
  });

// Delete purchase order by ID
export const deleteOrder = (params, { orderId }) =>
  axios.request({
    url: `/store/order/${orderId}`,
    method: "delete",
    params: {},
    data: {}
  });

// Place an order for a pet
export const placeOrder = (params) =>
  axios.request({
    url: `/store/order`,
    method: "post",
    params: {},
    data: params
  });
