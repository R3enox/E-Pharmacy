import styled from 'styled-components';

import { Input } from '../Message/Message.styled';

const BorderColorValidationResult = (p) => {
  if (p['data-is-correct']) {
    return p.theme.colors.green();
  }

  if (p['data-has-error']) {
    return p.theme.colors.red();
  }

  return p.theme.colors.border;
};

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(5)};

  @media screen and (min-width: 768px) {
    gap: ${(p) => p.theme.spacing(10)};
  }
`;

export const TitleForm = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.16667;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(10)};
`;

export const WrapperFormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing(3.5)};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 0;
  }
`;

export const InputForm = styled(Input)`
  width: 100%;
  border: 1px solid ${BorderColorValidationResult};

  @media screen and (min-width: 768px) {
    width: 220px;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  gap: ${(p) => p.theme.spacing(2)};
`;

export const BtnAction = styled.button`
  width: 146px;
  padding: ${(p) => p.theme.spacing(3)} ${(p) => p.theme.spacing(4)};

  font-weight: 500;
  font-size: 12px;
  line-height: 1.5;

  border-radius: ${(p) => p.theme.radii.btn};

  @media screen and (min-width: 768px) {
    width: 133px;

    font-size: 14px;
    line-height: 1.28571;
  }
`;

export const BtnSubmit = styled(BtnAction)`
  color: ${(p) => p.theme.colors.primaryBg};

  background-color: ${(p) => p.theme.colors.green()};
  border: 1px solid ${(p) => p.theme.colors.green()};

  transition: ${(p) => p.theme.transition('background-color')},
    ${(p) => p.theme.transition('border-color')};

  &:hover,
  &:focus {
    background-color: ${(p) => p.theme.colors.hover};
    border-color: ${(p) => p.theme.colors.hover};
  }
`;

export const BtnCancel = styled(BtnAction)`
  color: ${(p) => p.theme.colors.secondaryText};

  background-color: ${(p) => p.theme.colors.border};
  border: 1px solid ${(p) => p.theme.colors.border};

  transition: ${(p) => p.theme.transition('color')},
    ${(p) => p.theme.transition('background-color')},
    ${(p) => p.theme.transition('border-color')};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.hover};

    background-color: transparent;
    border-color: ${(p) => p.theme.colors.hover};
  }
`;
