import React from "react"
import {Router} from "@reach/router"
import { Link } from "gatsby"

const Home = ()=> <p> This is the Home page </p>
const Settings = ()=> <p> This is the Settings page</p>
const Billing = ()=> <p> This is the Billing page</p>

const Account = () => (
  <>
    <nav>
        <Link to ="/account">Home </Link>
        <Link to ="/account/settings">Settings </Link>
        <Link to = "/account/billing"> Billing</Link>
    </nav>

    <Router>

      <Home path="/account" />
      <Settings path="/account/settings" />
      <Billing path="/account/billing" />
    </Router>

  </>
)

export default Account