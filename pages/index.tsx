import axios from 'axios';
import type { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components/index';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Home ({menu}: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(3);


  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button apperance='primary' className='test' arrow='right'>test</Button>
      <Button apperance='ghost' className='test2' arrow="down" onClick={() => setCounter(counter =>  ++counter)}>test2</Button>
      <P size='s'>test</P>
      <P size='l'>test</P>
      <P >test</P>
      <div>
        <Tag size='s' href='#'>text</Tag>
        <Tag color='red'>text</Tag>
        <Tag color='primary'>text</Tag>
        <Tag color='grey'>text</Tag>
        <Tag color='green'>text</Tag>
        <Tag color='primary'>text</Tag>
      </div>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
      {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}

      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',{
    firstCategory
  });
  return{
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number;
}
