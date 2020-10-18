import React from "react";
import axios from "axios";
import Report from "../components/Report";
import "./../App.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    reports: []
  };

  getReports = async () => {
    const datas = await axios.get(
      "https://api.covid19tracker.ca/reports/province/on"
    );

    console.log(datas.data.data[0]);
    console.log(datas.data.data.length);

    for (var i = 0; i < datas.data.data.length; i++) {
      const report = datas.data.data[i];
      console.log(report);
      this.state.reports.push(report);
    }

    this.setState({
      isLoading: false
    });
  };

  componentDidMount() {
    this.getReports();
  }

  render() {
    const { isLoading, reports } = this.state;
    console.log(reports);
    return (
      <section className='container'>
        {" "}
        {isLoading ? (
          <div className='loader'>
            <span className='loader_text'> Loading... </span>{" "}
          </div>
        ) : (
          <div className='movies'>
            {" "}
            {reports.map((report) => (
              <Report
                id={report.id}
                date={report.date}
                cases={report.total_cases}
                fatalities={report.total_fatalities}
                tests={report.total_tests}
                hospitalizations={report.total_hospitalizations}
                criticals={report.total_criticals}
                recoveries={report.total_recoveries}
              />
            ))}{" "}
          </div>
        )}{" "}
      </section>
    );
  }
}

export default Home;
