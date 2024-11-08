import ProfileDetails from '../ProfileDetails'
import './index.css'

const FiltersGroup = props => {
  const renderTypeOfEmployment = () => {
    const {employmentTypesList, changeEmployeeList} = props
    return (
      <div className="employment-type-container">
        <h1 className="employment-type-heading">Type of Employment</h1>
        <ul className="employment-type-list-container">
          {employmentTypesList.map(eachEmployeeType => (
            <li
              className="employee-item"
              key={eachEmployeeType.employmentTypeId}
            >
              <input
                type="checkbox"
                id={eachEmployeeType.employmentTypeId}
                onChange={event => changeEmployeeList(event.target.value)}
              />
              <label
                htmlFor={eachEmployeeType.employmentTypeId}
                className="check-label"
              >
                {eachEmployeeType.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderSalaryRange = () => {
    const {salaryRangesList, changeSalary} = props
    return (
      <div className="salary-range-container">
        <h1 className="salary-range-heading">Salary Range</h1>
        <ul className="salary-range-list-container">
          {salaryRangesList.map(eachSalary => (
            <li className="salary-item" key={eachSalary.salaryRangeId}>
              <input
                type="radio"
                id={eachSalary.salaryRangeId}
                name="salary"
                onChange={() => changeSalary(eachSalary.salaryRangeId)}
                className="check-input"
              />
              <label htmlFor={eachSalary.salaryRangeId} className="check-label">
                {eachSalary.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="filters-group-sidebar">
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderTypeOfEmployment()}
      <hr className="horizontal-line" />
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
