export interface SessionStateScheme {
	session: Session | null
	isAuth: boolean
}
export interface SessionResponse {
	status: string
	result: { session: Session }
}

export interface Session {
	url?: string
	first_name?: string
	last_name?: string
	surname?: string
	department?: string
	select_members?: number[]
	select_project?: number[]
}
