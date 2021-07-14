import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'

export default function Layout({ children }) {
const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <>
      <div className="wrapper">
	  <br />
	  <br />
	  <nav className="nav">
	  <h1><Link href="/">CF233'S BLOG</Link></h1>
	  </nav>
	  <h5 className="auto">Written and designed by Andrew.</h5>
	  {children}
	  <hr />
	  <footer>© 2021 CF233. <button className="auto abort" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >
          {mounted && (
            <>
              {theme === 'dark' ? (
                <>切换到黑暗</>
              ) : (
                <>切换到明亮</>
              )}
            </>
          )}
		  </button> </footer>
	  </div>
      <style jsx>{`
        .wrapper {
          max-width: 36rem;
          margin: 0 auto;
          padding: 1.5rem;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        :root {
          --site-color: royalblue;
          --divider-color: rgba(0, 0, 0, 0.4);
        }


        a {
          color: inherit;
          text-decoration-color: var(--divider-color);
          text-decoration-thickness: 2px;
        }

        a:hover {
          color: var(--site-color);
          text-decoration-color: currentcolor;
        }

        h1,
        p {
          margin-bottom: 1.5rem;
        }

      `}</style>
    </>
  )
}
