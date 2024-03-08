import { Formik, Form as FormFormik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormData } from '../../interfaces/FormData';

const validationSchema = Yup.object<FormData>({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string(), // Address is not required
});

const Form = () => {
  const initialValues: FormData = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };

  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <Formik<FormData>
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <FormFormik>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              id="name"
              className="form-control"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <Field
              type="phone"
              name="phone"
              id="phone"
              className="form-control"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="address">Address</label>
            <Field
              type="text"
              name="address"
              id="address"
              className="form-control"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </FormFormik>
      )}
    </Formik>
  );
};

export default Form;
