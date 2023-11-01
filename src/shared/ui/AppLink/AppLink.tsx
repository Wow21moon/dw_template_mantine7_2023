import { FC, ReactNode } from 'react'
import { LinkProps, NavLink } from 'react-router-dom'
interface AppLinkProps extends LinkProps {
	children?: ReactNode
}
export const AppLink: FC<AppLinkProps> = (props) => {
	const { to, children, ...otherProps } = props

	return (
		<NavLink to={to} {...otherProps}>
			{children}
		</NavLink>
	)
}
