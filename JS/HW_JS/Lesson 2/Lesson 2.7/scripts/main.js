let time = +prompt('Введіть час: ')

switch (true){
    case(time >=0 && time <= 14):
        console.log("Перша четверть !");
        break;
    case(time >=15 && time <= 29):
        console.log("Друга четверть ! ");
        break;
    case(time >= 30 && time <= 44):
        console.log("Третя четверть !");
        break;
    case(time >= 45 && time <= 59):
        console.log("Четверта четверть !");
        break;
    default:
        console.log("Помилка !")
}