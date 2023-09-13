import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
padding: 10px;
display: flex;
flex-direction: column;
gap: 16px;
`;
export const StyledBtn = styled.button`
    background-color: #87b5f9;
    width:100px;
`;
export const StyledLable = styled.label`
    font-family: sans-serif;
    font-size: 14px;
`
export const StyledInput = styled.input`
    font-family: sans-serif;
    font-size: 14px;
`