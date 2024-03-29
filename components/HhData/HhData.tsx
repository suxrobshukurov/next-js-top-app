import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import cn from "classnames";
import { Card } from '../Card/Card';
import RatingIcon from './star.svg';
import { priceRu } from '../../helpers/helpers';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
	return (<div className={styles.hh}>
    <Card className={styles.count}>
      <div className={styles.title}>Всего Вакансии</div>
      <div className={styles.countValue}>{count}</div>
    </Card>
    <Card className={styles.salary}>
      <div>
        <div className={styles.title}>Начальный</div>
        <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
        <div className={styles.rate}>
          <RatingIcon className={styles.filled}/>
          <RatingIcon/>
          <RatingIcon/>
        </div>
      </div>
      <div>
        <div className={styles.title}>Средний</div>
        <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
        <div className={styles.rate}>
          <RatingIcon className={styles.filled}/>
          <RatingIcon className={styles.filled}/>
          <RatingIcon/>
        </div>
      </div>
      <div>
        <div className={styles.title}>Профессионал</div>
        <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
        <div className={styles.rate}>
          <RatingIcon className={styles.filled}/>
          <RatingIcon className={styles.filled}/>
          <RatingIcon className={styles.filled}/>
        </div>
      </div>
    </Card>
  </div>);
};