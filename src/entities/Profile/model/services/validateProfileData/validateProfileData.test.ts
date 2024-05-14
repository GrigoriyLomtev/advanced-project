import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

const data = {
  age: 25,
  city: 'SPB',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  first: 'Gri',
  lastname: 'Sha',
  username: 'admin',
};

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });
  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });
  test('without first and last name and incorrect country', async () => {
    const result = validateProfileData({
      ...data, first: '', lastname: '', country: undefined,
    });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA, ValidateProfileErrors.INCORRECT_COUNTRY]);
  });
  test('without argument', async () => {
    const result = validateProfileData();

    expect(result).toEqual([ValidateProfileErrors.NO_DATA]);
  });
  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
});
