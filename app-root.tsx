import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @Prop() popon: string;
  @Prop() text: string;
  @Prop() popover: string;

  render() {
    return (
      <div class="wrapper">
        <p class="text">{this.text}</p>
        <span class={this.popover}>{this.popon}</span>
      </div>
    );
  }
}
