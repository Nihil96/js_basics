## Домашна 2

### Задача 1.

а. Дефинирајте една променлива globalNum која што ќе ја има вредноста 10. Креирајте функција која што ќе се вика checkScope и пробајте да ја испринтате вредноста на globalNum.

б. Во функцијата checkScope, декларирајте нова променлива localNum која што ќе ја има истата вредност како и променливата globalNum. Надвор од функцијата, со помош на console.log, споредете ги двете променливи со операторот “===”. Што добивте како резултат во конзолата?

в. Да се декларира еден if услов како овој подолу:

```
if(true){
let blockNum = 10;
}
```

Надвор од овој услов, со помош на typeof операторот пробајте да го испечатите типот на променливата blockNum. Што добивте како резултат во конзолата?

### Задача 2.

a. Да се декларира променлива score koja што иницијално ќе има вредност од 78. Потоа да се напишат услови користејќи if, else if и else, такашто ќе ја одредите соодветната оценка врз основа на следната скала за оценување:

- 90 - 100: Grade: А
- 80 - 89: Grade: B
- 70 - 79: Grade: C
- 60 - 69: Grade: D
- 0 - 59: Grade: F

Пр. Доколку score ja има вредноста 90, во конзола треба да се испринта: Grade: A. Доколку score има вредност што е поголема од 100 или помала од 0, да се испринта пораката: “Invalid score! Please enter a score between 0 and 100”.

б. Декларирајте променлива dayNumber и доделете ѝ нумеричка вредност помеѓу 1 и 7. (Да претпоставиме дека 1 е недела, 2 е понеделник и така натаму.) Користете switch за да го одредите соодветниот ден во неделата врз основа на дадениот dayNumber.

Пр. Доколку dayNumber има вредност 2, во конзола треба да се испечати: The day is Monday. Доколку вредноста не е број кој што се наоѓа помеѓу 1 и 7, да се испечати: Invalid day number. Please enter a number between 1 and 7.

### Задача 3.

Да се напишат 3 функции од кои што:

- првата функција потребно е да има три параметри(numbers) и да го враќа збирот од тие три броеви
- втората функција потребно е да има еден параметар(string) и да го враќа истиот тој string
- третата функција потребно е да има два параметри(numbers) и да ги споредува истите. Ако броевите се исти, да ја испечати пораката "These numbers are equal" во спротивно да испечати "These numbers are not equal"

### Задача 4.

а. Направете променлива age и доделете ѝ број што ја претставува вашата возраст.
Користете if-else за да проверите дали можете легално да купите алкохол, да гласате, двете или ниту едно од нив. Да се претпостави дека со наполнети 18 години може да гласате но не и да купите алкохол додека пак со наполнети 21 година имате право на двете. Користете console.log за да печатите соодветна порака во конзола.

б. Да се декларира функција која што ќе има еден параметар month. Внатре во функцијата да се искористи switch услов кој што за даден месец како аргумент, ќе го враќа бројот на денови од тој месец. За Февруари да се претпостави дека секогаш ќе има 28 дена. Доколку се внесе вредност која што не е месец, да се испринта “Invalid input” во конзолата.
Пр. Input: “June”, Output: 30

в. Направете променлива temperature и доделете ѝ број што ја претставува температурата во Целзиусови.
Користете if-else за да одредите дали надвор е жешко, топло или ладно. За жешко сме смета температура над 30 степени, за топло над 20 додека пак за ладно се смета температура под 15 степени. Степените помеѓу 15 и 20 се сметаат за умерено време. Користете console.log за да печатите соодветна порака во конзола.

### Задача 5.

Да се напише функција која што ќе има еден параметар number која што ќе користи console.log за печатење во конзола со следниве услови. За броеви деливи со 3, да го отпечати зборот „Fizz“ за броеви деливи со 5 (а не со 3), да се отпечати зборот „Buzz“, а за броеви кои се деливи и со 3 и со 5 да се испечати зборот “FizzBuzz”. Доколку внесениот аргумент не исполнува ниту еден од овие услови, да се испечати самиот број во конзола.