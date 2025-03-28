
import React from 'react'
import Home from './Home' 
import { theme } from '../../constants/theme'
import Search from './Search'
import Logout from './logout'
import Mail from './mail'
import Lock from './Lock'
import Heart from './Heart'
import Plus from './Plus'
import Location from './Location'
import Call from './Call'
import Camera from './Camera'
import Edit from './Edit'
import ArrowLeft from './ArrowLeft'
import ThreeDotCircle from './ThreeDotCircle'
import ThreeDotsHorizontal from './ThreeDotsHorizontal'
import Comment from './Comment'
import Share from './Share'
import Send from './Send'
import Delete from './Delete'
import Image from './Image'
import Video from './Video'


const icons={
    home:Home,
    mail:Mail,
    lock:Lock,
    heart:Heart,
    plus:Plus,
    search:Search,
    location:Location,
    call:Call,
    camera:Camera,
    edit:Edit,
    arrowLeft:ArrowLeft,
    threeDotCircle:ThreeDotCircle,
    threeDotsHorizontal:ThreeDotsHorizontal,
    comment:Comment,
    share:Share,
    send:Send,
    delete:Delete,
    logout:Logout,
    Image:Image,
    video:Video,


}
const Icon = ({name, ...props})=>{
const IconComponent = icons[name];
  return (
    <IconComponent
        height={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 1.9}
        color={theme.colors.textLight}
        {...props}
    />
  )
}

export default Icon;

