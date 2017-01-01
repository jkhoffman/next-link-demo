import React from 'react'
import Head from 'next/head'

import AppNavigation from '../components/AppNavigation'

export default Page => class DefaultPage extends React.Component {
  render () {
    return (
      <div className="app">
        <Head>
          <title>Link example</title>
          <link key='0' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' rel='stylesheet'/>
        </Head>
        <AppNavigation />
        <Page {...this.props} />
      </div>
    )
  }
}
