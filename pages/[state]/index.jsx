import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { SUCCESS_REGION, ERROR_REGION, START_REGION, STATE_ITEM_SAVE, REGION_ITEM_SAVE } from '../../store/posts/types'
import axios from 'axios';
import Link from 'next/link';
import Title from '../../components/Title';
const State = () => {
  const { regions, regionsError, regionsLoading } = useSelector(state => state.states);
  const dispatch = useDispatch();
  const [state] = React.useState(JSON.parse((typeof window !== "undefined" && window.localStorage.getItem(`_item__${STATE_ITEM_SAVE}`))) || false);
  const router = useRouter();

  function getRegions(state) {
    dispatch({ type: START_REGION });
    axios.get(`https://testapinextjs.pythonanywhere.com/country/region/${state.id}/country-region/`)
      .then(res => {
        dispatch({ type: SUCCESS_REGION, payload: res.data });
      })
      .catch(() => dispatch({ type: ERROR_REGION }))
  }

  React.useEffect(() => {
    getRegions(state)
  }, [])

  const generateUrl = (text) => text?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  function saveRegion(type, data) {
    window.localStorage.setItem(`_item__${type}`, JSON.stringify(data));
    router.push(`/${generateUrl(state.name)}/${generateUrl(data.name)}`)
  }

  if (regionsError)
    return <h3>Ooops, something went wrong!</h3>
  return (
    <div className='container'>
      <div className="links">
          <Link href="/"><a>Home</a></Link> /
          <span>{state.name}</span>
      </div>

      <Title title={"Viloyatlar"} />
      {
        !state ?
          <p>lodaing...</p> :
          <>
            <h1>{state.name}</h1>
            <p>{state.descriptions}</p>

            <ul className='nav flex-column'>
              {
                regionsLoading ?
                  <p>loading...</p> :
                  regions.map(region => <li key={region.id} onClick={() => saveRegion(REGION_ITEM_SAVE, region)}> {region.name} </li>)
              }
            </ul>
          </>
      }

    </div>
  )
}

export default State