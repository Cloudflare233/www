import react, { useState } from 'react'

import Head from 'next/head'

import NextLink from 'next/link'

import NextImage from 'next/image'

import { Page, Text ,Snippet ,Button,Link,Avatar,Card ,Spacer,Grid,User,Row,Textarea,useToasts,Toasts} from '@geist-ui/react'

import { CssBaseline, GeistProvider } from '@geist-ui/react'

import { Github , Mail , Edit} from '@geist-ui/react-icons'

import BLOG from '../blog.config.js'

import { getSortedPostsData} from '../lib/posts'

import Date from '../components/date'

const Theme = () => {
  const [themeType, setThemeType] = useState('light')
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
    </GeistProvider>
  )
}

const Comment = () => {
  const [value, setValue] = useState()
  const handler = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
  }
  return (
    <Textarea width="100%"
     value={value}
     onChange={handler}
     placeholder="Just like the old days." />
	 )
}

const Submit = () => {
  const [, setToast] = useToasts()
  const click = type => setToast({
    text: 'Error (0x233abc)',
    type,
  })
  return (
    
    <Button onClick={() => click('error')} type="success-light">Submit</Button>
   
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

export default function Dashboard({ allPostsData }) {
  return (
<Page>
<Grid.Container gap={2} justify="center">
<Head>
<title>Dashboard | {BLOG.title}</title>
</Head>
<Theme />
<Spacer y={0.5}/>
<Card shadow>
<NextLink href="../"><Link block icon color>← Back to "Home"</Link></NextLink>
<Spacer y={0.5}/>
<Page.Header>
		<User src="https://cdn.jsdelivr.net/gh/Cloudflare233/CDN/images/79688916.png" name="Andrew">
		A student from china. Interested in computers and airplanes.
		</User>
		</Page.Header>
<Spacer y={0.5}/>
<Text h3>Introduction</Text>
<Text>Hey, guys! Welcome to my personal dashboard . It looks like not very beautiful. But I will edit it until I'm busy enough. It based on geist-ui, nextjs and ♥.</Text>
<Spacer y={0.5}/>
<Text h3>Blog</Text>
        <div>
          {allPostsData.map(({ id, date, title }) => (
            <div key={id}>
			<Row><NextLink href={`/posts/${id}`}>
              <Link block>
                <Text h5>{title}</Text>
              </Link>
			  </NextLink>
             </Row>
			 <Row><Text small i>
			 <Date dateString={date} />
			 </Text></Row>
            </div>
          ))}
        </div>
		<Spacer y={0.5}/>
		<Text h3>Comment</Text>
		Leave a comment. (This is a static demo. If you want to do. Please go to <a href="https://github.com/Cloudflare233/www/issues">https://github.com/Cloudflare233/www/issues</a> instead.)
		<Spacer y={0.3} />
		<Comment />
		<Spacer y={0.3} />
		<Submit />	
</Card>
</Grid.Container>
</Page>
  )
}

