import react, { useState } from 'react'

import NextLink from 'next/link'

import Head from 'next/head'

import NextImage from 'next/image'

import { Page, Text ,Snippet ,Button,Link,Avatar,Card ,Spacer,Grid} from '@geist-ui/react'

import { CssBaseline, GeistProvider } from '@geist-ui/react'

import { Github , Mail , Edit} from '@geist-ui/react-icons'

import BLOG from '../blog.config.js'

const Theme = () => {
  const [themeType, setThemeType] = useState('light')
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
    </GeistProvider>
  )
}

export default function Home() {
  return (
<Page>
<Head>
<title>{BLOG.title}</title>
<meta name="description" connect={BLOG.description} />
</Head>
<Theme />
<Spacer y={0.5}/>
<Grid.Container gap={2} justify="center">
<Card shadow width="600px">
<center>
 <Page.Header>
    <Avatar src="https://cdn.jsdelivr.net/gh/Cloudflare233/CDN/images/79688916.png" size="large" alt="avatar" />
        <Text h2>{BLOG.user}</Text>
      </Page.Header>
</center>
      <Text>
	  {BLOG.description} 
      </Text>
	  <Text>
	  {BLOG.other}
	  </Text>
	  <Text>
	  Check out my <Text b><NextLink href="/dashboard"><Link block icon color>Dashboard</Link></NextLink></Text> and you should follow me on <Link href="https://www.github.com/Cloudflare233" block icon color>Github</Link>, or send a E-mail to my  <Link href="mailto:xsxg123456@gmail.com" block icon color>E-mail address</Link>.
	  </Text>
</Card>
</Grid.Container>
</Page>
  )
}
