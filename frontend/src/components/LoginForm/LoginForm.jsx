import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInThunk } from '../../redux/user/userOperations';
import { Section } from './LoginForm.styled';
import { toastSuccess } from '../../helpers/toast';
import * as img from '../../assets/img/login/index';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    dispatch(logInThunk(data));
    toastSuccess('Login successful!');
    navigate('/dashboard');
  };

  return (
    <Section>
      <div className="logoWrapper">
        <picture>
          <source
            type="image/webp"
            media="(min-width: 768px)"
            srcSet={`${img.loginTabletWeb} 1x, ${img.loginTabletWeb2x} 2x`}
          />
          <source
            type="image/png"
            media="(min-width: 768px)"
            srcSet={`${img.loginTabletPng} 1x, ${img.loginTabletPng2x} 2x`}
          />
          <source
            type="image/webp"
            media="(max-width: 767px)"
            srcSet={`${img.loginMobWeb} 1x, ${img.loginMobWeb2x} 2x`}
          />
          <source
            type="image/png"
            media="(max-width: 767px)"
            srcSet={`${img.loginMobPng} 1x, ${img.loginMobPng2x} 2x`}
          />
          <img
            className="loginLogoImg"
            srcSet={img.loginTabletPng}
            alt="E-Pharmacy"
          />
        </picture>
        <p className="loginDesc">E-Pharmacy</p>
      </div>
      <form className="smbForm" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1 className="formTitle">
          Your medication,{' '}
          <picture>
            <source
              type="image/webp"
              media="(min-width: 768px)"
              srcSet={`${img.pillTabletWeb} 1x, ${img.pillTabletWeb2x} 2x`}
            />
            <source
              type="image/png"
              media="(min-width: 768px)"
              srcSet={`${img.pillTabletPng} 1x, ${img.pillTabletPng2x} 2x`}
            />
            <source
              type="image/webp"
              media="(max-width: 767px)"
              srcSet={`${img.pillMobWeb} 1x, ${img.pillMobWeb2x} 2x`}
            />
            <source
              type="image/png"
              media="(max-width: 767px)"
              srcSet={`${img.pillMobPng} 1x, ${img.pillMobPng2x} 2x`}
            />
            <img className="pillImg" srcSet={img.pillTabletPng} alt="Pill" />
          </picture>
          delivered Say goodbye to all{' '}
          <span className="fillWord">your healthcare </span>worries with us
        </h1>
        <div className="inputContainer">
          <div className="inputWrapper">
            <input
              className={`inputForm ${errors?.email && 'error'} ${
                dirtyFields.email && !errors.email && 'correct'
              }`}
              type="email"
              placeholder="Email address"
              autoComplete="off"
              {...register('email', {
                required: 'Enter a valid Email',
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: 'Enter a valid Email',
                },
              })}
            />
          </div>
          <div className="inputWrapper">
            <input
              className={`inputForm ${errors?.password && 'error'} ${
                dirtyFields.password && !errors.password && 'correct'
              }`}
              type={'password'}
              placeholder="Password"
              autoComplete="off"
              {...register('password', {
                required: 'Enter a valid Password',
                minLength: {
                  value: 7,
                  message: 'Enter a valid Password*',
                },
                pattern: {
                  value: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/i',
                  message: 'Enter a valid Password*',
                },
              })}
            />
          </div>
        </div>
        <button className="btnSigin" type="submit">
          Log in
        </button>
      </form>
    </Section>
  );
};
