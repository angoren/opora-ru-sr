import Page from '../../components/Page'
import React from 'react'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter();
  const { lang, page } = router.query;
  return (
    <Page lang={lang} uri={page}/>
  )
}
