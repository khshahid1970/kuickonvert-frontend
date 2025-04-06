import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Kuickonvert</h1>
      <Link to="/pdf-tools">Go to PDF Tools</Link>
    </div>
  );
}

export default Home;