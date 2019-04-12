import React from 'react';

import Layout from '../components/Layout';

const Page3 = () => {
  return (
    <Layout id="page-3">
      <div className="container tc">
        <h1>Tour Dates</h1>
        <hr />
        <div className="tourDates">
          <span>2019/05/23 - Ut nunc risus, placerat</span>
          <span>2019/06/03 - Nunc vel scelerisque nisl</span>
          <span>2019/06/17 - Praesent espant nibh, efficitur</span>
          <span>2019/07/07 - Aenean ut interdum sem</span>
          <span>2019/08/02 - Quisque feugiat espant neque</span>
          <span>2019/08/14 - Fusce condimentum eleifend maximus</span>
          <span>2019/08/29 - Suspendisse sit amet iacuspans</span>
          <span>2019/09/12 - Etiam dapibus, lectus sit</span>
        </div>
      </div>
    </Layout>
  )
};

export default Page3;