import React from 'react';
import { SHRINE_ITEM_SAVE, REGION_ITEM_SAVE, STATE_ITEM_SAVE } from '../../../../store/posts/types';
import Link from 'next/link';
const Shrine = () => {

  const [shrine] = React.useState((typeof window !== "undefined" && JSON.parse(window.localStorage.getItem(`_item__${SHRINE_ITEM_SAVE}`))) || '')
  const [region] = React.useState(JSON.parse((typeof window !== "undefined" && window.localStorage.getItem(`_item__${REGION_ITEM_SAVE}`))) || false);
  const [state] = React.useState(JSON.parse((typeof window !== "undefined" && window.localStorage.getItem(`_item__${STATE_ITEM_SAVE}`))) || false);

  const generateUrl = (text) => text?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  return (
    <div className='container'>

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