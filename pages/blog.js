import react, { useState } from 'react'

import Head from 'next/head'

import NextLink from 'next/link'

import NextImage from 'next/image'

import { Page, Text ,Snippet ,Button,Link,Avatar,Card ,Spacer,Grid,User} from '@geist-ui/react'

import { CssBaseline, GeistProvider } from '@geist-ui/react'

import { Github , Mail , Edit} from '@geist-ui/react-icons'

import BLOG from '../blog.config.js'

import { getSortedPostsData } from '../lib/posts'

const Theme = () => {
  const [themeType, setThemeType] = useState('light')
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
    </GeistProvider>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
<Page>
<Grid.Container gap={2} justify="center">
<Head>
<title>Blog | {BLOG.title}</title>
</Head>
<Theme />
<Spacer y={0.5}/>
<Card shadow>
<Page.Header>
<center>
<Avatar src="https://cdn.jsdelivr.net/gh/Cloudflare233/CDN/images/79688916.png" size="large" />
        <Text h2 b>{BLOG.user} 's Blog</Text>
		</center>
		</Page.Header>
<Spacer y={0.5}/>
<Text h3>Latest</Text>
<Text>Hey, guys! Welcome to my personal blog . It looks like not very beautiful. But I will edit it until I'm busy enough. It based on geist-ui, nextjs and ♥</Text>
<Spacer y={0.5}/>
<Text h3>All Post</Text>
        <div>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
			<NextLink href={`/posts/${id}`}>
              <Link block>
                <a>{title}</a>
              </Link>
			  </NextLink>
              <br />
            </li>
          ))}
        </div>
   <NextLink href="../"><Link block icon color>Back to home ←</Link></NextLink>
</Card>
</Grid.Container>
</Page>
  )
}

