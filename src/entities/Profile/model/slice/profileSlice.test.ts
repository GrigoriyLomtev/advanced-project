import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  age: 25,
  city: 'SPB',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  first: 'Gri',
  lastname: 'Sha',
  username: 'admin',
};

describe('profileSlice.test', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateErrors: [ValidateProfileErrors.INCORRECT_AGE],
      form: { ...data, lastname: 'qwe' },
      data,
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { first: 'qwe' },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ first: 'qwe123' }),
    )).toEqual({
      form: { first: 'qwe123' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: undefined,
      data,
      form: data,
      readonly: true,
    });
  });
});
