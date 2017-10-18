import React from 'react'
import TabsNav from './tabs/tabs-nav'
import TabsContent from './tabs/tabs-content'

export default () => (
  <aside className="control-sidebar control-sidebar-dark">
    <TabsNav items={[
      {href:'#control-sidebar-home-tab', faClassName:'fa fa-home'},
      {href:'#control-sidebar-settings-tab', faClassName:'fa fa-gears'},
    ]} />
    <TabsContent />


    {/* <div className="control-sidebar-bg"></div> */}
  </aside>)