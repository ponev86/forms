import { useNavigate } from 'react-router-dom';

import { useData } from '../DataContext';
import { Input } from '../components/Input';

import { Typography, Button, Stack, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { object, array } from 'yup';

const schema = yup.object().shape({
  listName: yup.string().required('List name is a required field'),
  list: array().of(
    object().shape({
      label: yup.string().required('Label is a required field'),
    })
  ),
});

export const ListForm = () => {
  const { setValues, data } = useData();
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      listName: data.listName,
      list: data?.list,
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'list',
  });

  const onSubmit = (data) => {
    setValues(data);
    navigate('/results');
  };

  return (
    <>
      <Typography component="h2" variant="h5">
        List of User
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack direction="row" alignItems="center">
          <Input
            type="text"
            name="listName"
            control={control}
            label="List Name"
          />
          <IconButton onClick={() => append()} sx={{ ml: 1 }}>
            <ControlPointIcon />
          </IconButton>
        </Stack>

        {fields.length > 0 &&
          fields.map((item, index) => (
            <Stack direction="row" alignItems="center" key={item.id}>
              <Input
                name={`list.${index}.label`}
                control={control}
                label={`Label ${index + 1}`}
              />
              <IconButton onClick={() => remove(index)} sx={{ ml: 1 }}>
                <HighlightOffIcon />
              </IconButton>
            </Stack>
          ))}

        <Button type="submit" fullWidth variant="contained" color="primary">
          Next
        </Button>
      </form>
    </>
  );
};
