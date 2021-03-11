import react, { useState } from 'react'

import { Page, Text ,Card ,Button,Link,Avatar } from '@geist-ui/react'

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
<Card type="dark" shadow>
      <Page.Header>

        <Text h2>Andrew</Text>
      </Page.Header>
      <Text>
        Hello, I am using <Text b>Gesit UI</Text> <Dark />!
      </Text>
</Card>
</Page>
  )
}
