<?php
$post = $_POST;
//var_dump($post);
$files = $_FILES;
var_dump($files);
$file_name = [];
$ext = [];
$tmp_name = [];
$quantity = count($files['picture']['name']);
for ($i = 0; $i < $quantity; $i++) {
  $file_name[] = $files['picture']['name'][$i];
  $ext[] =  pathinfo($file_name[$i], PATHINFO_EXTENSION);
    if ($ext[$i] === 'jpg' || $ext[$i] === 'png') {
      if ((int)$files['picture']['size'][$i] < pow(1024, 3)) {
        $name[] = md5($file_name[$i]);
        $fullname[] = $name[$i] . '.' . $ext[$i];
        $tmp_name[] = $files['picture']['tmp_name'][$i];
        if (move_uploaded_file($tmp_name[$i], "img/$fullname[$i]")) {
          echo 'Файл ' . $fullname[$i] . ' загружен.<br>';
        } else {
          echo 'Не удалось загрузить файл' . $fullname[$i] . '<br>';
        }
      } else { 
        echo 'Pазмер файла превышает возможный.';
      }
    } else { 
      echo 'Возможное расширение файлов ".jpg" и/или "png".';
    }
}