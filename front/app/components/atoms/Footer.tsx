import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="body-font bg-white container">
      <div className="container inline-block text-center mt-8 md:text-uf-regular phone:text-xs">
        <Link href={'/'} passHref>
          <a className="font-gotham_medium text-main-black text-uf-regular">GK capsule</a>
        </Link>
        <div className="flex font-gotham_book text-base text-main-black justify-evenly mb-16 mt-4">
          <Link href={'/about'} passHref>
            <a className="hover:text-sub-black" itemProp="url">
              About
            </a>
          </Link>
          <Link href={'/works'} passHref>
            <a className="hover:text-sub-black" itemProp="url">
              Works
            </a>
          </Link>
          <Link href={'/contact'} passHref>
            <a className="hover:text-sub-black" itemProp="url">
              Contact
            </a>
          </Link>
        </div>
        <div className="text-sub-black text-uf-regular" itemProp="name">
          ©️2021 K .HIDENORI
        </div>
      </div>
    </footer>
  );
}
