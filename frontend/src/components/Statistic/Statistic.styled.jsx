import styled from 'styled-components';

export const StatisticList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  gap: 20px;

  .listItem {
    padding: 14px;
    border: 1px solid rgba(29, 30, 33, 0.1);
    border-radius: 8px;
    padding: 14px;

    height: 98px;
    flex-basis: calc((100% - 20px) / 2);

    &:first-child {
      border-color: #59b17a;
    }
  }
  .svgWrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 32px;
  }
  .iconStat {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: black;
  }

  .descItem {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    color: rgba(29, 30, 33, 0.4);
  }
`;
