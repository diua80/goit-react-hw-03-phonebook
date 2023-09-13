import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledBtn,
  StyledLable,
  StyledInput,
} from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  abonent: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  tel: Yup.string()
    .matches(/^\+?[0-9\s]*$/, 'Invalid phone number format')
    .required('Required'),
});

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        abonent: '',
        tel: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
  addContact(values.abonent, values.tel);
  resetForm();
}}
    >
      {({ handleSubmit, handleChange, values }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledLable>
            Name
            <StyledInput
              type="text"
              name="abonent"
              placeholder="Abonent's name..."
              onChange={handleChange}
              value={values.abonent}
            />            
          </StyledLable>
          <StyledLable>
            Phone
            <StyledInput
              type="text"
              name="tel"
              placeholder="Abonent's number..."
              onChange={handleChange}
              value={values.tel}
            />
          </StyledLable>
          <ErrorMessage name="tel" component="div" className="error" />
          <ErrorMessage name="abonent" component="div" className="error" />
          <StyledBtn type="submit">Add contact</StyledBtn>
        </StyledForm>
      )}
    </Formik>
  );
};
