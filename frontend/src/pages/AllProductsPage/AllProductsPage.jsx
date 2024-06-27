import { useEffect, useState } from 'react';

import API from '../../services/axios';
import { useModal } from '../../hooks/useModal.js';

import {
  WrapperPage,
  Control,
  WrapperPlaceholder,
} from '../../components/Page/Page.styled';
import { Filter } from '../../components/Filter/Filter';
import { BtnPlus } from '../../components/BtnPlus/BtnPlus.jsx';
import { TableWrapper } from '../../components/Table/Table.styled';
import { AllProducts } from '../../components/AllProducts/AllProducts';
import { AddNewProduct } from '../../components/AddNewProduct/AddNewProduct.jsx';
import { Placeholder } from '../../components/Placeholder/Placeholder';
import { Paginator } from '../../components/Paginator/Paginator';

const AllProductsPage = () => {
  const [products, setProducts] = useState(null);
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

        const { data } = await API.get(`/products?${searchParams}`);
        setProducts(data);
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
    setProducts(null);
  };
  const loading = !error && isLoading;
  const hasError = !isLoading && error;
  const data = !error && products?.paginatedResult?.length > 0;
  const noData =
    !isLoading && !error && products?.paginatedResult?.length === 0;
  return (
    <WrapperPage>
      <Control>
        <Filter
          placeholder="Product Name"
          fieldName="Product Name"
          onFilterSubmit={onFilterSubmit}
          isLoading={isLoading}
        />
        <BtnPlus onClick={toggleModal}>Add a new product</BtnPlus>
      </Control>

      {data && (
        <>
          <TableWrapper>
            <AllProducts
              products={products.paginatedResult}
              categories={products.categories}
              suppliers={products.suppliers}
              setProducts={setProducts}
            />
          </TableWrapper>
          <Paginator totalCount={products.totalCount} setPage={setPage} />
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

      {isModalOpen && (
        <AddNewProduct
          isOpen={isModalOpen}
          onClose={toggleModal}
          categories={products.categories}
          suppliers={products.suppliers}
          setProducts={setProducts}
        />
      )}
    </WrapperPage>
  );
};

export default AllProductsPage;
