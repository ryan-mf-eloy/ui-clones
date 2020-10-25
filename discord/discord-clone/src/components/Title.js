import styled from 'styled-components';

const H1 = styled.h1({
  background: props => props.background,
  color: props => props.color,
  fontWeight: props => props.fontWeight,
  fontSize: '54px',
  lineHeight: '67.2px'
});

const H2 = styled.h2({
  background: props => props.background,
  color: props => props.color,
  fontWeight: props => props.fontWeight,
  lineHeight: '57.6px',
  fontSize: '46px'
});

const H3 = styled.h3({
  background: props => props.background,
  color: props => props.color,
  fontWeight: props => props.fontWeight,
  fontSize: '28px'
});

const H4 = styled.h4({
  background: props => props.background,
  color: props => props.color,
  fontWeight: props => props.fontWeight,
  lineHeight: '38.4px',
  fontSize: '30px'
});

const H5 = styled.h5({
  background: props => props.background,
  color: props => props.color,
  fontWeight: props => props.fontWeight,
  fontSize: '20px'
});

const H6 = styled.h6({
  background: props => props.background,
  color: props => props.color,
  fontWeight: props => props.fontWeight,
  fontSize: '17px'
});

export {H1, H2, H3, H4, H5, H6};