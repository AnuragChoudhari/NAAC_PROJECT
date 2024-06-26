import React from 'react'
import "./SideBar.css";

function SideBar() {
  return (
    <>
    <div class="ui vertical menu">
  <div class="item">
    <div class="header">Products</div>
    <div class="menu">
      <a class="item">Enterprise</a>
      <a class="item">Consumer</a>
    </div>
  </div>
  <div class="item">
    <div class="header">CMS Solutions</div>
    <div class="menu">
      <a class="item">Rails</a>
      <a class="item">Python</a>
      <a class="item">PHP</a>
    </div>
  </div>
  <div class="item">
    <div class="header">Hosting</div>
    <div class="menu">
      <a class="item">Shared</a>
      <a class="item">Dedicated</a>
    </div>
  </div>
  <div class="item">
    <div class="header">Support</div>
    <div class="menu">
      <a class="item">E-mail Support</a>
      <a class="item">FAQs</a>
    </div>
  </div>
</div>
    </>
  )
}

export default SideBar