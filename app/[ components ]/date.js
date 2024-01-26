import { useEffect, useState } from "react";
import styles from "./header.module.css";

export default function DateComponent() {
  const [day, setDay] = useState('');
  const [dayInNumber, setDayInNumber] = useState(0);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(0);

  useEffect(() => {
    const getDate = new Date();
    const dayInNumber = getDate.getDate();
    setDayInNumber(dayInNumber);
    
    const year = getDate.getFullYear();
    setYear(year);
    
    const day = getDate.getDay();
    setDay(getDayOfWeek(day));

    const month = getDate.getMonth() + 1;
    setMonth(getMonthName(month));
  }, []);

  const getDayOfWeek = (day) => {
    switch (day) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Segunda';
      case 2:
        return 'Terça';
      case 3:
        return 'Quarta';
      case 4:
        return 'Quinta';
      case 5:
        return 'Sexta';
      case 6:
        return 'Sábado';
      default:
        return '';
    }
  };

  const getMonthName = (month) => {
    switch (month) {
      case 1:
        return 'Janeiro';
      case 2:
        return 'Fevereiro';
      case 3:
        return 'Março';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
      case 10:
        return 'Outubro';
      case 11:
        return 'Novembro';
      case 12:
        return 'Dezembro';
      default:
        return '';
    }
  };

  return (
    <p className={styles.date}>{day}, {dayInNumber} de {month} de {year}</p>
  );
}
