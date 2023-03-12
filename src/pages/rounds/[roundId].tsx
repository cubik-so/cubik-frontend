import { useRouter } from 'next/router';
import React from 'react';

const RoundDetail = () => {
  const { query } = useRouter();
  //console.log(query.roundId);
  return <div>[roundId]</div>;
};

export default RoundDetail;
