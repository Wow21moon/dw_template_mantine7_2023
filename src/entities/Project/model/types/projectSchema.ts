export interface ProjectResponse {
	status: string
	list: Project[]
}

export interface Project {
	id: number
	name: string
	picture: string
	description: string
	department: string
	fio: string
	department_id: number
}
