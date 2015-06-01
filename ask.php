<?php
require 'chatterbotapi.php';
$factory = new ChatterBotFactory();
$bot = $factory->create(ChatterBotType::CLEVERBOT);
$botSession = $bot->createSession();

$question = $_POST['q'];
$answer = (!empty($question)) ?  $botSession->think($question) : '' ;
echo (!empty($answer)) ? $answer : 'Sorry can you ask that again?';

?>