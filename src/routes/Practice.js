import React from "react";
import axios from "axios";
import Report from "../components/Report";
import { Bar } from "react-chartjs-2";
import "./../App.css";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
};
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
    const data_length = datas.data.data.length;

    for (var i = data_length - 1; i > data_length - 51; i--) {
      const report = datas.data.data[i];
      console.log(report);
      this.state.reports.push(report);
    }

    this.setState({
      isLoading: false
    });
  };

  getgraphs = async () => {
    const chart = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
        }
      ]
    };
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
          <div>
            <div class='one'>
              <h2> Ontario COVID - 19 data </h2>{" "}
              <h3> (Past 50 days~Current) </h3>{" "}
              <table>
                <tbody>
                  <tr className='table_menu'>
                    <td> date </td> <td> total_cases </td>
                    <td> new_cases </td> <td> total_fatalities </td>{" "}
                    <td> total_tests </td>
                    <td> total_hospitalizations </td> <td> total_criticals </td>
                    <td> total_recoveries </td>{" "}
                  </tr>{" "}
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
                      new_cases={report.change_cases}
                    />
                  ))}{" "}
                </tbody>{" "}
              </table>{" "}
            </div>{" "}
            <div className='two'>
              <Bar
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Average Rainfall per month",
                    fontSize: 20
                  },
                  legend: {
                    display: true,
                    position: "right"
                  }
                }}
              />{" "}
            </div>{" "}
          </div>
        )}{" "}
      </section>
    );
  }
}

export default Home;
