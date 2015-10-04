#!/bin/bash -   
#title          :run.sh 
#description    :Create server on port 8000 and watch for sass changes
#author         :Stefanos Chrs <stefanoschrs@hotmail.com>
#date           :20150927
#version        :1.0    
#usage          :./run.sh
#notes          :You need xfce4-terminal, python and sass installed
#bash_version   :4.3.11(1)-release
#============================================================================

# Shell Colors
R=$(tput setaf 1) 	# Red 
G=$(tput setaf 2) 	# Green 
B=$(tput setaf 4) 	# Blue
N=$(tput sgr0) 		# Normal

echo -e "${G} Starting server on localhost:8000 ${N}"
xfce4-terminal --tab -e "bash -c 'python -m SimpleHTTPServer; exec bash'"

echo -e "${G} Starting SASS watch ${N}"
xfce4-terminal --tab -e "bash -c 'sass --watch presentation:presentation example1:example1 example2:example2 example3:example3 bonus1:bonus1 --style expanded --no-cache --sourcemap=none; exec bash'"