<?php


function url_shortener($url) {

    $post = $_POST;
    $url = filter_var(trim($post['url']), FILTER_VALIDATE_URL);

      if ($url === false) {
        exit("Ссылка введена не корректно! <br><a href=\"form.php\">Назад</a>");
      }
      $file_content_as_array = file('url.txt');

      foreach ($file_content_as_array as $str) {

          $index = strpos($str, $url); 
          // по индексу подстроки str определяем наличие ссылки в файле url.txt
          if ($index !== false) {
              
              echo "Cсылка " . $url . " уже есть в файле."; 
              return;
          }
      }
      echo "Это новая ссылка: " . $url;

      $short_url = md5($url);
      $short_url = substr($short_url, 0, 7);

      echo ". Короткая ссылка: " . $short_url . "<br>";

      $file_with_links = 'url.txt'; // берем файл

      $fp = fopen($file_with_links, 'a'); // открываем

      fwrite($fp, "$url : $short_url\r\n");  // записываем

      fclose($fp); // закрываем
  
}

url_shortener($url);










