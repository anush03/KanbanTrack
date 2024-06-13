declare module "react-lettered-avatar" {
  import { Component } from "react";

  interface LetteredAvatarProps {
    name: string;
    size?: number;
    radius?: number;
    color?: string;
    backgroundColor?: string;
    className?: string;
    style?: React.CSSProperties;
  }

  class LetteredAvatar extends Component<LetteredAvatarProps, any> {}

  export default LetteredAvatar;
}
