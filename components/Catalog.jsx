import React from 'react'
// import { useRouter } from 'next/router'
import Layout from './Layout'
import Link from 'next/link'

const TagList = ({tags}) => {
  return (
    <ul>
    {
      tags.map(function(tag, id) {
        return (
          <li key={id}>
            <Link href={tag.link}><a>#{tag.name}</a></Link>
          </li>
        )
      })
    }
  </ul>
  )
}

export default function Catalog(props) {
  const {lang, payload} = props
  // const router = useRouter()
  // console.log('Catalog router:', router.query)
  // console.log('Catalog props: ', lang, payload)
  return (
    <Layout lang={lang} title={payload.title}>
      

      <div className="oporaPageHead w-full"><h1>Каталог компаний</h1></div>

      <div className="flex flex-wrap w-full">
      <div className="w-1/4">
        <TagList tags={payload.tags}/>
      </div>
      <div className="w-3/4">
        <ul>
        {
          payload.links.map(function(post, id) {
            return (
              <li key={id}>
                <Link href={post.url}>
                  <a>
                    <div className="oporaWhiteBlock">
                      <img src={post.newsimage} />
                      <div>{post.title}</div>
                      <div>{post.description}</div>
                    </div>
                  </a>
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
      </div>

      
    </Layout>
  )
}
