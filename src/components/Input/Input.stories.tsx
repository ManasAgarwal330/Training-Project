import Input from './Input';
import '../../index.css';
import { BiUser } from 'react-icons/bi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {AiOutlineMail} from 'react-icons/ai';

const icons = {BiUser,RiLockPasswordLine,AiOutlineMail};

export default{
    title:'Input',
    component:Input,
    argTypes:{
        Icon:{
            options:Object.keys(icons),
            mapping:icons,
            control:{type:'select'}
        }
    },
}

export const Main = (args:any) => <Input {...args}></Input>

Main.args = {
    Icon: BiUser,
    placeholder:'UserName',
    touched:true,
};