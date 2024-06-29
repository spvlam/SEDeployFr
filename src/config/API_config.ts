export enum API_SERVER_CONFIG{
    // deploying
    // login = "https://se2deployment.onrender.com/login/noauth",
    // register = "https://se2deployment.onrender.com/login/noauth/register",
    // logout = "https://se2deployment.onrender.com/login/noauth/logout",
    // login_facebook= "https://se2deployment.onrender.com/login/noauth/facebook/callback",
    // login_google = "https://se2deployment.onrender.com/login/noauth/loginwithFacebook",
    
    // product_list = "https://se2deployment.onrender.com/product/noauth/all",
    // product_varients = "https://se2deployment.onrender.com/product/noauth/productVarient",
    // product_carts= "https://se2deployment.onrender.com/order/auth/getCartUser/",
    // product_carts_remove= "https://se2deployment.onrender.com/order/auth/deleteProductCart/",
    // product_detail = "https://se2deployment.onrender.com/product/noauth/product_detail/",
    // order_detail = "https://se2deployment.onrender.com/order/auth/detail",
    // order_add_product_to_cart = "https://se2deployment.onrender.com/order/auth/addToCarts/",
    // getCartById ="https://se2deployment.onrender.com/cart/id=",
    // payment_url = "https://se2deployment.onrender.com/vnpay/createPayment",

    // local
    login = "http://localhost:3000/login/noauth",
    register = "http://localhost:3000/login/noauth/register",
    logout = "http://localhost:3000/login/noauth/logout",
    login_facebook= "http://localhost:3000/login/noauth/facebook/callback",
    login_google = "http://localhost:3000/login/noauth/loginwithFacebook",
    
    product_list = "http://localhost:3000/product/noauth/all",
    product_varients = "http://localhost:3000/product/noauth/productVarient",
    product_carts= "http://localhost:3000/order/auth/getCartUser/",
    product_carts_remove= "http://localhost:3000/order/auth/deleteProductCart/",
    product_detail = "http://localhost:3000/product/noauth/product_detail/",
    order_detail = "http://localhost:3000/order/auth/detail",
    order_add_product_to_cart = "http://localhost:3000/order/auth/addToCarts/",
    getCartById ="http://localhost:3000/cart/id=",
    payment_url = "http://localhost:3000/vnpay/createPayment",

}
export enum LOCAL_STORAGE{
    accessToken = 'accessToken',
    refreshToken = 'refreshToken',
    userName = 'username',
    user_id = 'user_id'

}

export enum PARAMETER_USER{
    id = 'id',
    category = 'category',
    accessToken = 'accessToken',
    refreshToken = 'refreshToken',
    name = 'name',
    ava = 'https://avatar.oxro.io/avatar.svg?name=',
    vnPay = 'code'
}