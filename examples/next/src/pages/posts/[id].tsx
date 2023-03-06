import Menu from '~/components/Menu'

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  }
}

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

const Page = () => (
  <>
    <p>post</p>

    <Menu />
  </>
)

export default Page
