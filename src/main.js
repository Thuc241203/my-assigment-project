const app =document.querySelector('#app');
import HomePage from "./pages/homepage";
import AboutPage from "./pages/AboutPage";
import { render, router } from "./utilities";
import ProductsPage from "./pages/Products";
import NotFoundPage from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetail";

router.on('/', () => render(HomePage, app));
router.on('/AboutPage', () => render(AboutPage, app));
router.on('/productspage', () => render(ProductsPage, app));
router.notFound(() => render(NotFoundPage, app));
router.on('/product/:id', ({ data }) => render(() => ProductDetailPage(data), app));
router.resolve();
