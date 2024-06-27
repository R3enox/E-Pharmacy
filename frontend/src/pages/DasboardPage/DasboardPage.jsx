import { Statistic } from '../../components/Statistic/Statistic';
import { useEffect, useState } from 'react';
import API from '../../services/axios';
import { TableWrapper, TablesContainer } from './DasboardPage.styled';
import { RecentCustomers } from '../../components/RecentCustomers/RecentCustomers';
import { Transaction } from '../../components/Transaction/Transaction';

const DasboardPage = () => {
  const [dashboard, setDashboard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data } = await API.get('/dashboard');
        setDashboard(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const data = !isLoading && !error && dashboard;
  const noData = !isLoading && !error && !dashboard;

  return (
    <>
      {data && (
        <>
          <Statistic
            productsQuantity={dashboard.productsQuantity}
            suppliersQuantity={dashboard.suppliersQuantity}
            customersQuantity={dashboard.customersQuantity}
          />
          <TablesContainer>
            <TableWrapper>
              <RecentCustomers customers={dashboard.recentCustomers} />
            </TableWrapper>
            <TableWrapper>
              <Transaction transactions={dashboard.recentTransactions} />
            </TableWrapper>
          </TablesContainer>
        </>
      )}
    </>
  );
};

export default DasboardPage;
