import React from 'react'
import Layout from 'components/Layout/Layout'
import Content from 'components/AssignTask'

const Page = () => (
  <Layout id="assign-task" loginRequired={true}>
    <Content />
  </Layout>
)

export default Page
export { Head } from 'components/Layout/Head'
