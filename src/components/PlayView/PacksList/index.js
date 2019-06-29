import React, { useEffect, useState } from 'react';
import Pack from '../Pack';
import PacksMock from '../../../mocks/packs';

const PacksList = () => {
  const [packs, setPacks] = useState({});

  useEffect(() => {
    setPacks(PacksMock);
  }, []);

  return (
    <div id="packs-list-container">
      {Object.values(packs).map(pack => <Pack key={pack.id} {...pack} />)}
    </div>
  );
};

export default PacksList;
