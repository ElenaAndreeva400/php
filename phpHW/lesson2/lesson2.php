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

echo 'Задача N 4';
echo '<br>';

$book = ['title'=>'PHP 7',
         'pageCount' => 342];
print_r(array_slice($book, 0, 1));  // Array ( [title] => PHP 7 ) 
echo '<br>';
print_r(array_slice($book, 1, 1));  // Array ( [pageCount] => 342 ) 
echo '<br>';
print_r(array_chunk($book, 1, true));  // Array ( [0] => Array ( [title] => PHP 7 ) [1] => Array ( [pageCount] => 342 ) ) 
echo '<br>';
echo "N4 ii - Функция, которая возвращает количество элементов в массиве";
echo '<br>';
var_dump(count($book));
echo '<br>';
echo "N4 iii - Как проверить наличие значения в массиве";
echo '<br>';

$os = array("Mac", "NT", "Irix", "Linux");
if (in_array("PHP 7", $book)) {
    echo "Нашел PHP 7";
    echo '<br>';
}
if (in_array(342, $book)) {
    echo "Нашел 342";
    echo '<br>';
}
echo '<br>';
echo "N4 iv - отличие array_replace_recursive и array_replace";
echo '<br>';

echo 'Исходный массив';
$base = array('citrus' => array( "orange") , 'berries' => array("blackberry", "raspberry"),);
print_r($base);
echo '<br>';
echo 'Меняем на значения массива';
$replacements = array('citrus' => array('pineapple'), 'berries' => array('blueberry'));
print_r($replacements);
echo '<br>';
echo "array_replace_recursive() - рекурсивная функция: 
она будет рекурсивно углубляться в массивы и применять 
к всем внутренним значениям один и тот же процесс.
array array_replace_recursive ( array $array1 , array $array2 [, array $... ] )
array_replace_recursive() заменяет значения массива array1 на соответствующие 
по ключам значения из всех следующих массивов. Если ключ из первого массива
 есть во втором, его значение будет заменено на значение из второго массива.
  Если ключ есть во втором массиве, но отсутствует в первом, он будет создан
   в первом массиве. Если ключ есть только в первом массиве, то он остается
    как есть. Если передано несколько массивов, они будут обработаны по порядку,
     последующие перезаписывают предыдущие значения.";
echo '<br>';
$basket = array_replace_recursive($base, $replacements);
print_r($basket); // Array([citrus] => Array([0] => pineapple)[berries] => Array([0] => blueberry[1] => raspberry))
echo '<br>';
$basket = array_replace($base, $replacements);
print_r($basket); // Array([citrus] => Array([0] => pineapple)[berries] => Array([0] => blueberry))

echo '<br>';
echo "N4 v - как работает функция compact";
echo '<br>';
$city  = "San Francisco";
$state = "CA";
$event = "SIGGRAPH";

$location_vars = array("city", "state");

$result = compact("event", $location_vars);
print_r($result); // Array ( [event] => SIGGRAPH [city] => San Francisco [state] => CA ) 

echo '<br>';
echo "N5 - отсортировать массив";
echo '<br>';
$arr = [
     '1'=> [
         'price' => 10,
         'count' => 2
     ],
     '2'=> [
         'price' => 5,
         'count' => 5
     ],
     '3'=> [
         'price' => 8,
         'count' => 5
     ],
     '4'=> [
         'price' => 12,
         'count' => 4
     ],
     '5'=> [
         'price' => 8,
         'count' => 4
     ],
 ];
// По возрастанию значения ключа price:
//function cmp_function($a, $b){
	//return ($a['price'] > $b['price']);
//};
 
//uasort($arr, 'cmp_function');
//print_r($arr);
//echo '<br>';
// По убыванию значения ключа price:
//function cmp_function_desc($a, $b){
	//return ($a['price'] < $b['price']);
//};
 
//uasort($arr, 'cmp_function_desc');
//print_r($arr);

// По возрастанию значения ключа count:
function cmp_function($c, $d){
return ($c['count'] > $d['count']);
};
 
uasort($arr, 'cmp_function');
print_r($arr);
echo '<br>';
// По убыванию значения ключа count:
function cmp_function_desc($c, $d){
	return ($c['count'] < $d['count']);
};
 
uasort($arr, 'cmp_function_desc');
print_r($arr);


