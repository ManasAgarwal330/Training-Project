import { FC,memo } from 'react'
import { Switch } from '@headlessui/react'

interface Props{
    enabled:boolean,
    setEnabled:(val:boolean) => void,
    className?:string
}

const Toggle:FC<Props> = ({enabled,setEnabled,className})  => {

  return (
    <div className={className}>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        type = 'button'
        className={`${enabled ? 'bg-blue-500' : 'bg-gray-300'}
          relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-100 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block h-4 w-4 rounded-full border bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div>
  )
}

export default memo(Toggle);
