import React from 'react'
import Layout from 'components/Layout/Layout'
import Content from 'components/EditTaskState'

const Page = () => (
  <Layout id="edit-task" loginRequired={true}>
    <Content />
  </Layout>
)

export default Page
export { Head } from 'components/Layout/Head'
