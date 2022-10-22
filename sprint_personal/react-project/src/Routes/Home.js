import React, { useEffect, useState } from "react";
import "./Home.module.css";
import axios from 'axios';

function Home(){
  const [data, setData] = useState('');
  useEffect(()=>{
    axios.get('/api/test')
      .then((res)=>{
        setData(res.data);
      });
  })
    return (
      <div className="home">
        <header id="header">
          <img id="title" src="img/title.png" alt="" />
        </header>
        <nav className="nav">
          <img id="banner" src="img/banner.png" alt="" />
        </nav>
        <article className="menu">
          <section>
            <table>
              <tr>
                <td>
                  <a href="/drinks/test">
                    <img id="test" src="img/recommendation.png" alt="" />
                  </a>
                </td>
                <td>
                  <a href="/stores/test">
                    <img id="stores" src="img/stores.png" alt="" />
                  </a>
                </td>
              </tr>
            </table>
          </section>
        </article>
        <article className="list">
          <header id="listheader">
            <img id="drink" src="img/list.png" alt="" />
          </header>
          <div id="driklist">
            <img src="img/drinklist.png" alt="" />
          </div>
          <div>
            {data}
          </div>
        </article>
      </div>
    );
}
export default Home;
