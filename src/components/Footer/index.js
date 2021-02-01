import React from "react";
import { Container, Wrapper, Row, Column, Link, Title } from "./styles/footer";

export default function Footer({ ...restProps }) {
  return (
    <>
      <Container {...restProps}>{}</Container>
    </>
  );
}

Footer.Wrapper = function FooterWrapper({ ...restProps }) {
  return <Wrapper {...restProps}>{}</Wrapper>;
};

Footer.Row = function FooterRow({ ...restProps }) {
  return <Row {...restProps}>{}</Row>;
};

Footer.Column = function FooterColumn({ ...restProps }) {
  return <Column {...restProps}>{}</Column>;
};

Footer.Link = function FooterLink({ ...restProps }) {
  return <Link {...restProps}>{}</Link>;
};

Footer.Title = function FooterTitle({ ...restProps }) {
  return <Title {...restProps}>{}</Title>;
};
