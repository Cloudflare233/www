import { Page, Text ,Card } from '@geist-ui/react'

export default function Home() {
  return (
 <Page dotBackdrop size="mini">
<Card shadow>
      <Page.Header>
        <Text h2>React Application with Geist UI</Text>
      </Page.Header>
      <Text>
        Hello, I am using <Text b>Gesit UI</Text> !
      </Text>
</Card>
    </Page>
  )
}
