// Importing the JSON data
import cartData from '../../data/carts.json';
const cartReducer = (state = cartData, action) => {
    switch (action.type) {
      case "addToCart":
        const productInCart = state.items.find(
          (item) => item.productId === action.payload.product.id
        );
  
        if (productInCart) {
          // Nếu sản phẩm đã tồn tại, chỉ cập nhật quantity và totalPrice
          return {
            ...state,
            items: state.items.map((item) =>
              item.productId === action.payload.product.id
                ? {
                    ...item,
                    quantity: item.quantity + action.payload.quantity, // Cộng thêm quantity mới
                    totalPrice:
                      (item.quantity + action.payload.quantity) * item.price, // Cập nhật totalPrice mới
                  }
                : item
            ),
            totalAmount: state.totalAmount + action.payload.product.price, // Cộng giá sản phẩm vào tổng số tiền
          };
        } else {
          // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
          const newProduct = {
            productId: action.payload.product.id,
            name: action.payload.product.name,
            price: action.payload.product.price,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * action.payload.product.price, // Tính totalPrice cho sản phẩm mới
          };
  
          return {
            ...state,
            items: [...state.items, newProduct],
            totalAmount: state.totalAmount + newProduct.totalPrice, // Cập nhật totalAmount với sản phẩm mới
          };
        }
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  