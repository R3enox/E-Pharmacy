import sprite from '../../assets/sprite.svg';
import { StatisticList } from './Statistic.styled';

export const Statistic = ({
  productsQuantity,
  suppliersQuantity,
  customersQuantity,
}) => {
  return (
    <StatisticList>
      <li className="listItem">
        <div className="svgWrapper">
          <svg className="iconStat">
            <use href={sprite + '#icon-coins'} />
          </svg>
          <p className="descItem">All products</p>
        </div>
        <p>{productsQuantity}</p>
      </li>
      <li className="listItem">
        <div className="svgWrapper">
          <svg className="iconStat">
            <use href={sprite + '#icon-coins'} />
          </svg>
          <p className="descItem">All suppliers</p>
        </div>
        <p>{suppliersQuantity}</p>
      </li>
      <li className="listItem">
        <div className="svgWrapper">
          <svg className="iconStat">
            <use href={sprite + '#icon-users'} />
          </svg>
          <p className="descItem">All Customers </p>
        </div>
        <p>{customersQuantity}</p>
      </li>
    </StatisticList>
  );
};
