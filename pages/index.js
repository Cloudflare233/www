import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'


export default function Index({ posts }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <Layout>
	<Head>
	<title>CF233'S BLOG</title>
	</Head>
	<p>
        使用<button className="zi-btn abort auto normal cursor" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >
          {mounted && (
            <div>
              {theme === 'dark' ? (
                <div>白天</div>
              ) : (
                <div>黑暗</div>
              )}
            </div>
          )}
		  </button> 模式来阅读下面的文章:
      </p>
      <div id="posts">
        {posts.map((post) => (
          <div>
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href={`/posts/[slug]`}
            >
              <h4><a className="huge">{post.data.title}</a></h4>
            </Link>
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
