import { useState } from 'react'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle(props) {

  return (
    <Switch.Group as="div" className="flex items-center justify-between space-x-4 mt-2">
      <span className="flex-grow flex flex-col">
        <Switch.Label as="span" className="text-sm font-medium text-gray-900" passive>
          {props.head}
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          {props.description}
        </Switch.Description>
      </span>
      <Switch
        checked={props.enabled}
        onChange={props.setEnabled}
        className={classNames(
          props.enabled ? 'bg-lime-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            props.enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
    </Switch.Group>
  )
}