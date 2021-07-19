import './App.css';
import Banner from './Banner';
import ENGLISH from "./languages/english.json"
import FRENCH from "./languages/french.json"
import { useState, useEffect } from 'react';

function Help({data,setLanguage}) {
  return (
    <div className="body">
      <Banner data={data} setLanguage={setLanguage}/>
      {data &&
      <div className="main">
        <form className="info">
          <h2>{(data.language==="english")?ENGLISH.HELP:FRENCH.HELP}</h2>
          <h3>Lorem Ipsum </h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis turpis vel ipsum gravida placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, eros non hendrerit convallis, metus nibh lacinia urna, vitae mollis quam nulla ullamcorper enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tortor purus, efficitur in elementum sed, varius eu massa. Pellentesque et vestibulum ipsum. Donec in metus leo. Vestibulum vel nisi sapien. Curabitur egestas porta leo in interdum. Vivamus ultrices molestie eros quis placerat. Sed et risus vel purus tristique pretium a eu sem.
          <h3> dolor sit amet</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis turpis vel ipsum gravida placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, eros non hendrerit convallis, metus nibh lacinia urna, vitae mollis quam nulla ullamcorper enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tortor purus, efficitur in elementum sed, varius eu massa. Pellentesque et vestibulum ipsum. Donec in metus leo. Vestibulum vel nisi sapien. Curabitur egestas porta leo in interdum. Vivamus ultrices molestie eros quis placerat. Sed et risus vel purus tristique pretium a eu sem.
          <h3>consectetur adipiscing</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis turpis vel ipsum gravida placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, eros non hendrerit convallis, metus nibh lacinia urna, vitae mollis quam nulla ullamcorper enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tortor purus, efficitur in elementum sed, varius eu massa. Pellentesque et vestibulum ipsum. Donec in metus leo. Vestibulum vel nisi sapien. Curabitur egestas porta leo in interdum. Vivamus ultrices molestie eros quis placerat. Sed et risus vel purus tristique pretium a eu sem.
          <h3>Proin venenatis</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis turpis vel ipsum gravida placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, eros non hendrerit convallis, metus nibh lacinia urna, vitae mollis quam nulla ullamcorper enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tortor purus, efficitur in elementum sed, varius eu massa. Pellentesque et vestibulum ipsum. Donec in metus leo. Vestibulum vel nisi sapien. Curabitur egestas porta leo in interdum. Vivamus ultrices molestie eros quis placerat. Sed et risus vel purus tristique pretium a eu sem.
          <h3>turpis vel ipsum</h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis turpis vel ipsum gravida placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus, eros non hendrerit convallis, metus nibh lacinia urna, vitae mollis quam nulla ullamcorper enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tortor purus, efficitur in elementum sed, varius eu massa. Pellentesque et vestibulum ipsum. Donec in metus leo. Vestibulum vel nisi sapien. Curabitur egestas porta leo in interdum. Vivamus ultrices molestie eros quis placerat. Sed et risus vel purus tristique pretium a eu sem.
       
        </form>
      </div>}
    </div>
  );
}
export default Help;
