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
const Navigation = ({ linkList }) => {
  const createLink = (value, idx) => {
    return (
      <Link key={idx} linkref={value.linkRef} linkText={value.linkText}></Link>
    );
  };
  return <div>{linkList.map(createLink)}</div>;
};

export default Navigation;
