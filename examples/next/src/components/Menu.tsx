import Link from 'next/link'

const Menu = () => (
  <>
    <Link href="/">/</Link>
    <br />
    <Link href="/a">/a</Link>
    <br />
    <Link href="/b">/b</Link>
    <br />
    <Link href="/nested/a">/nested/a</Link>
    <br />
    <Link href="/nested/b">/nested/b</Link>
    <br />
    <Link href="/post/1">/post/1</Link>
    <br />
    <Link href="/post/2">/post/2</Link>
  </>
)

export default Menu
