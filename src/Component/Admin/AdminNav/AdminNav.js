import React from 'react';

const AdminNav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-danger">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item active">
              <a class="nav-link text-white mr-5 h4" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white mr-5 h4" href="/addAllPD">Add AllProduct</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white mr-5 h4" href="/topSave">Add TopSave</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white mr-5 h4" href="/trending">Add Trending</a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white mr-5 h4" href="/orders">Orders</a>
            </li>


          </ul>

        </div>
      </nav>
    </div>
  );
};

export default AdminNav;
