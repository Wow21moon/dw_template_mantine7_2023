export interface VoteAll {
	fio: string
	department: number
	members?: number[]
	projects?: number[]
}

export interface VoteAllResponse {
	status: string
	message: string
}
