import { updateProject, getProject} from "@/api/project";
import { useEffect, router, useState } from "@/utilities"

const AdminProductEditPage = ({ id }) => {   
    const [data, setData] = useState({});
    useEffect(() => {
      (async() => {
        try {
           setData(await getProject(id))
        } catch (error) { 
          console.log(error);
        }
      })();
  }, []);  
    useEffect(() => {
        const form = document.getElementById('form-add');
        const productName = document.getElementById('product-name');
        const productPrice = document.getElementById('product-price');

        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            try {
              await updateProject({
                id,
                name: productName.value,
                price: productPrice.value,
              });
              router.navigate('/admin/products'); 
            } catch (error) {
                console.log(error);
            }
        });
    }); 
    
  return `
  <div class="container mx-auto  ">
      <h1>cap nhap sản phẩm</h1>
      <form action="" id="form-add" class="w-full" >
        <div class="form-group mt-2 mb-2">
          <lable for="">Tên sản phẩm</lable>
          <input type="text" id="product-name" class="border border-black" value="${data.name ?? ""}"/>
        </div>
        <div class="form-group mt-2 mb-2  ">
          <lable for="">Giá sản phẩm</lable>
          <input type="text" id="product-price" class=" border border-black" value="${data.price ?? "" }"/>

        </div>
        <div class="form-group" >
            <button class="bg-red-600 rounded-md text-white p-4 m-4" >cap nhap sản phẩm</button>
        </div>
      </form>
      </div>
  `;
    
  
};

export default AdminProductEditPage;