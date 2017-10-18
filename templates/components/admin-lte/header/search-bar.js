import React from 'react'

export default () => (
  <form action="#" method="get" className="navbar-form navbar-left">
    <div className="input-group">
      <input type="text" name="q" className="form-control" placeholder="Buscar Productos ó Personas " style={{ borderColor: 'white' }} />
      <span className="input-group-btn">
        <button type="submit" name="search" id="search-btn" className="btn btn-flat" style={{ backgroundColor: 'white' }} ><i className="fa fa-search"></i>
        </button>
      </span>
    </div>
  </form>
)
