import React from 'react';
import { useParams } from 'react-router-dom';

function AboutUs() {
  const params = useParams();
  return <div>AboutUs {params.params}</div>;
}

export default AboutUs;
