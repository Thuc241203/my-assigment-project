import ProductList from "@/components/ProductList";
import { products } from "@/data";


const ProductsPage = () => {
  return `
    
    <div class="container flex justify-center gap-10">
        
      ${ProductList({ products })}
    </div>`;
}

export default ProductsPage;