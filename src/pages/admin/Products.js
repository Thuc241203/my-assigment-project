
import { deleteProject, getProjects } from "@/api/project";
import { useEffect, useState } from "@/utilities";


const AdminProductsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async() => {
            try {
                setData(await getProjects());
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);     

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", async function () {
                const id = this.dataset.id;
                const confirm = window.confirm("bạn có chắc chắn muốn xóa không?");
                if(confirm) {
                    try {
                        await deleteProject(id);
                        const newProjects = data.filter((dataProjects) => dataProjects.id !== id);
                        setData(newProjects);
                    } catch (error) {
                        console.log(error)
                    }
                   
                }
            });
        }
    });
    
  return `
  <div class="container mx-auto mt-10" >
  <table class="border container">
        <thead class="items-center">
            <tr class="border">
            <th class="border" >STT</th>
            <th class="border" >NAME</th>
            <th class="border" >price</th>
            <th class="border" >Chucnang</th>
            </tr>
        </thead>
        <tbody class="text-center">
        
            ${data.map(
                (product, index) => ` 
                <tr class="border">
                    <td class="border" >${index + 1}</td>
                    <td class="border" >${product.name}</td>
                    <td class="border" >${product.price}</td>
                    <td class="border" >
                        <button data-id="${product.id}" class="bg-red-600 rounded-md text-white p-2 m-2 btn-remove">xoa</button>
                        <a class="bg-red-600 rounded-md text-white p-2 m-2" href="/admin/products/${product.id}/edit">sua</a>
                    </td>
                </tr>
                `
            )
              .join("")}
          
        </tbody>
    </table>
  </div>`;
  
}

export default AdminProductsPage;