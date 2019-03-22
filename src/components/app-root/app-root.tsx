import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  @Prop() popon: string;
  @Prop() text: string;

  render() {
    return (
      <div>
        <span class="text">
          {this.text}
          <span class="popover above">{this.popon}</span>
        </span>
      </div>
    );
  }
}
