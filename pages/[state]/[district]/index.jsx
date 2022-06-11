import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/dist/client/router'
import { ERROR_SHRINE, REGION_ITEM_SAVE, START_SHRINE, SUCCESS_SHRINE, SHRINE_ITEM_SAVE, STATE_ITEM_SAVE } from '../../../store/posts/types'
import axios from 'axios';
import Link from 'next/link';
import Title from "../../../components/Title";
import Head from 'next/head';

const District = () => {

  const router = useRouter();
  const { shrines, shrinesError, shrinesLoading } = useSelector(state => state.states);
  const dispatch = useDispatch();
  const [region] = React.useState(JSON.parse((typeof window !== "undefined" && window.localStorage.getItem(`_item__${REGION_ITEM_SAVE}`))) || false);
  const [state] = React.useState(JSON.parse((typeof window !== "undefined" && window.localStorage.getItem(`_item__${STATE_ITEM_SAVE}`))) || false);

  React.useEffect(() => {
    dispatch({ type: START_SHRINE });
    axios.get(`https://testapinextjs.pythonanywhere.com/country/region/shrine/${region.id}/shrines/`)
      .then(res => {
        dispatch({ type: SUCCESS_SHRINE, payload: res.data });
        console.log('shrines', shrines)
      })
      .catch(() => dispatch({ type: ERROR_SHRINE }));
  }, [])

  const generateUrl = (text) => text?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  function getShrine(type, data) {
    window.localStorage.setItem(`_item__${SHRINE_ITEM_SAVE}`, JSON.stringify(data));
    router.push(`/${generateUrl(state.name)}/${generateUrl(region.name)}/${generateUrl(data.name)}`)
  }

  if (shrinesError)
    return <h3>Ooops, something went wrong!</h3>
  return (
    <div className='container'>
      <Head>
        <meta name="description" content="O'zbekistondagi qolaversa butun dunyodagi qadamjolar, ziyoratgohlar, oromgohlar, sayilgohlar haqida ma'lumot yetkazib beruvchi sayt" />
        <meta name="keywords" content="Yangiliklar,хабарлар,ziyoratgoh,Dunyo manzaralari,фото ва видео материаллар,qadamjolar,sayilgohlar " />
        <meta property="og:title" content="Eng qiziqarli yangiliklar" />
        <meta property="og:description" content="Eng diqqatga sazovor joylar haqida ma'lumotni faqat bizda topasiz" />
        <title>{region.name}</title>
      </Head>
      <div className="links">
        <Link href="/"><a>Home</a></Link> /
        <Link href={`/${generateUrl(state.name)}`}><a>{state.name}</a></Link> /
        <span>{region.name}</span>
      </div>

      <Title title="Diqqatga sazovor joylar" />
      {
        !region ?
          <p>loading...</p> :
          <>
            <h1>{region.name}</h1>
            <p>{region.descriptions}</p>
          </>
      }
      {
        shrinesLoading ?
          <p>loading...</p> :
          <ul className='nav flex-column'>
            {
              shrines.map(shrine => <li key={shrine.id} onClick={() => getShrine(SHRINE_ITEM_SAVE, shrine)}>{shrine.name}</li>)
            }
          </ul>
      }

    </div>
  )
}

export default District