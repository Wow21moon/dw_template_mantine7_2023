export interface DepartmentResponse {
	status: string
	list: Department[]
}

export interface Department {
	id: number
	name: string
}

export interface TransformedDepartmentResponse {
	status: string
	list: TDepartment[]
}

export interface TDepartment {
	value: string
	label: string
}
