import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { Layout } from 'antd'

import '../src/index.css'

import HeaderElement from '../src/components/header/header'
import FooterElement from '../src/components/footer/footer'
const { Footer, Content } = Layout

const GoogleTagManager = () => {
  if (process.env.GTM_ID) {
    return (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.GTM_ID}');`
          }}
        />
      </>
    )
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}`
      }}
    />
  )
}

export default class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimal-ui,maximum-scale=1,user-scalable=no"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="💞 Socialify your project. 🌐 Share with the world!"
          />
          <meta property="og:image" content="/assets/socialify.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="640" />
          <link rel="apple-touch-icon" href="/assets/logo192.png" />
          <link rel="manifest" href="/manifest.json" />
          <title>GitHub Socialify</title>
          {GoogleTagManager()}
        </Head>
        <HeaderElement />
        <Content>
          <Component {...pageProps} />
        </Content>
        <Footer className="footer">
          <FooterElement />
        </Footer>
      </>
    )
  }
}
