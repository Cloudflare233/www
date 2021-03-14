import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import NextLink from 'next/link'
import Date from '../../components/date'
import { Page, Text ,Snippet ,Button,Link,Avatar,Card ,Spacer,Grid} from '@geist-ui/react'
import BLOG from '../../blog.config.js'

export default function Posts({ postData }) {
  return (
  <Page>
  <Grid.Container gap={2} justify="center">
      <Head>
<title>{postData.title} | {BLOG.user} 's Blog</title>
      </Head>
	  <Card shadow>
	  <NextLink href="../dashboard"><Link block icon color>← Back to "Dashboard"</Link></NextLink>
      <article>
        <h2>{postData.title}</h2>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
