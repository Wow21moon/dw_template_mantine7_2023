import { FC, memo } from 'react'
import { Select, Skeleton } from '@mantine/core'
import { useGetDepartment } from '@/entities/Department/api/departmentApi'
import type { SelectProps } from '@mantine/core'

type DepartmentSelectProps = SelectProps

export const DepartmentSelect: FC<DepartmentSelectProps> = memo((props) => {
	const { ...otherProps } = props
	const { data, isLoading } = useGetDepartment()

	if (isLoading) {
		return <Skeleton w={'100%'} h={56} />
	}

	if (!data) return null

	return (
		<Select
			data={data.list}
			placeholder={'Выберите Ваш департамент'}
			label={'Департамент'}
			{...otherProps}
		/>
	)
})

DepartmentSelect.displayName = 'DepartmentSelect'
