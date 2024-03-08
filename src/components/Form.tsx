import { Formik, Form as FormFormik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FormData } from '../../interfaces/FormData';
import { useShoppingCart } from '../context/ShoppingCardContext';

const validationSchema = Yup.object<FormData>({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string(), // Address is not required
});

const Form = () => {
  const { cartItems } = useShoppingCart();
  const initialValues: FormData = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };

  const onSubmit = async (values: FormData, helpers: any) => {
    try {
      const userResponse = await fetch(
        'https://med-backend-rapb.onrender.com/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      const userData = await userResponse.json();

      const orderResponse = await fetch(
        'https://med-backend-rapb.onrender.com/orders',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId: userData._id, items: cartItems }),
        }
      );
    } catch (error) {
      console.error('Error creating user or order:', error);
    } finally {
      localStorage.clear();
      helpers.resetForm();
    }
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
