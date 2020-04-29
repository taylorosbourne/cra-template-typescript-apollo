#!/bin/bash

echo "Do you wish to unleash the wrath of god?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) echo "AHHHHHHHHH"; break;;
        No ) exit;;
    esac
done

obliterate () {
  # Confirm src dir exists
  if [ -e "$SRC" ]; then
      cd "$SRC"
  else
      echo "No $SRC Dir"
  fi

  exec "rm -rf assets/* components/* containers/* hooks/* pages/* styles/* typings/*" 

}