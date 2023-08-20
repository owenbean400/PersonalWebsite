import React from "react"
import Navbar from "../components/navbar/navbar.js"
import Footer from "../components/footer/footer.js"
import Meta from "../components/meta"
import "../pageScss/privacy.scss"

class PrivacyPolicy extends React.Component {
  render() {
    return (
      <div>
        <Meta title="Privacy Policy" desc="Owen G. Bean" />
        <Navbar />
        <main class="pp-main">
          <h1>Privacy Policy</h1>
          <p>
            All of my personal programmed applications, I will not store any
            data. Some of my apps will send data to third party services. Down
            below is more information on the certain applications that uses
            third party services.
          </p>
          <div class="pp-app">
            <h3>Magic 8 Watch</h3>
            <p>Magic 8 Watch does not collect or save any data.</p>
          </div>
          <div class="pp-app">
            <h3>Tipping Calculator</h3>
            <p>
              The tipping calculator watch app foes not collect or save any
              data.
            </p>
          </div>
          <div class="pp-app">
            <h3>Open Weather</h3>
            <p>
              Open Weather application will grab your location as a coordinate
              pair. The coordinate pair set is sent to National Weather Service
              API to retrieve the the weather information of the clostest
              weather station to that coordinate pair. Here is the privacy
              policy of the&nbsp;
              <a href="https://www.weather.gov/privacy">
                National Weather Service applications
              </a>
              .
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default PrivacyPolicy
