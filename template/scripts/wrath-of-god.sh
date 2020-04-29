#!/bin/bash

obliterate () {
  # Confirm src dir exists
  if [ -e "src" ]; then
      cd "src"
  else
      echo "No src Dir"
  fi

	# BLOW IT ALL AWAY
  rm -rf assets/* components/* containers/* hooks/* pages/* styles/* typings/*
}

echo "Do you wish to unleash the wrath of god?"
select yn in "Yes" "No"; do
    case $yn in
        Yes ) obliterate; break;;
        No ) exit;;
    esac
done
