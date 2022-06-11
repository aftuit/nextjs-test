import React from 'react';
import { SHRINE_ITEM_SAVE, REGION_ITEM_SAVE, STATE_ITEM_SAVE } from '../../../../store/posts/types';
import Link from 'next/link';
import Head from 'next/head';
const Shrine = () => {

  const [shrine] = React.useState((typeof window !== "undefined" && JSON.parse(window.localStorage.getItem(`_item__${SHRINE_ITEM_SAVE}`))) || '')
  const [region] = React.useState(JSON.parse((typeof window !== "undefined" && window.localStorage.getItem(`_item__${REGION_ITEM_SAVE}`))) || false);
  const [state] = React.useState(JSON.parse((typeof window !== "undefined" && window.localStorage.getItem(`_item__${STATE_ITEM_SAVE}`))) || false);

  const generateUrl = (text) => text?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  return (
    <div className='container'>
      <Head>
        <meta name="description" content="O'zbekistondagi qolaversa butun dunyodagi qadamjolar, ziyoratgohlar, oromgohlar, sayilgohlar haqida ma'lumot yetkazib beruvchi sayt" />
        <meta name="keywords" content="Yangiliklar,хабарлар,ziyoratgoh,Dunyo manzaralari,фото ва видео материаллар,qadamjolar,sayilgohlar " />
        <meta property="og:title" content="Eng qiziqarli yangiliklar" />
        <meta property="og:description" content="Eng diqqatga sazovor joylar haqida ma'lumotni faqat bizda topasiz" />
      </Head>
      <div className="links">
        <Link href="/"><a>Home</a></Link> /
        <Link href={`/${generateUrl(state.name)}`}><a>{state.name}</a></Link> /
        <Link href={`/${generateUrl(state.name)}/${generateUrl(region.name)}`}><a>{region.name}</a></Link> /
        <span>{shrine.name}</span>
      </div>
      <h1>{shrine.name}</h1>
      <p>{shrine.descriptions}</p>
    </div>
  )
}

export default Shrine