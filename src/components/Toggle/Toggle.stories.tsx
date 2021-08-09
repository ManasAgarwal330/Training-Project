import Toggle from './Toggle';
import '../../index.css';

export default{
    title:'Toggle',
    component:Toggle,
}

export const Main = (args:any) => <Toggle {...args}></Toggle>

Main.args = {};