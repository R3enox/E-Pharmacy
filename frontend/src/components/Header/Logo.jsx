import * as img from '../../assets/img/logoPage/index';

export const Logo = () => {
  return (
    <picture>
      <source
        type="image/webp"
        media="(min-width: 768px)"
        srcSet={`${img.logoTabletWeb} 1x, ${img.logoTabletWeb2x} 2x`}
      />
      <source
        type="image/png"
        media="(min-width: 768px)"
        srcSet={`${img.logoTabletPng} 1x, ${img.logoTabletPng2x} 2x`}
      />
      <source
        type="image/webp"
        media="(max-width: 767px)"
        srcSet={`${img.logoMobWeb} 1x, ${img.logoMobWeb2x} 2x`}
      />
      <source
        type="image/png"
        media="(max-width: 767px)"
        srcSet={`${img.logoMobPng} 1x, ${img.logoMobPng2x} 2x`}
      />
      <img className="LogoImg" srcSet={img.logoTabletPng} alt="E-Pharmacy" />
    </picture>
  );
};
