import {FC} from "react"

export interface Props {children: React.ReactNode}

const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: '10px',
      borderRadius: '5px',
    }}>
      <h3>Dark-Laryout</h3>
      {children}
    </div>
  )
}

export default DarkLayout
