import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

export const Input = (props) => {
  const { name, control, defaultValue, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          onChange={onChange}
          value={value}
          error={!!error}
          helperText={error ? error.message : null}
          fullWidth
          margin="normal"
          variant="outlined"
          {...rest}
        />
      )}
    />
  );
};
