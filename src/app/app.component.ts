import { Component } from '@angular/core';
import { TABCONTENTTYPE } from './types/tab.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  TAB__CONTENT: TABCONTENTTYPE[] = [
    {
      title: "Autocomplete",
      icon: "string",
      copy: "Supports 500+ popular CLI tools • Inline descriptions & powerful suggestions • Completions are open source • Fully customizable",
      tag_line: "IDE-style autocomplete for your existing terminal",
      call_to_action: "check it out",
      image: "https://fig.io/videos/main-demo-grey.mp4"
    },
    {
      title: "Scripts",
      icon: "string",
      copy: "• Beautiful, interactive terminal UIs • Automatically provisioned & distributed to your entire team • Out-of-the-box error reporting and usage monitoring",
      tag_line: "Build internal CLI tools faster",
      call_to_action: "get started",
      image: "https://res.cloudinary.com/djkmxf6kr/video/upload/v1679086699/workflows-video_qr8ckp.webm"
    },
    {
      title: "SSH Credentials",
      icon: "string",
      copy: "• Securely share servers and identities with your team • Instant access to your remote machines with a GUI or CLI",
      tag_line: "Fast, secure access to your SSH servers",
      call_to_action: "learn more",
      image: "https://fig.io/videos/ssh-video.mp4"
    },
    {
      title: "Dotfiles",
      icon: "string",
      copy: "• Edit aliases, env variables, $PATH, and more • Instant sync across your devices • Share dotfiles with your team",
      tag_line: "Easily edit, sync, and share your dotfiles",
      call_to_action: "learn more",
      image: "https://res.cloudinary.com/djkmxf6kr/video/upload/v1679085603/dotfiles-video_g2y5bs.webm"
    },
    {
      title: "Plugins",
      icon: "string",
      copy: "• 1-click install for 400+ plugins • Instant sync across devices • Supports zsh, bash, & fish",
      tag_line: "Manage and sync your shell plugins",
      call_to_action: "explore all plugins",
      image: "https://res.cloudinary.com/djkmxf6kr/video/upload/v1679087594/plugins-temp_hrjy1m.webm"
    },
  ];
  selectedTabContent = this.TAB__CONTENT[0];
}
