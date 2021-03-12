import react, { useState } from 'react'

import NextLink from 'next/link'

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
<Theme />
<Spacer y={5}/>
 <Grid.Container gap={2} justify="center">
<Card shadow width="550px">
<center>
 <Page.Header>
    <Avatar src="https://cdn.jsdelivr.net/gh/Cloudflare233/CDN/images/79688916.png" size="large" />
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
	  You should follow me on <a href="https://www.github.com/Cloudflare233">Github</a>, or send a E-mail to my  <a href="mailto:xsxg123456@gmail.com">E-mail address</a>.
	  </Text>
</Card>
</Grid.Container>
</Page>
  )
}
