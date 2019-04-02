import { Component, Prop } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  @Prop() popon: string;
  @Prop() text: string;
  @Prop() popover: string;

  render() {
    return (
      <div>
        <span class="text">
          {this.text}
          <span class={this.popover}>{this.popon}</span>
        </span>
      </div>
    );
  }
}
