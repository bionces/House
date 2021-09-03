import css from "./forSale.module.css";
import { useEffect, useState } from "react";
import { Block1 } from "./block1/Block1";
import { Block2 } from "./block2/Block2";
import { Block3 } from "./block3/Block3";
import { Block4 } from "./block4/Block4";
import { Block5 } from "./block5/Block5";
import { Footer } from "./footer/Footer";
import { NavLink, Link } from "react-router-dom";

export const ForSale = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://60f1203338ecdf0017b0fa4e.mockapi.io/teamHouse")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const [value, setValue] = useState('')


  const filtered = data.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className={css.forsale__relative}>
      <Block1 value={value}
        setValue={setValue}
      />
      <div className='container'>
        <h1 className={css.all_blocks_h1}>Featured Projects</h1>
      </div>
      <div className={`${css.block2} container`}>
        {filtered.map((item) => (
          <Block2 key={item.id} {...item} />
        ))}

      
      </div>
     
      <Block3 />
      <Block4 />
      <Block5 />
      <Footer />

    </div>
  );
};
