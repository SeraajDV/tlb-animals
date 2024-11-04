import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Home from '../pages/Home'

export const Route = createLazyFileRoute('/')({
  component: Home,
})