import React from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

import "../pageScss/wishlist.scss"

import WishListJSON from "../jsonData/wishList.json"

import Meta from "../components/meta"

const data = WishListJSON

export default function WishList(props) {
  let arrItems = []

  for (let i = 0; i < Object.keys(data).length; i++) {
    arrItems.push(
      <div className="wish-container">
        <h4 className="wish-title">{data[Object.keys(data)[i]]["title"]}</h4>
        <img
          className="wish-image"
          src={data[Object.keys(data)[i]]["image"]}
          alt={data[Object.keys(data)[i]]["title"]}
        />
        <p className="wish-why">{data[Object.keys(data)[i]]["why"]}</p>
        <p className="wish-price">
          $ {data[Object.keys(data)[i]]["price"] + ".00"}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Meta
        title="Contact Me"
        desc="Contact Owen G. Bean with email owenbean400@gmail.com or with Linkedin"
      />
      <Navbar />
      <main className="wish-main">
        <h1>Owen Wish List</h1>
        <p className="descrip">
          I know my family going to keep asking what I want even though. Here
          you go!
        </p>
        <div className="wish-contains">{arrItems}</div>
      </main>
      <Footer />
    </div>
  )
}
