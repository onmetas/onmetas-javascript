import { useEffect, type FC } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

// @ts-ignore
import * as cachedData from '../cache.json' assert { type: 'json' }

const OnMetas: FC = () => {
  const { pathname, route } = useRouter()

  console.log('from lib!', pathname, route, cachedData)

  useEffect(() => {
    // trigger api log
  }, [])

  if (false) {
    // TODO placeholder metas
  }

  if (cachedData.metas[pathname]) {
    return (
      <Head>
        <title>OnMetas - {cachedData.metas[pathname]}</title>
      </Head>
    )
  }

  return null
}

export default OnMetas
