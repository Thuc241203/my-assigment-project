import { products} from "@/data";
import { useEffect, useState } from "@/utilities";

const AdminProductsPage = () => {
    const [data, setData] = useState(products);

    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = this.dataset.id;
                const newProducts = data.filter((product) => product.id !== +id);
                setData(newProducts);
                console.log(newProducts);
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
            <th class="border" ></th>
            </tr>
        </thead>
        <tbody class="text-center">
            ${products.map(
                (product, index) => ` 
                <tr class="border">
                    <td class="border" >${index + 1}</td>
                    <td class="border" >${product.name}</td>
                    <td class="border" >
                        <button data-id="${product.id}" class="bg-red-600 rounded-md text-white p-2 m-2 btn-remove">xoa</button>
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