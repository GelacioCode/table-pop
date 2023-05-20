import React from 'react';
import Table from './Table';

const App: React.FC = () => {
  return (

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <div style={{ width: '800px', borderRadius: '20px', backgroundColor: '#CCCCCC', padding: '50px' }}>
          <h1>Mock Data Table</h1>
          <Table />
        </div>
      </div>
    
  );
};

export default App;