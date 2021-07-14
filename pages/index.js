import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import Head from 'next/head'



export default function Index({ posts }) {
  return (
    <Layout>
	<Head>
	<title>CF233'S BLOG</title>
	</Head>
	<p>
      </p>
      <div >
        {posts.map((post) => (
          <div>
            <a
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
            >
              <h4>{post.data.title}</h4>
            </a>
			<p className="description">{post.data.description}</p>
         </div>
        ))}
      </div>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
