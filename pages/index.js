import react, { useState } from 'react'

import NextLink from 'next/link'

import { Page, Text ,Code ,Button,Link,Avatar } from '@geist-ui/react'

import { CssBaseline, GeistProvider } from '@geist-ui/react'

const Dark = () => {
  const [themeType, setThemeType] = useState('dark')
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
    </GeistProvider>
  )
}

export default function Home() {
  return (
<Page>
<center>
 <Page.Header>
    <Avatar src="https://cdn.jsdelivr.net/gh/Cloudflare233/CDN/images/79688916.png" size="large" />
        <Text h2>Andrew</Text>
      </Page.Header>
</center>
      <Text>
        Hello, I am using <Text b>Gesit UI</Text> <Dark />!
      </Text>
<Text>
<Code>print("Hello!")</Code>
</Text>
</Page>
  )
}
