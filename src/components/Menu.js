import React from 'react'

function Menu() {
    return (
        <>
        <div className="list-group">
            <a href="?#" className="list-group-item list-group-item-action active" aria-current="true">
                The current link item
            </a>
            <a href="?#" className="list-group-item list-group-item-action">A second link item</a>
            <a href="?#" className="list-group-item list-group-item-action">A third link item</a>
            <a href="?#" className="list-group-item list-group-item-action">A fourth link item</a>
            <a className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
        </div>
        <div className='mt-2 mb-2 d-none d-lg-block'>
            <a href='https://www.google.com.tr/' target='_blank'>
            <img src="https://d.dengegazetesi.com.tr/news/170111.jpg" class="img-fluid" alt="..."></img>
            </a>
        </div>
        </>
    )
}

export default Menu