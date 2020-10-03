// Write a function getDrinkByProfession/get_drink_by_profession() that receives as input parameter a string, and produces outputs according to the following table:
function get_drink_by_profession(string $s): string {
  $input = strtolower($s);
  
  if ($input === "jabroni"){
    return "Patron Tequila";
  }
  elseif ($input === "school counselor"){
    return "Anything with Alcohol";
  }
  elseif ($input === "programmer"){
    return "Hipster Craft Beer";
  }  
  elseif ($input === "bike gang member"){
    return "Moonshine";
  }  
  elseif ($input === "politician"){
    return "Your tax dollars";
  }  
  elseif ($input === "rapper"){
    return "Cristal";
  }  
  else{
    return "Beer";
  }    
  
}