import { useEffect, router } from "@/utilities"

const AdminProductEditPage = ({ id }) => {  
  
    const products = JSON.parse(localStorage.getItem("products")) || [];  
    const currenProduct = products.find((product) => product.id === +id); 

    
    useEffect(() => {
        const form = document.getElementById('form-add');
        const productName = document.getElementById('product-name');
        const productPrice = document.getElementById('product-price');

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const newProduct = {
                id: +id,
                name: productName.value,
                price: productPrice.value,
            }
                const newProducts = products.map((product) =>{
                    return product.id === newProduct.id ? newProduct: product;
                });
              
                localStorage.setItem('products', JSON.stringify(newProducts));

                router.navigate('/admin/products');
        });
    }); 
    if(!currenProduct) return null;
  return `
  <div class="container mx-auto  ">
      <h1>cap nhap sản phẩm</h1>
      <form action="" id="form-add" class="w-full" >
        <div class="form-group mt-2 mb-2">
          <lable for="">Tên sản phẩm</lable>
          <input type="text" id="product-name" class="border border-black" value="${currenProduct.name}"  />
        </div>
        <div class="form-group mt-2 mb-2  ">
          <lable for="">Giá sản phẩm</lable>
          <input type="text" id="product-price" class=" border border-black" value="${currenProduct.price}" />

        </div>
        <div class="form-group" >
            <button class="bg-red-600 rounded-md text-white p-4 m-4" >cap nhap sản phẩm</button>
        </div>
      </form>
      </div>
  `;
    
  
};

export default AdminProductEditPage;