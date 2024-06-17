import { API_SERVER_CONFIG } from "@/config/API_config";

async function getProductDetail(id:string){
    console.log(API_SERVER_CONFIG.product_detail+id)
    try {
        let response = await fetch(API_SERVER_CONFIG.product_detail+id, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        let product = await response.json();
        return product;
      } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;  // Rethrow the error after logging it
      }
} 

function fetcher(){
    
}