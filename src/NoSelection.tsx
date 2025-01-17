/*
 * @Author: Rodrigo Soares
 * @Date: 2019-07-31 20:38:15
 * @Last Modified by:   Rodrigo Soares
 * @Last Modified time: 2019-07-31 20:38:15
 */

import * as React from "react"
import { html as io } from "./Lib/io.js"

class NoSelection extends React.Component {
  constructor(props) {
    super(props)
    this.onOKClick = this.onOKClick.bind(this)
  }

  onOKClick(e) {
    io.send("cancel", null)
  }

  render() {
    return (
      <div>
        <h1>Uh Oh!</h1>
        <p>You need to select at least one frame or layer.</p>
        <footer>
          <button
            type="submit"
            className="button button--primary"
            onClick={this.onOKClick}
          >
            Close
          </button>
        </footer>
      </div>
    )
  }
}

export default NoSelection
