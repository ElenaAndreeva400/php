<?php
echo 'Задача N 1';
for($x=1; $x<=10; $x++) {
     echo '<br>';
     for ($y=1; $y<=10; $y++) {
        $res = $y*$x;
         echo $res." ";
         if ($res > 100) {
         break;
         }
     }
};
echo '<br>';
echo '<br>';
echo 'Задача N 2';


$days = 1;
for($x=2, $y=10; $x<$y; $x++) {
     $x = $x + $x*0.1;
     $days ++;
     echo '<br>';
     echo round($x, 2)." км пробежал спортсмен за ".$days." дня/дней";
     echo '<br>';
    
};  
echo '<br>';
echo '<br>';
echo 'Задача N 3';
echo '<br>';

//Задача на while или for. Дано число $num=800. 
//Делите его на 2 столько раз, пока результат деления 
//не станет меньше 50. Какое число получится? 
//Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла).

$count = 1;
$num = 800;
for ($i=0; $num >=50; $i++) {
    echo $num." делим на 2 и это итерация номер ".$count.". "; 
    $num /= 2;
    $count ++;
    echo "Pезультат ".$num;
    echo '<br>';
};

