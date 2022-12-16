import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white container z-10">
      <div className="flex justify-between md:text-lg phone:text-xs pt-8 fixed top-0 bg-white">
        <Link href={'/'} passHref>
          <a className="font-gotham_medium text-main-black text-uf-regular">テストタイトル</a>
        </Link>
        <div className="flex font-gotham_book text-base text-main-black justify-evenly w-[250px] phone:w-[200px]">
          <Link href={'/portfolio'} passHref>
            <a className="hover:text-sub-black" itemProp="url">
              portfolio一覧
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}