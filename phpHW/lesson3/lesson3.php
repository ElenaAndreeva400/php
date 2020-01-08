<?php
echo "Задание №1<br><br>";
function convertToCamelCase ($some_string) {
  $some_string = str_replace("_", " ", $some_string); 
  echo $some_string;
  echo "<br>";
  $some_string = ucwords($some_string); // Возвращает строку, в которой первый символ каждого слова переведен в верхний регистр, если этот символ является буквой.
  echo $some_string;
  echo "<br>";
  $some_string = str_replace(" ", "", $some_string); 
  echo $some_string;
  echo "<br>";
  $some_string = lcfirst($some_string);
  echo $some_string;
  echo "<br>";
  return $some_string;
}
$our_string = 'this_is_string';
convertToCamelCase($our_string);

echo "<br>Задание №2<br><br>";
// Дана строка, содержащая полное имя файла
//  (например, 'C:\OpenServer\testsite\www\someFile.txt').
//   Написать функцию, которая сможет выделить из подобной
//    строки имя файла без расширения.
$my_str = 'C:\OpenServer\testsite\www\someFile.txt';
function extract_file_name ($any_string) {
  $path_parts= pathinfo($any_string);
  print_r($path_parts);
  echo "<br>";
  $filename = basename($any_string,'.'.$path_parts['extension']);
  echo $filename;
}
extract_file_name($my_str);

echo "<br><br>Задание №3<br><br>";
// Дано два текста. Определите степень совпадения текстов
//  (придумать алгоритм определения соответствия, использовать 5 балльную шкалу).
$text1 = "Это текст для тестирования нашей функции";
$text2 = "Функция тестирования должна обработать оба текста";

function comparisonDegree ($one_text, $another_text) {
  $sim = similar_text($one_text, $another_text, $perc);
  $percentage = round($perc);
  echo "Количество совпадающих символов в двух строках: $sim";
  echo "<br>";
  echo "Процент совпадения: $percentage %";
  echo "<br>";
  if ($perc === 100) {
    echo "Степень совпадения: 5 баллов";
    echo "<br>";
  } elseif ($perc > 80) {
    echo "Степень совпадения: 4 балла";
    echo "<br>";
  } elseif ($perc > 50) {
    echo "Степень совпадения: 3 балла";
    echo "<br>";
  } elseif ($perc > 30) {
    echo "Степень совпадения: 2 балла";
    echo "<br>";
  } elseif ($perc > 10) {
    echo "Степень совпадения: 1 балл";
    echo "<br>";
  } else {
    "Cовпадений нет";
    echo "<br>";
  }
    
}
comparisonDegree($text1, $text2);

echo "<br><br>Задание №4<br><br>";
$arr1 = [13, 55, 100, 99];
foreach ($arr1 as $key => $value) {
  echo "$value\n";
}

foreach ($arr1 as $elem1) {
    $sum = 0;
    $someElem = $elem1;
    do {
        $sum += $someElem%10;
    } while ($someElem = (int)($someElem/10));
    $arr2[$i] = $sum;
    $i++;
    echo "<br>Сумма чисел $elem1 равна $sum";
}
echo "<br>";
asort($arr2);
foreach ($arr2 as $key => $value) {
  echo "$value\n";
}

echo "<br><br>Задание №5<br>";

$my_string = "tHiS iS A sTriNg tO tesT";

function convert_str($str, $func) {
  echo "<br>" . $func($str);
}

$char_up = function($str) {
  return strtoupper($str);
};

$char_low = function($str) {
  return strtolower($str);
};

$first_char_up = function($str) {
  $all_low = strtolower($str);
  return  mb_convert_case($all_low, MB_CASE_TITLE, "UTF-8");// или ucwords()
};

convert_str($my_string, $char_up);
convert_str($my_string, $char_low);
convert_str($my_string, $first_char_up);
