import CoursesIcon from '../layout/Menu/icons/courses.svg';
import ServicesIcon from '../layout/Menu/icons/services.svg';
import BooksIcon from '../layout/Menu/icons/books.svg';
import ProductIcon from '../layout/Menu/icons/product.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu : FirstLevelMenuItem[] = [
  {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
  {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
  {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
  {route: 'product', name: 'Товары', icon: <ProductIcon/>, id: TopLevelCategory.Products},
];
