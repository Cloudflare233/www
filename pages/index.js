import react, { useState } from 'react'

import { Page, Text ,Card ,Button,Link,Avatar } from '@geist-ui/react'

import { CssBaseline, GeistProvider } from '@geist-ui/react'

const Dark = () => {
  const [themeType, setThemeType] = useState('light')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Link href="#" onClick={switchThemes}>Dark Mode</Link>
    </GeistProvider>
  )
}

export default function Home() {
  return (
<Card shadow>
      <Page.Header>

        <Text h2>Andrew</Text>
      </Page.Header>
      <Text>
        Hello, I am using <Text b>Gesit UI</Text>.See the <Dark />!
      </Text>
</Card>
  )
}
