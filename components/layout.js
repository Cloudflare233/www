import Head from 'next/head'

import BLOG from '../blog.config.js'

export default function Layout({ children }) {
  return <div>
  <Head>
		<title>{BLOG.title}</title>
		<meta name="description" content={BLOG.description} />
		</Head>
  {children}
  </div>
}