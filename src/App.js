import React from 'react';
import { data } from './data';
import './App.css'

class example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      active: null, //for selected info
    };
  }
  render() {
   //delete

    

    // Edit

    const onEdit = (value) => {
      this.setState({
        active: value,
      });
    };

    // onChange function

    const onChange = (e) => {
      const { value, name } = e.target;
      this.setState({
        active: {
          ...this.state.active,
          [name]: value,
        },
      });
    };

    //onsave function

    const onSave = () => {
      let res = this.state.data.map((value) => value.id === this.state.active.id ? this.state.active : value)
      this.setState({
        data: res,
        active: null
      })
    };

    // search

    const onSearch = (e) => {
      const newData = this.state.data.filter((value) =>
        value.name.includes(e.target.value)
      );
      this.setState({ data: newData });
    };



    return (
      <div>
        <select name='' id=''>
          <option value="">All</option>
          <option value=''>Id</option>
          <option value=''>Name</option>
          <option value=''>Status</option>
        </select>
        <input
          onChange={onSearch}
          className='inp'
          type='text'
          placeholder='Search...'
        />
        <button>Search</button>
        <table border='1' width='50%'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(({ id, name, status }) => (
              <tr key={id}>
                <td>{this.state.active === id ? <input value={id} /> : id}</td>

                <td>
                  {this.state.active?.id === id ? (
                    <input
                      onChange={onChange}
                      value={this.state.active.name}
                      name='name'
                    />
                  ) : (
                    name
                  )}
                </td>

                <td>
                  {this.state.active?.id === id ? (
                    <input
                      onChange={onChange}
                      value={this.state.active.status}
                      name='status'
                    />
                  ) : (
                    status
                  )}
                </td>

                <td>
                  <button>delete</button>
                  <button
                    onClick={() =>
                      this.state.active
                        ? onSave()
                        : onEdit({ id, name, status })
                    }
                  >
                    {this.state?.active?.id === id ? 'save' : 'edit'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default example

// Algoritm

// 1 - table
// 2 - onClick => id
// 3 - id === data.value
// 4 - data.value => update 
// 5- updated => data.value




