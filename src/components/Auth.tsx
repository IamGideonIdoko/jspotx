'use client';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '@/libs/firebase';
import appConfig from '@/config';
import { useAppAuthState } from '@/hooks/auth.hook';
import { NavbarText, Image, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '@/composables/bootstrap';
import defaultAvatar from '@/assets/images/default_avatar.png';
import { useRouter } from 'next/navigation';

function Auth() {
  const [user, loading, error] = useAppAuthState();
  const logoutUser = async () => {
    await firebase.auth().signOut();
  };
  const router = useRouter();
  if (loading) return <></>;
  if (error) return <p>Something went wrong</p>;
  if (user)
    return (
      <Dropdown>
        <DropdownToggle className="p-0 bg-transparent btn-outline-light">
          <Image src={user.photoURL ?? defaultAvatar.src} width={40} height={40} alt="Avatar" roundedCircle />
          <NavbarText className="ms-2">{user.displayName}</NavbarText>
        </DropdownToggle>

        <DropdownMenu className="soft-border">
          <DropdownItem eventKey="1" className="focus-ring-success" onClick={() => router.push('/bookmarks')}>
            Bookmarks
          </DropdownItem>
          <DropdownItem eventKey="1" className="focus-ring-success" onClick={logoutUser}>
            Log out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  return (
    <StyledFirebaseAuth
      uiConfig={appConfig.auth.ui([firebase.auth.GoogleAuthProvider.PROVIDER_ID])}
      firebaseAuth={firebase.auth()}
    />
  );
}

export default Auth;
