import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import NextLink from 'next/link'
import Date from '../../components/date'
import { Page, Text ,Snippet ,Button,Link,Avatar,Card ,Spacer,Grid} from '@geist-ui/react'
import BLOG from '../../blog.config.js'

export default function Post({ postData }) {
  return (
  <Page>
      <Head>
<title>{postData.title} | {BLOG.user} 's Blog</title>
      </Head>
	  <Grid.Container gap={2} justify="center">
	  <Card shadow>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
	  <NextLink href="../blog"><Link block icon color>Back to home ←</Link></NextLink>
	  </Card>
	  </Grid.Container>
</Page>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
