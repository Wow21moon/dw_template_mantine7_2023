export interface Member {
	id: number
	picture: string
	fio: string
	department: string
	position: string
	description: string
	department_id: number
}

export interface MemberListResponse {
	status: string
	list: Member[]
}
