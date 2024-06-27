import sprite from '../../assets/sprite.svg';
import {
  IconStatistic,
  ListStatistic,
  StatisticItem,
  Title,
  TitleWrapper,
  Value,
} from './Statistic.styled';

export const Statistic = ({
  productsQuantity,
  suppliersQuantity,
  customersQuantity,
}) => {
  const statisticList = [
    {
      title: 'All products',
      icon: sprite + '#icon-coins',
      value: productsQuantity,
    },
    {
      title: 'All suppliers',
      icon: sprite + '#icon-users',
      value: suppliersQuantity,
    },
    {
      title: 'All customers',
      icon: sprite + '#icon-users',
      value: customersQuantity,
    },
  ];

  return (
    <ListStatistic>
      {statisticList.map((item, index) => (
        <StatisticItem key={index}>
          <TitleWrapper>
            <IconStatistic>
              <use href={item.icon}></use>
            </IconStatistic>
            <Title>{item.title}</Title>
          </TitleWrapper>
          <Value>{item.value.toLocaleString('en-US')}</Value>
        </StatisticItem>
      ))}
    </ListStatistic>
  );
};
