<?php
  // Подключаем класс для работы с excel
  require_once('PHPExcel-1.8/Classes/PHPExcel.php');
  // Подключаем класс для вывода данных в формате excel
  require_once('PHPExcel-1.8/Classes/PHPExcel/Writer/Excel5.php');
// Создаем объект класса PHPExcel
  $objPHPExcel = PHPExcel_IOFactory::load('simple.xlsx');
  $objPHPExcel->setActiveSheetIndex(0);
  $aSheet = $objPHPExcel->getActiveSheet();

  $highestRow = $aSheet->getHighestRow();
  $highestRow2 = (int)($highestRow) + 1;

  if($highestRow2 <= 21) {
    // $aSheet->setCellValue('A'.$highestRow2, $_POST['name']);
    // $aSheet->setCellValue('B'.$highestRow2, $_POST['phone']);
    // $aSheet->setCellValue('C'.$highestRow2, $_POST['email']);
    if($_POST['name'] == false and $_POST['phone'] == false and $_POST['email'] == false) {
      return;
    } else {
      $aSheet->setCellValue('A'.$highestRow2, $_POST['name']);
      $aSheet->setCellValue('B'.$highestRow2, $_POST['phone']);
      $aSheet->setCellValue('C'.$highestRow2, $_POST['email']);
    }
  } else {
    echo ('На жаль, усе месцы на бліжэйшую экскурсію забраніраваны.');
  };

  $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
  $objWriter->save('simple.xlsx');
?>
