import { Component } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  render() {
    return (
      <div>
        <span class="text">
          hover me<span class="popover above">Popover on</span>
        </span>
      </div>
    );
  }
}
