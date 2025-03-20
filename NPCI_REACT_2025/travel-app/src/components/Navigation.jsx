// import React from 'react'
// import Link from '../ui/Link'

// const Navigation = ({ linkLists }) => {
//     const createLink = (item,idx,key) => {
//         return <Link key={idx} linkRef={item.linkRef} linkText={item.linkText} />
//     }
//     return (
//         <>
//             <div>Navigation</div>
//             {linkLists.map(createLink)}
//         </>
//   )
// }

// export default Navigation

import React from 'react';
import Link from '../ui/Link';
import { NavLink } from 'react-router-dom';
const Navigation = ({ linkList }) => {
  const createLink = (value, idx) => {
    return (
      <NavLink key={idx} to={value.linkRef}>{value.linkText}</NavLink>
    );
  };
  return <div>
    {linkList.map(createLink)}
    {/* <NavLink to={'/payments'}>Payments</NavLink> */}
  </div>;
};

export default Navigation;
