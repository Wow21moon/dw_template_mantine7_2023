import { FC, ReactNode } from 'react'
import classes from './VoteController.module.css'

interface VoteControllerProps {
	children: ReactNode
}

export const VoteController: FC<VoteControllerProps> = ({ children }) => {
	return (
		<div className={classes.voteController}>
			<div className={classes.wrapper}>{children}</div>
		</div>
	)
}
