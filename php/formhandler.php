<?php
$to = "mail@in-worker.net.ua";
$subject = "Заявка с сайта";
$headers = "From: message@in-worker.net.ua";

if (

isset($_POST["name"]) && 
isset($_POST["phone"]) && 
isset($_POST["email"]) && 
isset($_POST["company"]) && 
isset($_POST["massage"])

) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'Имя' => $_POST["name"],
        'Телефон' => $_POST["phone"],
        'Email' => $_POST["email"],
    	'Компания' => $_POST["company"],        
    	'Сообщение' => $_POST["massage"]        
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 

    foreach ($result as $key => $value) {
        $txt_for_mail .= $key . ": " . $value ."\n";npm install sass-autoprefixer

 }

  mail($to, $subject, $txt_for_mail, $headers);

}

?>