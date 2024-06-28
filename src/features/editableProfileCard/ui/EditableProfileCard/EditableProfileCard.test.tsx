import { screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { Profile } from 'entities/Profile';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  age: 123,
  city: 'Spb',
  country: Country.BRAZIL,
  currency: Currency.EUR,
  first: 'admin',
  lastname: 'admin',
  id: '1',
  username: 'admin123',
};

const options = {
  initialState: {
    profile: {
      data: profile,
      form: profile,
      readonly: true,
    },
    user: {
      authData: {
        id: '1',
        username: 'admin123',
      },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

describe('features/EditableProfileCard', () => {
  let mockPutReq: jest.SpyInstance;

  beforeEach(() => {
    mockPutReq = jest.spyOn($api, 'put').mockResolvedValue({ data: { success: true } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('readonly mode should toggle', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
  });

  test('Cancel should reset state', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

    expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin');
  });

  test('an error should appear', async () => {
    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
  });

  test('if there are no validation errors, then a PUT request should be sent to the server', async () => {
    // const mockPutReq = jest.spyOn($api, 'put');

    ComponentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    // await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user');
    await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
    await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'NewName');

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

    // expect(mockPutReq).toHaveBeenCalled();
    expect(mockPutReq).toHaveBeenCalledWith('/profile/1', {
      age: 123,
      city: 'Spb',
      country: Country.BRAZIL,
      currency: Currency.EUR,
      first: 'NewName',
      lastname: 'admin',
      id: '1',
      username: 'admin123',
    });
  });
});
