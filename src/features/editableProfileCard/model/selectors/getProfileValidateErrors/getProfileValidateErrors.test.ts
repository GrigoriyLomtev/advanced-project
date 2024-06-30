import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileErrors } from '../../consts/editableProfileCardConsts';

describe('getProfileValidateErrors.test', () => {
  test('should return errors arr', () => {
    const errors = [ValidateProfileErrors.INCORRECT_COUNTRY, ValidateProfileErrors.INCORRECT_AGE];
    const state: DeepPartial<StateSchema> = {
      profile: { validateErrors: errors },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
