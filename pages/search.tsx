import axios from 'axios';
import type { GetStaticProps } from 'next'; 
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Search({ menu }: HomeProps): JSX.Element {

  return (
    <>
    Search
    </>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    },
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
