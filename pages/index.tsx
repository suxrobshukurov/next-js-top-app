import type { NextPage } from 'next';
import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components/index';

const Home: NextPage = (): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(3);


  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button apperance='primary' className='test' arrow='right'>test</Button>
      <Button apperance='ghost' className='test2' arrow="down" onClick={() => setCounter(x => x + 1)}>test2</Button>
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

    </>
  );
};

export default Home;
