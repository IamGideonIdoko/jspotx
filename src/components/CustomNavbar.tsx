import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarText,
  Image,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from '@/composables/bootstrap';
import defaultAvatar from '@/assets/images/default_avatar.png';
import Auth from '@/components/Auth';

function CustomNavbar() {
  return (
    <Navbar className="px-lg-5 px-md-2 px-sm-1 bg-white" fixed="top">
      <NavbarBrand href="/">JSPOtX</NavbarBrand>
      <NavbarCollapse className="justify-content-end align-items-center">
        <Auth />
        <Dropdown>
          <DropdownToggle className="p-0 bg-transparent btn-outline-light">
            <Image src={defaultAvatar.src} width={40} height={40} alt="Avatar" rounded />
            <NavbarText className="ms-2">Gideon Idoko</NavbarText>
          </DropdownToggle>

          <DropdownMenu className="soft-border">
            <DropdownItem eventKey="1" className="focus-ring-success">
              Log out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarCollapse>
    </Navbar>
  );
}

export default CustomNavbar;
