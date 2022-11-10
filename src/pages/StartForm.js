import { useNavigate } from 'react-router-dom';

import { useData } from '../DataContext';
import { Input } from '../components/Input';
import { Typography, Button } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'First name should not contain numbers')
    .required('First name is a required field'),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
});

export const StartForm = () => {
  const { setValues, data } = useData();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setValues(data);
    navigate('/list');
  };

  return (
    <>
      <Typography component="h2" variant="h5">
        Info User
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          type="text"
          name="firstName"
          control={control}
          label="First Name"
        />
        <Input
          type="text"
          name="lastName"
          control={control}
          label="Last Name"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Next
        </Button>
      </form>
    </>
  );
};
