import styled from 'styled-components';

export const Section = styled.section`
  padding: 24px 20px;

  .logoWrapper {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 148px;
  }

  .loginDesc {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -0.03em;
  }

  .formTitle {
    position: relative;
    font-weight: 600;
    font-size: 28px;
    line-height: 1.21;
    margin-bottom: 40px;
  }

  .fillWord {
    color: #59b17a;
  }

  .pillImg {
    position: absolute;
    top: -60px;
    right: 20px;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 40px;
  }

  .inputForm {
    background-color: #fff;
    border: 1px solid rgba(29, 30, 33, 0.1);
    border-radius: 60px;
    width: 100%;
    padding: 13px 18px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(29, 30, 33, 0.4);
  }

  .btnSigin {
    border: none;
    border-radius: 60px;
    padding: 13px 147px;
    width: 100%;
    background-color: #59b17a;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: #fff;
  }
`;
