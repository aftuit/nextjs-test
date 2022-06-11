import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { getStates } from "../store/posts/actions";
import { SHRINE_ITEM_SAVE, STATE_ITEM_SAVE } from "../store/posts/types";
import Title from "../components/Title";
const Index = () => {
  const { states, isError, loading } = useSelector((state) => state.states);
  const dispatch = useDispatch();
  const router = useRouter();
  React.useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);
  
  const generateUrl = (text) => text?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  const saveState = (type, data) => {
    window.localStorage.setItem(`_item__${type}`, JSON.stringify(data));
    router.push(`/${generateUrl(data.name)}`);
  };


  if (isError) return <h1>Oops, something went wrong</h1>;
  return (
    <div className="container">
      <div className="links">
          <span>Home</span>
      </div>
        <Title title="Davlatlar"/>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul className="mt-3 flex-column nav">
          {states?.map((state) => (
            <li
              className="nav-item mt-3"
              key={state.id}
              onClick={() => saveState(STATE_ITEM_SAVE, state)}
            >
              {state.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Index;
