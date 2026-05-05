import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
function Patient() {
  const [data, setData] = useState({
    tickedId: "123-abc-tes",
    name: "Jamal",
    age: "40",
    treatment: "Malaria",
    status: "Active",
    date: "12-03-26",
    bill: "#1,000,000",
  });
  const navig = useNavigate();

  function redirect() {
    navig("/homepge");
  }
  return (
    <>
      <div className="container-homePage">
        <div className="sidepanel-container">
          <div></div>
          <div className="side-panel">
            <div className="side-panel-topGroup">
              <div>
                <i
                  className="material-symbols-rounded"
                  onClick={() => redirect()}
                >
                  qr_code_scanner
                </i>
              </div>
              <div>
                <i className="material-symbols-rounded">dashboard</i>
              </div>
              <div>
                <i className="material-symbols-rounded">payments</i>
              </div>
              <div>
                <i className="material-symbols-rounded">group</i>
              </div>
            </div>
            <div className="side-panel-bottomGroup">
              <div>
                <i className="material-symbols-rounded">Settings</i>
              </div>
              <div>
                <i className="material-symbols-rounded">Logout</i>
              </div>
            </div>
          </div>
        </div>
        <div className="whole-panel-patients">
          <div className="ticketcontainer">
            <h1 className="ticket-header">Patients' Information</h1>
          </div>
          <div className="patients-main-panel">
            <h1>
              Disclaimer: Patients' must be made aware of the consultation fee
              before any treatment proceeds.
            </h1>
            <table>
              <thead>
                <tr>
                  <th>Ticket Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Status</th>
                  <th>Treatment</th>
                  <th>Date scanned</th>
                  <th>Bill</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{data.tickedId}</td>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.status}</td>
                  <td>{data.treatment}</td>
                  <td>{data.date}</td>
                  <td>{data.bill}</td>
                </tr>

                <tr>
                  <td>12ab4-xyzt9-77klm-0012</td>
                  <td>Jane Smith</td>
                  <td>35</td>
                  <td>Inactive</td>
                  <td>Diabetes</td>
                  <td>10-02-26</td>
                  <td>#543,210</td>
                </tr>
                <tr>
                  <td>77gh2-asd45-zz111-9981</td>
                  <td>Michael Brown</td>
                  <td>52</td>
                  <td>Active</td>
                  <td>Hypertension</td>
                  <td>22-01-26</td>
                  <td>#876,902</td>
                </tr>
                <tr>
                  <td>99kl8-ppq23-ll908-2233</td>
                  <td>Emily Davis</td>
                  <td>29</td>
                  <td>Active</td>
                  <td>Asthma</td>
                  <td>05-03-26</td>
                  <td>#234,111</td>
                </tr>
                <tr>
                  <td>44mn6-bvc78-ty456-7765</td>
                  <td>Chris Wilson</td>
                  <td>47</td>
                  <td>Inactive</td>
                  <td>Arthritis</td>
                  <td>18-12-25</td>
                  <td>#654,332</td>
                </tr>
                <tr>
                  <td>55op1-qwe90-az333-1122</td>
                  <td>Sarah Johnson</td>
                  <td>38</td>
                  <td>Active</td>
                  <td>Flu</td>
                  <td>28-02-26</td>
                  <td>#98,765</td>
                </tr>
                <tr>
                  <td>21rt5-uio67-hjk22-7788</td>
                  <td>David Lee</td>
                  <td>44</td>
                  <td>Active</td>
                  <td>COVID-19</td>
                  <td>11-01-26</td>
                  <td>#321,654</td>
                </tr>
                <tr>
                  <td>66zx3-cvb12-nmm45</td>
                  <td>Olivia Martin</td>
                  <td>31</td>
                  <td>Inactive</td>
                  <td>Allergy</td>
                  <td>07-03-26</td>
                  <td>#145,908</td>
                </tr>
                <tr>
                  <td>88qw9-ert54-yui88-9900</td>
                  <td>James Anderson</td>
                  <td>60</td>
                  <td>Active</td>
                  <td>Heart Disease</td>
                  <td>25-12-25</td>
                  <td>#1,234,567</td>
                </tr>
                <tr>
                  <td>73df2-ghj89-klm12-3344</td>
                  <td>Linda Thomas</td>
                  <td>55</td>
                  <td>Inactive</td>
                  <td>Stroke</td>
                  <td>03-02-26</td>
                  <td>#765,432</td>
                </tr>
                <tr>
                  <td>90vb4-nmk56-poi77-5566</td>
                  <td>Robert Taylor</td>
                  <td>49</td>
                  <td>Active</td>
                  <td>Kidney Disease</td>
                  <td>19-03-26</td>
                  <td>#543,999</td>
                </tr>
                <tr>
                  <td>99kl8-ppq23-ll908-2233</td>
                  <td>Emily Davis</td>
                  <td>29</td>
                  <td>Active</td>
                  <td>Asthma</td>
                  <td>05-03-26</td>
                  <td>#234,111</td>
                </tr>
                <tr>
                  <td>44mn6-bvc78-ty456-7765</td>
                  <td>Chris Wilson</td>
                  <td>47</td>
                  <td>Inactive</td>
                  <td>Arthritis</td>
                  <td>18-12-25</td>
                  <td>#654,332</td>
                </tr>
                <tr>
                  <td>55op1-qwe90-az333-1122</td>
                  <td>Sarah Johnson</td>
                  <td>38</td>
                  <td>Active</td>
                  <td>Flu</td>
                  <td>28-02-26</td>
                  <td>#98,765</td>
                </tr>
                <tr>
                  <td>21rt5-uio67-hjk22-7788</td>
                  <td>David Lee</td>
                  <td>44</td>
                  <td>Active</td>
                  <td>COVID-19</td>
                  <td>11-01-26</td>
                  <td>#321,654</td>
                </tr>
                <tr>
                  <td>66zx3-cvb12-nmm45</td>
                  <td>Olivia Martin</td>
                  <td>31</td>
                  <td>Inactive</td>
                  <td>Allergy</td>
                  <td>07-03-26</td>
                  <td>#145,908</td>
                </tr>
                <tr>
                  <td>88qw9-ert54-yui88-9900</td>
                  <td>James Anderson</td>
                  <td>60</td>
                  <td>Active</td>
                  <td>Heart Disease</td>
                  <td>25-12-25</td>
                  <td>#1,234,567</td>
                </tr>
                <tr>
                  <td>73df2-ghj89-klm12-3344</td>
                  <td>Linda Thomas</td>
                  <td>55</td>
                  <td>Inactive</td>
                  <td>Stroke</td>
                  <td>03-02-26</td>
                  <td>#765,432</td>
                </tr>
                <tr>
                  <td>90vb4-nmk56-poi77-5566</td>
                  <td>Robert Taylor</td>
                  <td>49</td>
                  <td>Active</td>
                  <td>Kidney Disease</td>
                  <td>19-03-26</td>
                  <td>#543,999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Patient;
