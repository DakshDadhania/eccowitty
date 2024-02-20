import { useState, useEffect, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const arrayPaths = ['/'];  

  const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if(!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }


  // on click outside
  useOnClickOutside(navRef, closeMenu);

  return(
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <a>
            <Image
              src="/images/ecowitty_logo.png"
              width={200}
              height={100}
            />
          </a>
        </Link>
        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <Link href="/ourstory">
          <a href="#">Our Story</a>
          </Link>
          <Link href="/aboutus">
          <a href="#">About</a>
          </Link>
          <Link href="/why">
          <a href="#">Why Ecowitty</a>
          </Link>
          <Link href="/writing">
          <a href="#">Use</a>
          </Link>
        </nav>
        

        <div className="site-header__actions">
          <Link href="/contact">
            <button className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>Get in touch</button>
          </Link>
        </div>
      </div>
    </header>
  )
};


export default Header;
