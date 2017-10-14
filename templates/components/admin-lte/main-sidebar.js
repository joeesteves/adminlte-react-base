import React from 'react'
import UserPanel from './sidebar/user-panel'
import SearchBar from './sidebar/search-bar'
import Menu from './sidebar/menu'
export default () => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <UserPanel />
      <SearchBar />
      <Menu />
    </section>

  </aside>
)