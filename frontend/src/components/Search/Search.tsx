import { ChangeEvent, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { searchActions } from '../../store/slices/searchSlice';

const Search = () => {
  const dispatch = useAppDispatch();
  const { search, loading, error, items } = useAppSelector((state) => state.search);

  const searchHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(searchActions.changeSearchField(e.target.value));
    },
    [dispatch]
  );

  const hasQuery = useMemo(() => {
    return search.trim() !== '';
  }, [search]);

  return (
    <div className='Search'>
      <input type='text' className='Search-Input' value={search} onChange={searchHandler} />
      {!hasQuery && <div>What do you want to search?</div>}
      {hasQuery && loading && <div className='Search-Info'>Search Something...</div>}
      {error ? (
        <div className='Search-Error'>Have some Error</div>
      ) : (
        items.map((item, idx) => <li key={idx}>{item.name}</li>)
      )}
    </div>
  );
};

export default Search;
