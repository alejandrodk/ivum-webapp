import styled from 'styled-components';

export const Header = styled.header`
margin-top: 1%;
.logo img {
  max-width: 100px;
  height: auto;
}
nav {
  justify-content: space-between;
  min-height: 50px;
  align-items: center;
}
.logo {
  align-items: center;
}
nav ul {
  margin: 0;
  width: 50%;
  justify-content: right;
}
nav ul li {
  list-style: none;
  margin: 0 3%;
}
nav ul li a {
  color: white;
}
`