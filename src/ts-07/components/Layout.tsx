import styled from 'styled-components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar';

const Wrapper = styled.main`
  background-image: url('https://phonoteka.org/uploads/posts/2021-04/1618520974_21-phonoteka_org-p-kartinka-s-knigami-dlya-fona-21.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

const Layout = () => {
  return (
    <>
      <AppBar />

      <Wrapper>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Wrapper>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Layout;
