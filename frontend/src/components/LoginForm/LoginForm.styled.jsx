import styled from 'styled-components';
import DecorIMG from '../../assets/img/login/decor-elements.webp';

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
    right: 30px;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 14px;
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

  .rightSide {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;

    .logoWrapper {
      margin-bottom: 204px;
    }

    .formTitle {
      font-size: 54px;
      line-height: 1.11;
      max-width: 634px;
      margin-bottom: 50px;
    }

    .pillImg {
      position: absolute;
      top: -105px;
      right: 40px;
    }

    .inputContainer {
      display: flex;
      flex-direction: column;
      gap: 14px;
      max-width: 323px;
      margin-bottom: 40px;
    }

    .btnSigin {
      max-width: 323px;
      padding: 13px 141px;
    }
  }

  @media screen and (min-width: 1440px) {
    .smbForm {
      display: flex;
      flex-direction: row;
      gap: 150px;
    }

    .rightSide {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const DecorImg = styled.div`
  position: fixed;
  right: -206px;
  bottom: -199px;
  z-index: -1;

  width: 464px;
  height: 345px;

  background-image: url(${DecorIMG});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    right: -198px;
    bottom: -82px;
  }

  @media screen and (min-width: 1440px) {
    right: -185px;
    bottom: -88px;
  }
`;
