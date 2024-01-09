import { useState, useEffect, useContext, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faUserPlus, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../context';
import axios from 'axios';
import { toast } from 'react-toastify';

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '8px 20px',
  color: 'black',
  textDecoration: 'none',
  cursor: 'pointer',
};

const activeButtonStyle = {
  ...buttonStyle,
  color: 'blue',
  borderBottom: '2px solid blue',
};

const TopNav = () => {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState(null);
  const { state, dispatch } = useContext(Context);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setActiveButton(router.pathname);
  }, [router.pathname]);

  const logout = async () => {
    dispatch({ type: 'LOGOUT' });
    window.localStorage.removeItem('user');
    try {
      const { data } = await axios.get('/api/logout');
      toast(data.message);
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        hideDropdown();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link href="/">
          <p style={activeButton === '/' ? activeButtonStyle : buttonStyle}>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
            App
          </p>
        </Link>

        {state.user && state.user.role&&state.user.role.includes("Instructor")?(<Link href="/instructor/course/create">
              <p style={activeButton === '/instructor/course/create' ? activeButtonStyle : buttonStyle}>
                <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} />
                CREATE COURSE
              </p>
            </Link>):(
              <Link href="/user/become-instructor">
              <p style={activeButton === '/user/become-instructor' ? activeButtonStyle : buttonStyle}>
                <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} />
                Become Instructor
              </p>
            </Link>
            )}

        {!state.user && (
          <>
            <Link href="/login">
              <p style={activeButton === '/login' ? activeButtonStyle : buttonStyle}>
                <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '5px' }} />
                Login
              </p>
            </Link>

            <Link href="/register">
              <p style={activeButton === '/register' ? activeButtonStyle : buttonStyle}>
                <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '5px' }} />
                Register
              </p>
            </Link>
          </>
        )}
      </div>

      {state.user && (
        <div style={{ position: 'relative' }}>
          <p
            style={{ ...buttonStyle, cursor: 'pointer', marginRight: '5px' }}
            onClick={toggleDropdown}
          >
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
            <span>{state.user.name}</span>
          </p>
          {showDropdown && (
            <div
              ref={dropdownRef}
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: '#ffffff',
                border: '1px solid #ccc',
                boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                borderRadius: '4px',
                zIndex: 1,
              }}
            >
              <Link href="/user">
                <p
                  style={{
                    ...buttonStyle,
                    padding: '8px 20px',
                    cursor: 'pointer',
                    margin: '0',
                  }}
                  onClick={hideDropdown}
                >
                  <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
                  Dashboard
                </p>
              </Link>
              <p
                style={{
                  ...buttonStyle,
                  padding: '8px 20px',
                  cursor: 'pointer',
                  margin: '0',
                }}
                onClick={() => {
                  logout();
                  hideDropdown();
                }}
              >
                <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '5px' }} />
                Logout
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopNav;
