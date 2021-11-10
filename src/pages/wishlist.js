import React, { useState } from "react"
import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"

import "../pageScss/wishlist.scss"

import WishListJSON from "../jsonData/wishList.json"

import Meta from "../components/meta"

const data = WishListJSON

export default function WishList(props) {
  const [arr, setArr] = useState(sort("rank", compareRank, true))
  const [showSortSetting, setShowSortSetting] = useState(false)

  return (
    <div>
      <Meta
        title="Owen Bean - Wish List"
        desc="Owen Bean christmas wish list is for people who are going to ask what I want for christmas."
      />
      <Navbar />
      <main className="wish-main">
        <h1>Owen Wish List</h1>
        <p className="descrip">
          I know my family going to keep asking what I want. Here you go!
        </p>
        <p
          className="wish-sort-setting"
          onClick={() => setShowSortSetting(!showSortSetting)}
        >
          {!showSortSetting ? "Open Sorting Setting" : "Close Sorting Setting"}
        </p>
        {showSortSetting ? (
          <form className="wish-form">
            <FilterHTML
              title="Price"
              start="Cheap"
              end="Expensive"
              JSONstringFilter="price"
              filterCompare={comparePrice}
              arrState={setArr}
            />
            <FilterHTML
              title="Title"
              start="A"
              end="Z"
              JSONstringFilter="title"
              filterCompare={compareTitle}
              arrState={setArr}
            />
            <FilterHTML
              title="Rank"
              start="First"
              end="Last"
              JSONstringFilter="rank"
              filterCompare={compareRank}
              arrState={setArr}
            />
          </form>
        ) : null}

        <div className="wish-contains">{arr}</div>
      </main>
      <Footer />
    </div>
  )
}

function FilterHTML(props) {
  return (
    <div className="wish-filter-container">
      <p className="wish-filter-title">{props.title}</p>
      <div>
        <input
          type="radio"
          name="sort"
          onChange={() => {
            props.arrState(
              sort(props.JSONstringFilter, props.filterCompare, true)
            )
          }}
        ></input>
        <label>
          {props.start} to {props.end}
        </label>
      </div>
      <div>
        <input
          type="radio"
          name="sort"
          onChange={() => {
            props.arrState(
              sort(props.JSONstringFilter, props.filterCompare, false)
            )
          }}
        ></input>
        <label>
          {props.end} to {props.start}
        </label>
      </div>
    </div>
  )
}

function sort(strObject, compFN, ascend) {
  let index
  let arrItems = []
  for (let i = 0; i < Object.keys(data).length; i++) {
    index = findFront(arrItems, data[Object.keys(data)[i]], compFN, ascend)
    if (index < 0) index = index * -1 - 1
    console.log(index)
    arrItems.splice(
      index,
      0,
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
        <p className="wish-rank">{data[Object.keys(data)[i]]["rank"]}</p>
      </div>
    )
  }
  return arrItems
}

function findFront(ar, el, compare_fn, ascend) {
  var m = 0
  var n = ar.length - 1
  while (m <= n) {
    var k = (n + m) >> 1
    var cmp = ascend ? compare_fn(el, ar[k]) : compare_fn(el, ar[k]) * -1
    if (cmp > 0) {
      m = k + 1
    } else if (cmp < 0) {
      n = k - 1
    } else {
      return k
    }
  }
  return -m - 1
}

function comparePrice(a, b) {
  return (
    a["price"] - parseInt(b["props"]["children"][3]["props"]["children"][1])
  )
}

function compareRank(a, b) {
  return a["rank"] - parseInt(b["props"]["children"][4]["props"]["children"])
}

function compareTitle(a, b) {
  return a["title"].localeCompare(
    b["props"]["children"][0]["props"]["children"]
  )
}
