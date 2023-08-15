import { Navbar, NavbarBrand, NavbarCollapse } from '@/composables/bootstrap';
import Auth from '@/components/Auth';

function CustomNavbar() {
  return (
    <Navbar className="px-lg-5 px-md-2 px-sm-1 bg-white" fixed="top">
      <NavbarBrand href="/">JSPOtX</NavbarBrand>
      <NavbarCollapse className="justify-content-end align-items-center">
        <Auth />
      </NavbarCollapse>
    </Navbar>
  );
}

export default CustomNavbar;
