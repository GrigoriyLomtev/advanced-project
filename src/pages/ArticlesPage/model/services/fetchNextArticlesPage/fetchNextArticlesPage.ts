import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNumber,
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const page = getArticlesPageNumber(getState());
    const hasMore = getArticlesPageHasMore(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({
        page: page + 1,
      }));
    }
  },
);
