import React from 'react'
import { Navigate } from 'react-router-dom'
const currentUser = false

export const requireAuth = (children) => {
  return (
    currentUser ? children : <Navigate to ="/Login" />
  )
}
