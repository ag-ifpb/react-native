#!/bin/bash
GOPATH=$(pwd)

# go get golang.org/x/tools/cmd/present
# go install golang.org/x/tools/cmd/present

$GOPATH/bin/present main.slide
