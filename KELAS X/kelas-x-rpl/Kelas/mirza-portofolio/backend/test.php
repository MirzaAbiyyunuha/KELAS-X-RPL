<?php
$ch = curl_init('http://localhost:8000/api/register');
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['name'=>'foo','email'=>'testx@email.com','password'=>'password']));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Accept: application/json', 'Content-Type: application/json']);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
echo "Status: " . curl_getinfo($ch, CURLINFO_HTTP_CODE) . "\n";
echo "Response: " . $result . "\n";
