import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
      <div>header</div>
      <Outlet />
    </div>
  )
}
