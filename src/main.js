const app =document.querySelector('#app');
import HomePage from "./pages/homepage";
import AboutPage from "./pages/AboutPage";
import { render, router } from "./utilities";
import ProductsPage from "./pages/Products";
import NotFoundPage from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetail";
import AdminProductsPage from "./pages/admin/Products";
import AdminProductsAddPage from "./pages/admin/Products-add";

router.on('/', () => render(HomePage, app));
router.on('/AboutPage', () => render(AboutPage, app));
router.on('/productspage', () => render(ProductsPage, app));

router.on('/product/:id', ({ data }) => render(() => ProductDetailPage(data), app));
//AdminProductsPage

router.on('/admin/products', () => render(AdminProductsPage, app));
router.on('/admin.products/add', () => render(AdminProductsAddPage, app));
router.notFound(() => render(NotFoundPage, app));
router.resolve();
