import { style } from '../../style/style';

const minTablet = '@media only screen and (min-width: 768px)';

export const selectStyled = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: '100%',
    padding: `${style.spacing(3)} ${style.spacing(4.25)}`,
    borderRadius: style.radii.field,
    border: `1px solid ${style.colors.border}`,
    cursor: 'pointer',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    transition: style.transition('border-color'),
    '&:hover': {
      borderColor: style.colors.border,
    },
    '& .css-tj5bde-Svg': {
      transform: state.menuIsOpen && 'rotate(180deg)',
    },
    [minTablet]: {
      width: 220,
    },
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
    color: style.colors.primaryText,
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: style.colors.secondaryText,
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: 'inherit',
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    height: 16,
    width: 16,
    color: style.colors.primaryText,
    '&:hover': {
      color: style.colors.primaryText,
    },
    '& .css-tj5bde-Svg': {
      width: '100%',
      height: '100%',
      transition: style.transition('transform'),
    },
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    height: 140,
    marginTop: style.spacing(1),
    marginBottom: 0,
    paddingTop: style.spacing(3.25),
    paddingRight: style.spacing(2),
    paddingBottom: style.spacing(3.25),
    zIndex: 10,
    backgroundColor: style.colors.green(),
    borderRadius: 15,
    boxShadow: 'none',
    border: 'none',
    [minTablet]: {
      marginTop: style.spacing(2),
    },
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 12,
      background: 'rgba(255, 255, 255, 0.4)',
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    paddingTop: style.spacing(0.75),
    paddingBottom: style.spacing(0.75),
    paddingLeft: style.spacing(4.25),
    paddingRight: style.spacing(3.5),
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: '-0.02em',
    color: [
      state.isSelected ? style.colors.pageBg : 'rgba(255, 255, 255, 0.5)',
    ],
    cursor: 'pointer',
    backgroundColor: 'transparent',
    transition: style.transition('color'),
    '&:hover': {
      color: style.colors.primaryBg,
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
    [minTablet]: {
      fontSize: 14,
      lineHeight: 1.28571,
    },
  }),
};
