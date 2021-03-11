import react, { useState } from 'react'

import NextLink fron 'next/link'

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
 <Page.Header>
    <Avatar url="https://cdnjsdelivr.net/gh/Cloudflare233/CDN/images/" />
        <Text h2>Andrew</Text>
      </Page.Header>
      <Text>
        Hello, I am using <Text b>Gesit UI</Text> <Dark />!
      </Text>
<Text>
<Code>print("Hello!")</Code>
</Text>
</Page>
  )
}
