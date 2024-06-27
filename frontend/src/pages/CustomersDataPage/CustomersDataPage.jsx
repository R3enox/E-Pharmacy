import { useEffect, useState } from 'react';

import API from '../../services/axios';

import {
  WrapperPage,
  Control,
  WrapperPlaceholder,
} from '../../components/Page/Page.styled';
import { Filter } from '../../components/Filter/Filter';
import { TableWrapper } from '../../components/Table/Table.styled';
import { CustomersData } from '../../components/CustomersData/CustomersData';
import { Placeholder } from '../../components/Placeholder/Placeholder';
import { Paginator } from '../../components/Paginator/Paginator';

const CustomersDataPage = () => {
  const [customers, setCustomers] = useState(null);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const searchParams = new URLSearchParams({ page });
        if (filter) searchParams.set('name', filter.split('/')[0]);

        const { data } = await API.get(`/customers?${searchParams}`);
        setCustomers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, filter]);

  const onFilterSubmit = (value) => {
    setFilter(`${value}/${Date.now()}`);
    setPage(1);
    setCustomers(null);
  };

  const hasError = !isLoading && error;
  const data = !error && customers?.paginatedResult?.length > 0;
  const noData =
    !isLoading && !error && customers?.paginatedResult?.length === 0;

  return (
    <WrapperPage>
      <Control>
        <Filter
          placeholder="User Name"
          fieldName="User Name"
          onFilterSubmit={onFilterSubmit}
          isLoading={isLoading}
        />
      </Control>

      {data && (
        <>
          <TableWrapper>
            <CustomersData customers={customers.paginatedResult} />
          </TableWrapper>
          <Paginator totalCount={customers.totalCount} setPage={setPage} />
        </>
      )}
      {hasError && (
        <WrapperPlaceholder>
          <Placeholder>Oops... {error}</Placeholder>
        </WrapperPlaceholder>
      )}
      {noData && (
        <WrapperPlaceholder>
          <Placeholder>
            No results found. Please verify your spelling or try using different
            keywords.
          </Placeholder>
        </WrapperPlaceholder>
      )}
    </WrapperPage>
  );
};

export default CustomersDataPage;
