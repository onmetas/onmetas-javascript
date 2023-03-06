import type { FC } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

// @ts-ignore
import pulledMetas from './cache.json'

const OnMetas: FC = () => {
  const { pathname, route } = useRouter()

  console.log('from lib!', pathname, route, pulledMetas)

  if (false) {
    // TODO placeholder metas
  }

  if (pulledMetas[pathname]) {
    return (
      <Head>
        <title>OnMetas - {pulledMetas[pathname]}</title>
      </Head>
    )
  }

  return null
}

export default OnMetas
