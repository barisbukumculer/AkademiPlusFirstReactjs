import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Sayfa Bulunamadı.</p>
                <p className="lead">
                    Böyle Bir Sayfa Yok.
                  </p>
                <NavLink to={"/"} className="btn btn-primary">Ana Sayfa'ya Git</NavLink>
            </div>
        </div>
  )
}

export default NotFound