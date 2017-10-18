import React from 'react'
import ContentHeader from './content/content-header'
import SmallBox from './content/small-box'

export default (props) => (
  <div className="content-wrapper">
    <ContentHeader title='DashBoard' subtitle='Control Panel' breadcrumbs={[
      { title: 'Home', href: '#', faClassName: 'fa fa-dashboard' },
      { title: 'DashBoard', active: true }
    ]} />

    <section className="content">
      <div className="row">
        <SmallBox color="bg-red">
          <div className="inner">
            <h3>150</h3>
            <p>New Orders</p>
          </div>
          <div className="icon">
            <i className="ion ion-bag"></i>
          </div>
          <a href="" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
        </SmallBox>
        <SmallBox color="bg-green">
          <div className="inner">
            <h3>53<sup style={{ fontSize: "20px" }}>%</sup></h3>

            <p>Bounce Rate</p>
          </div>
          <div className="icon">
            <i className="ion ion-stats-bars"></i>
          </div>
          <a href="" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
        </SmallBox>
        <SmallBox color="bg-aqua">
          <div className="inner">
            <h3>44</h3>
            <p>User Registrations</p>
          </div>
          <div className="icon">
            <i className="ion ion-person-add"></i>
          </div>
          <a href="" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
        </SmallBox>
        <SmallBox color="bg-yellow">
          <div className="inner">
            <h3>65</h3>

            <p>Unique Visitors</p>
          </div>
          <div className="icon">
            <i className="ion ion-pie-graph"></i>
          </div>
          <a href="" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
        </SmallBox>
      </div>



    </section>

  </div>
)