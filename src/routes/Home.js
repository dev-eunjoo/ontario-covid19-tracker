import React from "react";
import axios from "axios";
import Report from "../components/Report";
import Today from "../components/Today";
import { Line } from "react-chartjs-2";
// import LineChart from "../components/LineChart";
import "./../App.css";

// const state = {
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Rainfall",
//       backgroundColor: "rgba(75,192,192,1)",
//       borderColor: "rgba(0,0,0,1)",
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// };
class Home extends React.Component {
  state = {
    isLoading: true,
    reports: []
  };

  render_graph = () => {
    const { reports } = this.state;
    const date = [];
    const on = [];

    console.log(reports.length);
    for (var i = 0; i < reports.length; i++) {
      const report_date = reports[i].lastUpdatedAtApify.slice(0, 10);
      date.push(report_date);
      const report_on = reports[i].infectedByRegion[6].infectedCount;
      on.push(report_on);
    }
    // for (var i = 0; i < reports.length; i++) {
    //     const report_date = reports[i].lastUpdatedAtApify.slice(0, 10);
    //     date.push(report_date);
    //     const report_on = reports[i].infectedByRegion[6].infectedCount;
    //     on.push(report_on);
    //   }
    console.log(date.reverse());
    console.log(on.reverse());
    const data_graph = {
      labels: date,
      datasets: [
        {
          label: "Total cases",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: on
        }
      ]
    };

    return (
      <div className='two'>
        <Line
          data={data_graph}
          options={{
            title: {
              display: true,
              text: "Ontario COVID-19 total cases",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "right"
            }
          }}
        />{" "}
      </div>
    );
  };
  render_table = () => {
    const { reports } = this.state;
    return (
      <div class='one'>
        <h2> Ontario COVID - 19 data </h2> <h3> (Past 50 days~Current) </h3>
        <table>
          <tbody>
            <tr className='table_menu'>
              <td> date </td> <td> Canada </td>
              <td> Ontario </td> <td> Prince Edward Island </td>
              <td> Nova Scotia </td> <td> New Brunswick </td>
              <td> Quebec </td> <td> Newfoundland and Labrador </td>
              <td> Manitoba </td> <td> Saskatchewan </td>
              <td> Alberta </td> <td> British Columbia </td>
              <td> Yukon </td> <td> Northwest Territories </td>
              <td> Nunavut </td>{" "}
            </tr>{" "}
            {reports.map((report, index) => (
              <Report
                id={report.id}
                date={report.lastUpdatedAtApify}
                canada={report.infected}
                nl={report.infectedByRegion[1].infectedCount}
                pe={report.infectedByRegion[2].infectedCount}
                ns={report.infectedByRegion[3].infectedCount}
                nb={report.infectedByRegion[4].infectedCount}
                qc={report.infectedByRegion[5].infectedCount}
                on={report.infectedByRegion[6].infectedCount}
                mb={report.infectedByRegion[7].infectedCount}
                sk={report.infectedByRegion[8].infectedCount}
                ab={report.infectedByRegion[9].infectedCount}
                bc={report.infectedByRegion[10].infectedCount}
                yt={report.infectedByRegion[11].infectedCount}
                nt={report.infectedByRegion[12].infectedCount}
                nu={report.infectedByRegion[13].infectedCount}
              />
            ))}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>
    );
  };
  getReports = async () => {
    const datas = await axios.get(
      "https://api.apify.com/v2/datasets/ji95MgtBVgGJF7XcP/items?format=json&clean=1"
    );

    console.log(datas.data[1]);
    console.log(datas.data.length);
    const data_length = datas.data.length;

    for (var i = data_length - 1; i > data_length - 51; i--) {
      const report = datas.data[i];
      const today = report.lastUpdatedAtApify.slice(0, 10);

      console.log(report);
      if (report.infected != null) {
        if (i < data_length - 1) {
          const yesterday = datas.data[i + 1].lastUpdatedAtApify.slice(0, 10);
          if (today !== yesterday) {
            console.log(report);
            this.state.reports.push(report);
          }
        } else {
          this.state.reports.push(report);
        }
      }
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
            <span className='loader_text'> Loading...Collecting the data </span>{" "}
          </div>
        ) : (
          <div>
            <Today
              id={reports[0].id}
              date={reports[0].lastUpdatedAtApify}
              today_canada={reports[0].infected}
              today_on={reports[0].infectedByRegion[6].infectedCount}
              yesterday_canada={reports[1].infected}
              yesterday_on={reports[1].infectedByRegion[6].infectedCount}
              new_on={
                reports[0].infectedByRegion[6].infectedCount -
                reports[1].infectedByRegion[6].infectedCount
              }
              new_canada={reports[0].infected - reports[1].infected}
            />{" "}
            {this.render_graph()} {this.render_table()}{" "}
            <div class='sign'> Copyright© Eunjoo Na 2020 </div>{" "}
          </div>
        )}{" "}
      </section>
    );
  }
}

export default Home;
