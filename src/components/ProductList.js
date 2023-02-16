
const ProductList = ({products}) => {
  return `
        ${products
            .map((product) =>{
            return `
                <div class="flex ">
                    <h3 class="p-2"><a href="/product/${product.id}">${product.name}</a></h3>
                    <h3 class="p-2"> ${product.price}</h3>
                </div>`;
        })
        .join("")}
  `;
};

export default ProductList