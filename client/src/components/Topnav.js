import React, { useContext } from 'react';
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { AuthContext } from '../context/authContext';
import styles from './topnav.module.css'
import CloseButton from 'react-bootstrap/CloseButton';

export default function Navbar2() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  console.log('isLoggedIn:', isLoggedIn)
  return (
    <Navbar expand='xl' className={`${styles.navbarCustom} mb-3`}>
  <Container fluid>
    <Navbar.Brand href="/" className={styles.navLinkCustomTitle}>SafeMall</Navbar.Brand>
    <Navbar.Toggle className={styles.Toggle} aria-controls={`offcanvasNavbar-expand-xl`} />
    <Navbar.Offcanvas
      id={`offcanvasNavbar-expand-sm`}
      aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
      placement="end"
      className={styles.inbody}
    >
      <Offcanvas.Header closeButton className={styles.offcanvasHeaderCustom}>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`} className={styles.navLinkCustomTitle}>
          SafeMall
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.offcanvasBodyCustom}>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/" className={styles.navLinkCustom}>쇼핑몰 검색</Nav.Link>
          <hr className="divider" />
          <Nav.Link href="/board/suggest" className={styles.navLinkCustom}>건의사항</Nav.Link>
          <Nav.Link href="/board/report" className={styles.navLinkCustom}>제보</Nav.Link>
        </Nav>
        <Nav className={styles.btndiv}>
          {isLoggedIn ? (
            <>
              <Nav.Link href="/auth/mypage"><button className={styles.buttonCustom}>마이페이지</button></Nav.Link>
              <button className={styles.buttonCustom} onClick={logout}>로그아웃</button>
            </>
          ) : (
            <>
              <Nav.Link href="/auth/login/1"><button className={styles.buttonCustom}>로그인</button></Nav.Link>
              <Nav.Link href="/auth/login/0"><button className={styles.buttonCustom}>회원가입</button></Nav.Link>
            </>
          )}
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  );
}