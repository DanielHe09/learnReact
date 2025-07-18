import { ReactNode } from "react";

interface Props {
    children: ReactNode;//special prop that allows you to pass content between the opening and closing tags of a component
}

const Alert = ({children}: Props) => {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert