import styled from 'styled-components';

export const Header = styled.header`
  a {
    text-decoration: none;
  }
  a:hover,
  a :focus {
    color: white;
  }
  .menu-left a {
    color: white;
    display: inline-block;
    position: relative;
    padding-bottom: 0px;
    transition: color 0.35s ease;
  }
  .menu-left a:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    transition: width 0s ease, background 0.35s ease;
  }
  .menu-left a:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background: white;
    transition: width 0.35s ease;
  }
  .menu-left a:hover:before {
    width: 100%;
    background: white;
    transition: width 0.35s ease;
  }
  .menu-left a:hover:after {
    width: 100%;
    background: transparent;
    transition: all 0s ease;
  }

  /*position: fixed;*/
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
  background: transparent;
  z-index: 6;
  will-change: transform;
  transition: background 0.3s, -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
  transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1), background 0.3s;
  transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1), background 0.3s,
    -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
  transform: translateY(0);
  -webkit-transform: translateY(0);
  /**/
  padding-top: 1%;

  .logo img {
    max-width: 100px;
  }

  nav .logo {
    float: left;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    margin-right: 1rem;
    line-height: inherit;
  }
  nav .logo:after {
    content: '';
    display: table;
    clear: both;
  }
  nav ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
  nav ul li {
    float: none;
    margin-left: 0;
  }
  @media (min-width: 768px) {
    nav ul li {
      float: left;
      margin-left: 1rem;
    }
  }
  nav ul li a {
    display: block;
  }
  @media (min-width: 576px) {
    nav ul li a {
      display: block;
      padding: 0.425rem 0rem;
    }
  }

  @media (max-width: 768px) {
    ul {
      clear: both;
    }
    ul li {
      padding: 0.5em 0;
    }
  }
  .hide-nav {
    transform: translateY(-120% !important);
    -webkit-transform: translateY(-120%) !important;
  }

  ul.menu-left {
    display: block;
    max-height: 0;
    overflow: hidden;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    z-index: 10;
  }
  @media (min-width: 768px) {
    ul.menu-left {
      display: block !important;
      float: right;
      max-height: none;
    }
  }
  ul.menu-left:before {
    content: '';
    display: table;
    clear: both;
  }
  ul.menu-left.collapse {
    max-height: 15em !important;
  }

  .nav-toggle {
    display: block;
    border-radius: 5px;
    background-color: transparent;
    float: right;
    height: 38px;
    width: 38px;
    cursor: pointer;
    padding: 8px 8px;
  }
  .nav-toggle.open span:first-child {
    transform: rotate(45deg) translate(4.4px, 4.4px);
  }
  .nav-toggle.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }
  .nav-toggle.open span:last-child {
    transform: rotate(-45deg) translate(4.4px, -4.4px);
  }
  @media (min-width: 768px) {
    .nav-toggle {
      display: none;
    }
  }
  .nav-toggle span {
    position: relative;
    display: block;
    height: 2px;
    width: 100%;
    margin-top: 4px;
    background-color: #000;
    transition: all 0.25s;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
      margin-left: auto;
      margin-right: auto;
    }
    .container:after {
      content: ' ';
      display: block;
      clear: both;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
    }
    .container:after {
      content: ' ';
      display: block;
      clear: both;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
      margin-left: auto;
      margin-right: auto;
    }
    .container:after {
      content: ' ';
      display: block;
      clear: both;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1170px;
      margin-left: auto;
      margin-right: auto;
    }
    .container:after {
      content: ' ';
      display: block;
      clear: both;
    }
  }
`;
