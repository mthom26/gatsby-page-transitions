import React from 'react';

import Layout from '../components/Layout';

const Page2 = () => {
  return (
    <Layout id="page-0">
      <div className="aboutPage">
        <div className="about">
          <div className="content">
            <p>Praesent diam neque, varius a bibendum sit amet, fermentum et libero. Ut quis rutrum est, at cursus justo. In metus diam, luctus non felis a, congue ultricies risus. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vitae euismod justo, at malesuada turpis. Suspendisse sagittis eleifend nibh quis accumsan. Etiam non ante varius, porta enim sit amet.</p>
            <p>Donec nec ultricies tellus. Aenean sit amet aliquet orci. Ut a nisl velit. Nunc id elit ac purus hendrerit facilisis. Mauris vel facilisis turpis. Sed sapien arcu, congue quis efficitur commodo, accumsan vitae ligula. Vivamus lobortis vel dui at mattis. Duis tincidunt lacinia metus, nec dictum.</p>
          </div>
          <div className="title">
            <h1>About</h1>
            <hr />
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default Page2;