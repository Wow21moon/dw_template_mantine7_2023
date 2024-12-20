import { Session } from '@/entities/Session'

export interface SessionRequest {
	key: 'session'
	value: Session
}
