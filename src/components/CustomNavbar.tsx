import { Navbar, NavbarCollapse, NavbarBrand } from '@/composables/bootstrap';
import Auth from '@/components/Auth';
import Link from 'next/link';

function CustomNavbar() {
  return (
    <Navbar className="px-lg-5 px-md-3 px-2 bg-white" fixed="top">
      <Link href="/">
        <NavbarBrand>JSpotX</NavbarBrand>
      </Link>
      <NavbarCollapse className="justify-content-end align-items-center">
        <Auth />
      </NavbarCollapse>
    </Navbar>
  );
}

export default CustomNavbar;
