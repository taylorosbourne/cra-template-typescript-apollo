#!/bin/bash

SRC="src"

COMPONENTTYPE=${1?Error: Enter a component type (component/container/page)}
COMPONENTNAME=${2?Error: Enter a name for your component}
COMPONENTCAPITALIZED=$(tr '[:lower:]' '[:upper:]' <<< ${COMPONENTNAME:0:1})${COMPONENTNAME:1}

write_files () {

# Create component dir
	mkdir $COMPONENTNAME
	echo "  create    $COMPONENTNAME"
	cd $COMPONENTNAME

# Create component.tsx
	touch $COMPONENTNAME.tsx
	echo "  create    $COMPONENTNAME.tsx"
  echo "import React, { FC } from 'react';

const $COMPONENTCAPITALIZED: FC = () => <h1>$COMPONENTNAME</h1>;

export default $COMPONENTCAPITALIZED;" >$COMPONENTNAME.tsx

# Create component-styles.ts
	touch $COMPONENTNAME-styles.ts
  echo "  create    $COMPONENTNAME-styles.ts"
  echo "import styled from 'styled-components';" >$COMPONENTNAME-styles.ts

# Create component.test.ts
	touch $COMPONENTNAME.test.ts
  echo "  create    $COMPONENTNAME.test.ts"
  echo "export function writeTests() {
	console.log('write tests');
}" >$COMPONENTNAME.test.ts

# Create package.json
	touch package.json
	echo "  create    package.json"
	echo "{
	\"main\":  \"$COMPONENTNAME.tsx\"
}" >package.json

# Go Home to root
	cd "../../../"
	echo "  create    $COMPONENTNAME component"
}

# Confirm src dir exists
if [ -e "$SRC" ]; then
    cd "$SRC"
else
    echo "No $SRC Dir"
fi

# Verify where to write files based on first arg
if [ "$COMPONENTTYPE" == 'component' ]; then
  if [ -e "components" ]; then
    cd "components"
	  write_files
  else
    echo "No components Dir"
  fi
fi

if [ "$COMPONENTTYPE" == 'container' ]; then
	if [ -e "containers" ]; then
    cd "containers"
	  write_files
  else
    echo "No containers Dir"
  fi
fi

if [ "$COMPONENTTYPE" == 'page' ]; then
	if [ -e "pages" ]; then
    cd 'pages'
	  write_files
  else
    echo "No pages Dir"
  fi
fi