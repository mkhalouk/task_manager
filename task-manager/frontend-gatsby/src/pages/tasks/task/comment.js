import React from 'react'
import Layout from 'components/Layout/Layout'
import Content from 'components/Comment'

const Page = () => (
  <Layout id="comment-task" loginRequired={true}>
    <Content />
  </Layout>
)

export default Page
export { Head } from 'components/Layout/Head'
