import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidateProfileErrors } from '../../consts/editableProfileCardConsts';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
  >(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
      const { extra, rejectWithValue, getState } = thunkAPI;

      const formData = getProfileForm(getState());

      const errors = validateProfileData(formData);

      if (errors.length) {
        return rejectWithValue(errors);
      }

      try {
        const response = await extra.api.put<Profile>(
          `/profile/${formData?.id}`,
          formData,
        );

        if (!response.data) {
          throw new Error();
        }

        return response.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
      }
    },
  );
