import { useEffect, useState } from 'react';

import API from '../../services/axios';

import {
  WrapperPage,
  Control,
  WrapperPlaceholder,
} from '../../components/Page/Page.styled';
import { Filter } from '../../components/Filter/Filter';
import { TableWrapper } from '../../components/Table/Table.styled';
import { AllSuppliers } from '../../components/AllSuppliers/AllSuppliers';
import { Placeholder } from '../../components/Placeholder/Placeholder';
import { Paginator } from '../../components/Paginator/Paginator';
import { useModal } from '../../hooks/useModal';
import { BtnWithoutPlus } from '../../components/BtnWithoutPlus/BtnWithoutPlus.styled';
import { AddNewSupplier } from '../../components/AddNewSupplier/AddNewSupplier';

const AllSuppliersPage = () => {
  const [suppliers, setSuppliers] = useState(null);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isModalOpen, toggleModal } = useModal();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(null);

        const searchParams = new URLSearchParams({ page });
        if (filter) searchParams.set('name', filter.split('/')[0]);

        const { data } = await API.get(`/suppliers?${searchParams}`);
        setSuppliers(data);
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
    setSuppliers(null);
  };

  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const data = !error && suppliers?.paginatedResult?.length > 0;
  const noData =
    !isLoading && !error && suppliers?.paginatedResult?.length === 0;

  return (
    <WrapperPage>
      <Control>
        <Filter
          placeholder="Supplier Name"
          fieldName="Supplier Name"
          onFilterSubmit={onFilterSubmit}
          isLoading={isLoading}
        />
        <BtnWithoutPlus type="button" onClick={toggleModal}>
          Add a new supplier
        </BtnWithoutPlus>
      </Control>

      {data && (
        <>
          <TableWrapper>
            <AllSuppliers
              suppliers={suppliers.paginatedResult}
              setSuppliers={setSuppliers}
            />
          </TableWrapper>
          <Paginator totalCount={suppliers.totalCount} setPage={setPage} />
        </>
      )}
      {/* {loading && <Loader />} */}
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

      {isModalOpen && (
        <AddNewSupplier
          isOpen={isModalOpen}
          onClose={toggleModal}
          setSuppliers={setSuppliers}
        />
      )}
    </WrapperPage>
  );
};

export default AllSuppliersPage;
