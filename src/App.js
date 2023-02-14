import React, {useState} from "react";
import './App.css';
import './'
import axios from 'axios';

function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const [widgetList, setwidgetList] = useState([]);

  const createWidget = (event) => {
    setwidgetList(
      widgetList.concat(
        <div key={setwidgetList.length}>
            <div className="widget">
                <div className="card l-bg-cherry">
                    <div className="card-statistic-3 p-4">
                        <div className="card-icon card-icon-large"></div>
                        <div className="">
                            <h5 className="card-title mb-0">New Widget</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    );
  };
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      }) 
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="form">
          <div className="container"> 
            <div className="search"> 
              <div className="row"> 
                <div className="col-md-9">
                  <div className="search-1"> 
                    <i className='bx bx-search-alt'></i> 
                    <input  value={location}
                            onChange={event => setLocation(event.target.value)}
                            onKeyPress={searchLocation} 
                            type="text" 
                            placeholder="Introduisez le nom de la ville ..." /> 
                  </div> 
                </div> 
                <div className="col-md-3">
                  <div>
                    <div className="search-2">
                      <i className='bx bxs-map' ></i>
                      <button>Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="text-center widgets">
            <div className="displayWidgets">
                  <div className="row">
                    <div className="col-md-3">
                        <div className="card l-bg-cherry">
                            <div className="card-statistic-3 p-4">
                                <div className="card-icon card-icon-large"></div>
                                <div className="title">
                                    <h6 className="card-title mb-0">Weather   </h6>
                                    <h4>{data.name} </h4>
                                    
                                </div>
                                <div className="weather">
                                    <h5 className="card-title mb-0"> {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">{widgetList}</div>

                    <div className="col-md-3">
                      <div className="card l-bg-cherry">
                          <div className="card-statistic-3 p-4">
                              <div className="card-icon card-icon-large"></div>
                              <div className="">
                                  <h5 className="card-title mb-0">
                                      <button type="button" class="btn" onClick={createWidget}>
                                          + Add widget 
                                      </button>
                                  </h5>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
            </div>
        </section>
      </div>
    </div>
  );

 
}

export default App;
