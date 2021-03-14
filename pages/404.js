import react, { useState } from 'react'

import NextLink from 'next/link'

import Head from 'next/head'

import NextImage from 'next/image'

import { Page, Text ,Snippet ,Button,Link,Avatar,Card ,Spacer,Grid,User} from '@geist-ui/react'

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

export default function Error() {
  return (
<Page>
<Head>
<title>404 | {BLOG.title}</title>
<meta name="description" content={BLOG.description} />
</Head>
<Theme />
<Spacer y={0.5}/>
<Grid.Container justify="center">
<Card shadow width="600px">
 <Page.Header>
    <User src="https://cdn.jsdelivr.net/gh/Cloudflare233/www/public/avatar.png" name="Andrew" alt="avatar">
        This is a error. But don't worry. We will make it!
		</User>
      </Page.Header>
      <Text>404 not found. The request URL was not found on this server.</Text>
	  <Button auto type="warning-light" size="mini"><NextLink href="/"><Link>Bring me back</Link></NextLink></Button>
</Card>
</Grid.Container>
</Page>
  )
}