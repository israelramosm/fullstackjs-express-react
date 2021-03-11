/* eslint-disable operator-linebreak */
import axios from 'axios';
import { Column, Row } from 'carbon-components-react';
import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [testData, setTestData] = useState([]);

  const getTest = async () => {
    const { data } = await axios.get('/api/tests');
    setTestData(data);
  };

  useEffect(() => {
    getTest();
  }, []);

  return (
    <Row>
      <Column>
        Landing Page
        {testData &&
          testData.map((elem, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`elem-${index}`}>{elem.message}</div>
          ))}
      </Column>
    </Row>
  );
};

export default LandingPage;
