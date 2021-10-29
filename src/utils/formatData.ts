interface FormatDataProps {
  startDate:string;
  endDate:string;
}

const formatData = ({startDate,endDate}:FormatDataProps) => {
    

    const year1 = startDate.split('-')[0]
    const year2 = endDate.split('-')[0]
    const month1 = startDate.split('-')[1]
    const month2 = endDate.split('-')[1]
    const day1 = startDate.split('-')[2].split('T')[0]
    const day2 = endDate.split('-')[2].split('T')[0]

    const hour1 = startDate.split('T')[1].split(':')[0] + ':' + startDate.split('T')[1].split(':')[1]
    const hour2 = endDate.split('T')[1].split(':')[0] + ':' + endDate.split('T')[1].split(':')[1] 

    const months_arr = ['JAN','FEB','MAR','APR','May','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    
   
    
    const resultMonth1 = months_arr[parseInt(month1)-1]
    const resultMonth2 = months_arr[parseInt(month2)-1]
    const finalResult = `${resultMonth1} ${day1}, ${hour1} - ${resultMonth2} ${day2}, ${hour2}`
    return finalResult
  }

export default formatData