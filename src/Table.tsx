import React, { useState } from 'react';
import './Table.css'; // Import a CSS file for styling

interface IData {
  id: number;
  school: string;
  description: string;
  numberofStudents: number;
}

const data: IData[] = [
  { id: 1, school: 'School A', description: 'Lorem ipsum dolor sit amet', numberofStudents: 100 },
  { id: 2, school: 'School B', description: 'Consectetur adipiscing elit', numberofStudents: 200 },
  { id: 3, school: 'School C', description: 'Sed do eiusmod tempor incididunt', numberofStudents: 150 },
  { id: 4, school: 'School D', description: 'Ut labore et dolore magna aliqua', numberofStudents: 300 },
  { id: 5, school: 'School E', description: 'Ut enim ad minim veniam', numberofStudents: 250 },
];

const Table: React.FC = () => {
  const [selectedData, setSelectedData] = useState<IData | null>(null);

  const handleClick = (item: IData) => {
    setSelectedData(item);
  };

  const closeModal = () => {
    setSelectedData(null);
  };

  return (
    <div>
      <table className="rounded-table"> {/* Add the "rounded-table" class */}
        <thead>
          <tr style={{ background: ' #6A7B8D'}}>
            <th>ID</th>
            <th>School</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td onClick={() => handleClick(item)}>{item.id}</td>
              <td
                className="tooltip"
                onClick={() => handleClick(item)}
                data-tooltip={`ID: ${item.id}\n
                               School Name: ${item.school}\n
                               Students Data: ${item.numberofStudents}`} // Use \n for line breaks

              >
                {item.school}
              </td>
              <td onClick={() => handleClick(item)}>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedData && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h4>Detailed Information</h4>
            <h5>School: <span style={{fontWeight: 'bolder'}}> {selectedData.school}</span></h5>
            <h5>Description: <span style={{fontWeight: 'bolder'}}>{selectedData.description}</span> </h5>
            <h5>Number of Student: <span style={{fontWeight: 'bolder'}}> {selectedData.numberofStudents}</span> </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
