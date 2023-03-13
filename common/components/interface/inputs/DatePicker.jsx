import ReactDatePicker from "react-datepicker";

const days = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sa', 'Do']
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const locale = {
    localize: {
        day: n => days[n],
        month: n => months[n]
    },
    formatLong: {
        date: () => 'mm/dd/yyyy'
    }
}

const DatePicker = ({label, id, placeholder, selectedDate, setSelectedDate, dateFormat, monthYearPicker, yearDropdown }) => {
    return (
        <div>
            <label htmlFor={id} className="select-none flex-none">{label}</label>
            <ReactDatePicker 
                selected={selectedDate}
                locale={locale}
                placeholderText={placeholder || ''} 
                onChange={date => setSelectedDate(date)}

                dateFormat={dateFormat || 'dd/MM/yyyy'}
                dateFormatCalendar="MMMM"
                showMonthYearPicker={monthYearPicker || false}
                scrollableYearDropdown= {yearDropdown || false}
                yearDropdownItemNumber={5}
                showYearDropdown= {yearDropdown || false}
            />
        </div>
    );
}
 
export default DatePicker;