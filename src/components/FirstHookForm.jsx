import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const initialValues = {
  title: 'title',
  duration: 'duration',
};

const schema = yup.object({
  title: yup.string().email().required(),
  duration: yup.number().required().positive().integer(),
});

function FirstHookForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, isValid, isSubmitting },
    formState,
  } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    console.log('formState', formState);
    console.log('errors', errors);
  });

  const submitHandler = (values) => {
    console.log(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {/* <p>{JSON.stringify(errors)}</p> */}
      <input type="text" {...register('title', { required: true })} />
      {errors.title && <span>{errors.title.message}</span>}
      <input type="text" {...register('duration', { required: true })} />
      {errors.duration && <span>{errors.duration.message}</span>}
      <button type="reset" onClick={reset}>
        Reset
      </button>
      <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
        Submit
      </button>
    </form>
  );
}

export default FirstHookForm;
