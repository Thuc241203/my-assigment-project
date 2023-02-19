import { useEffect, router } from "@/utilities"
// import { products } from "@/data";
const AdminProductAddPage = () => {  

    const products = JSON.parse(localStorage.getItem('products')) || [];  
    useEffect(() => {
        const form = document.getElementById('form-add');
        const productName = document.getElementById('product-name');
        const productPrice = document.getElementById('product-price');

        form.addEventListener('submit', function(e){
            e.preventDefault();
            const newProduct = {
                id:products.length +1,
                name: productName.value,
                price: productPrice.value
            }
                products.push(newProduct);

                localStorage.setItem('products', JSON.stringify(products));

                router.navigate('/admin/products');
        });
    }); 
  return `
  <div class="container mx-auto  ">
  <h1>Thêm sản phẩm</h1>
  <form action="" id="form-add" class="w-full" >
    <div class="form-group mt-2 mb-2">
      <lable for="">Tên sản phẩm</lable>
      <input type="text" id="product-name" class="border border-black" />
    </div>
    <div class="form-group mt-2 mb-2  ">
      <lable for="">Giá sản phẩm</lable>
      <input type="text" id="product-price" class=" border border-black" />

    </div>
    <div class="form-group" >
        <button class="bg-red-600 rounded-md text-white p-4 m-4" >Thêm sản phẩm</button>
    </div>
  </form>
  </div>
  `
    
  
}

export default AdminProductAddPage;